/* ====================== Tall-format ====================== */
const num = s => {
  if (s == null) return null;
  if (typeof s === 'number') return s;
  s = String(s).trim();
  if (!s) return null;
  s = s
    .replace(/\u00A0/g, ' ')
    .replace(/ kr/gi, '')
    .replace(/kr/gi, '')
    .replace(/ /g, '');
  if (/%$/.test(s)) {
    s = s.replace('%', '').replace(',', '.');
    const v = parseFloat(s);
    return Number.isFinite(v) ? v : null;
  }
  s = s.replace(',', '.');
  const v = Number(s);
  return Number.isFinite(v) ? v : null;
};
// prosenter: CSV=brøk (<=1) → gang med 100, HTML=allerede %
const pct = x => {
  const v = num(x);
  return v == null ? null : v <= 1 ? v * 100 : v;
};
const fmtNo = n => (n == null ? '–' : n.toLocaleString('no-NO'));
const fmtKr = n => (n == null ? '–' : Math.round(n).toLocaleString('no-NO') + ' kr');

/* ====================== Parser ====================== */
async function readFile(f) {
  if (/\.(csv)$/i.test(f.name)) {
    const buf = await f.arrayBuffer();
    let text = new TextDecoder('utf-8', { fatal: false }).decode(buf);
    if (/\uFFFD/.test(text)) text = new TextDecoder('windows-1252').decode(buf);
    return parseCSV(text);
  }
  const text = await f.text();
  if (/<table/i.test(text)) return parseHTMLTable(text);
  return parseCSV(text);
}
function parseCSV(text) {
  const sep = text.indexOf(';') > -1 ? ';' : ',';
  let lines = text
    .replace(/^\uFEFF/, '')
    .split(/\r?\n/)
    .map(l => l.trimEnd())
    .filter(l => l.length);
  if (/^Periodens startdato\s*;.*;Periodens sluttdato\s*;/.test(lines[0])) lines.shift();
  let headers = lines.shift().split(sep).map(h => h.trim());
  if (!headers[0]) headers[0] = 'Produktnavn';
  let rows = lines.map(line => {
    const cells = line.split(sep);
    const o = {};
    headers.forEach((h, i) => (o[h] = (cells[i] ?? '').trim()));
    return o;
  });
  rows = rows.filter(
    r =>
      (r['Produktnavn'] || '').toLowerCase() !== 'totalt' &&
      (r['Produktkode'] || '').trim() !== '#'
  );
  return { headers, rows, kind: 'csv' };
}
function parseHTMLTable(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const t = doc.querySelector('table');
  const headers = [...t.querySelectorAll('thead tr th, thead tr td')].map(th =>
    th.textContent.trim()
  );
  const rows = [...t.querySelectorAll('tbody tr')].map(tr => {
    const o = {};
    [...tr.children].forEach((td, i) => (o[headers[i] || 'col' + i] = td.textContent.trim()));
    return o;
  });
  return { headers, rows, kind: 'html' };
}

/* ====================== App state ====================== */
// Støtter flere kilder (NO2 + SE1 + …)
let data = { sources: [], kind: '' };
let shown = [];
let sortKey = null, sortDir = 1;
let supplierFilter = null; // {SuppName, SuppCode}
let supplierByCode = new Map(); // fallback pr. Produktkode på tvers av filer

/* ====================== Auto-mapping ====================== */
const wantedCols = [
  { k: 'SupplierName',   m: /(Leverand.{0,2}r\s*navn|Leverant.{0,2}rs?namn|Supplier.*name|Vendor.*name)/i },
  { k: 'SupplierCode',   m: /(Leverand.{0,2}r\s*kode|Leverant.{0,2}r.*(kod|nr|nummer)|Supplier.*code|Vendor.*(code|id))/i },
  { k: 'Produktnavn',    m: /(^|\s)Produktnavn|Produktnamn|Product name/i },
  { k: 'Produktkode',    m: /^Produktkode|Product code|SKU/i },
  { k: 'Hylle%',         m: /Hyll(e|es).*service|Hylleservicegrad.*(første|foerste)|Availability.*first/i },
  { k: 'Lageromløp',     m: /Lageroml|oml[øo]pshast|Turnover|Rotation/i },
  { k: 'Beholdningsverdi', m: /Beholdningens snittverdi|Stock.*value|Inventory.*value/i },
  { k: 'Salg verdi',     m: /^Salg.*\(verdi\)|Sales.*value/i },
  { k: 'ABC',            m: /^ABC-?klassifisering/i },
  { k: 'XYZ',            m: /^XYZ-?klasse/i }
];
let manualMap = JSON.parse(localStorage.getItem('relexMap') || '{}');

function buildMap(headers) {
  const map = {};
  for (const col of wantedCols) {
    const saved = manualMap[col.k];
    if (saved && headers.includes(saved) && col.m.test(saved)) {
      map[col.k] = saved;
      continue;
    }
    const hit = headers.find(h => col.m.test(h));
    map[col.k] = hit || null;
  }
  return map;
}

/* ====================== Supplier-lookup over alle kilder ====================== */
function buildSupplierLookupFromSources() {
  supplierByCode = new Map();
  for (const src of data.sources) {
    const cols = buildMap(src.headers);
    for (const row of src.rows) {
      const code = (row[cols['Produktkode']] ?? '').trim();
      const sName = (row[cols['SupplierName']] ?? '').trim();
      const sCode = (row[cols['SupplierCode']] ?? '').trim();
      if (!code) continue;
      const okName = sName && sName !== '#';
      const okCode = sCode && sCode !== '#';
      if ((okName || okCode) && !supplierByCode.has(code)) {
        supplierByCode.set(code, { name: sName, code: sCode });
      }
    }
  }
}

/* ====================== Mapping-fabrikk (med fallback fra oppslag) ====================== */
function mapRowFactory(headers) {
  const cols = buildMap(headers);

  // vis kolonnekart hvis kritisk mangler
  const criticalMissing =
    !cols['Hylle%'] || !cols['Salg verdi'] || !cols['SupplierName'] || !cols['SupplierCode'];
  const helpEl = document.getElementById('help');
  if (helpEl) {
    helpEl.hidden = !criticalMissing;
    if (criticalMissing) {
      populateMapper(headers, cols);
      helpEl.open = true;
    }
  }

  return function mapRow(row) {
    const sNameRaw = (row[cols['SupplierName']] ?? '').trim();
    const sCodeRaw = (row[cols['SupplierCode']] ?? '').trim();
    let sName = sNameRaw === '#' ? '' : sNameRaw;
    let sCode = sCodeRaw === '#' ? '' : sCodeRaw;

    const prodCode = (row[cols['Produktkode']] ?? '').trim();

    // Fallback fra andre filer: hvis mangler i denne raden, hent fra lookup
    if (prodCode && (!sName || !sCode) && supplierByCode.has(prodCode)) {
      const f = supplierByCode.get(prodCode);
      if (!sName) sName = f.name || sName;
      if (!sCode) sCode = f.code || sCode;
    }

    const codeUC = (sCode || '').toUpperCase();
    const Region =
      codeUC.startsWith('NO2-') ? 'NO2' : codeUC.startsWith('SE1-') ? 'SE1' : 'OTHER';

    return {
      SuppName: sName,
      SuppCode: sCode,
      Region,
      Navn: row[cols['Produktnavn']] ?? '',
      Kode: prodCode,
      Avail: pct(row[cols['Hylle%']]),
      Turns: num(row[cols['Lageromløp']]),
      StockVal: num(row[cols['Beholdningsverdi']]),
      Sales: num(row[cols['Salg verdi']]),
      ABC: (row[cols['ABC']] ?? '').trim(),
      XYZ: (row[cols['XYZ']] ?? '').trim(),
      _raw: row
    };
  };
}

/* ====================== Map alle kilder ====================== */
function mapAll() {
  const out = [];
  for (const src of data.sources) {
    const mapRow = mapRowFactory(src.headers);
    out.push(...src.rows.map(mapRow));
  }
  return out;
}

/* ====================== Filtre + sort ====================== */
function applyFilters() {
  // bygg opp leverandør-lookup før mapping
  buildSupplierLookupFromSources();

  const maxAvail = Number(document.getElementById('maxAvail').value || 100);
  const minSales = Number(document.getElementById('minSales').value || 0);
  const abc = document.getElementById('abc').value;
  const xyz = document.getElementById('xyz').value;
  const q = (document.getElementById('q').value || '').trim().toLowerCase();
  const mode = document.getElementById('mode').value;
  const regionSel = document.getElementById('region').value; // "", "NO2", "SE1", "OTHER"

  const mapped = mapAll();

  shown = mapped.filter(r => {
    const hasAvail = Number.isFinite(r.Avail);
    const hasSales = Number.isFinite(r.Sales);
    const condAvail = hasAvail ? r.Avail <= maxAvail : false;
    const condSales = hasSales ? r.Sales >= minSales : false;

    let passes = false;
    if (mode === 'both') passes = condAvail && condSales;
    if (mode === 'either') passes = condAvail || condSales;
    if (mode === 'hylle') passes = condAvail;
    if (mode === 'salg') passes = condSales;

    const okABC = !abc || r.ABC === abc;
    const okXYZ = !xyz || r.XYZ === xyz;
    const okQ =
      !q ||
      r.Navn.toLowerCase().includes(q) ||
      r.Kode.toLowerCase().includes(q) ||
      (r.SuppName || '').toLowerCase().includes(q) ||
      (r.SuppCode || '').toLowerCase().includes(q);
    const okSupplier =
      !supplierFilter ||
      (r.SuppName === supplierFilter.SuppName && r.SuppCode === supplierFilter.SuppCode);
    const okRegion =
      !regionSel || (regionSel === 'OTHER' ? r.Region === 'OTHER' : r.Region === regionSel);

    return passes && okABC && okXYZ && okQ && okSupplier && okRegion;
  });

  // sort
  const key = sortKey || 'Avail';
  shown.sort((a, b) => {
    const A = a[key],
      B = b[key];

    const nA = A == null || A === '';
    const nB = B == null || B === '';
    if (nA && nB) return 0;
    if (nA) return 1;
    if (nB) return -1;

    if (typeof A === 'string' || typeof B === 'string') {
      const cmp = String(A).localeCompare(String(B), 'no', {
        numeric: true,
        sensitivity: 'base'
      });
      return cmp * sortDir;
    }

    if (A < B) return -1 * sortDir;
    if (A > B) return 1 * sortDir;

    const sA = a.Sales ?? -Infinity,
      sB = b.Sales ?? -Infinity;
    if (sA > sB) return -1;
    if (sA < sB) return 1;
    return 0;
  });

  render();
  renderPivot(mapped);
}

/* ====================== Kolonnekart-UI ====================== */
function populateMapper(headers, cols) {
  const ids = [
    ['mapSuppName', 'SupplierName'],
    ['mapSuppCode', 'SupplierCode'],
    ['mapAvail', 'Hylle%'],
    ['mapSales', 'Salg verdi'],
    ['mapTurns', 'Lageromløp'],
    ['mapStock', 'Beholdningsverdi'],
    ['mapABC', 'ABC'],
    ['mapXYZ', 'XYZ']
  ];
  ids.forEach(([id, key]) => {
    const sel = document.getElementById(id);
    if (!sel) return;
    sel.innerHTML = headers
      .map(h => `<option ${cols[key] === h ? 'selected' : ''}>${h}</option>`)
      .join('');
  });
}
document.getElementById('saveMap')?.addEventListener('click', () => {
  manualMap = {
    SupplierName: document.getElementById('mapSuppName')?.value,
    SupplierCode: document.getElementById('mapSuppCode')?.value,
    'Hylle%': document.getElementById('mapAvail')?.value,
    'Salg verdi': document.getElementById('mapSales')?.value,
    Lageromløp: document.getElementById('mapTurns')?.value,
    Beholdningsverdi: document.getElementById('mapStock')?.value,
    ABC: document.getElementById('mapABC')?.value,
    XYZ: document.getElementById('mapXYZ')?.value
  };
  localStorage.setItem('relexMap', JSON.stringify(manualMap));
  applyFilters();
});
document.getElementById('resetMap')?.addEventListener('click', () => {
  manualMap = {};
  localStorage.removeItem('relexMap');
  const firstHeaders = data.sources[0]?.headers || [];
  const cols = buildMap(firstHeaders);
  populateMapper(firstHeaders, cols);
  applyFilters();
});

/* ====================== Render produkter ====================== */
function render() {
  // total = sum av alle kilder
  const totalRows = data.sources.reduce((s, src) => s + src.rows.length, 0);
  document.getElementById('kTotal').textContent = fmtNo(totalRows);
  document.getElementById('kShown').textContent = fmtNo(shown.length);

  const avgA = shown.length ? shown.reduce((s, r) => s + (r.Avail ?? 0), 0) / shown.length : null;
  const turnsVals = shown.map(r => r.Turns).filter(Number.isFinite);
  const avgT = turnsVals.length ? turnsVals.reduce((a, b) => a + b, 0) / turnsVals.length : null;
  const sumS = shown.length ? shown.reduce((s, r) => s + (r.Sales ?? 0), 0) : null;
  document.getElementById('kAvgA').textContent = avgA == null ? '–' : avgA.toFixed(2) + ' %';
  document.getElementById('kAvgT').textContent = avgT == null ? '–' : avgT.toFixed(2);
  document.getElementById('kSumS').textContent = fmtKr(sumS);

  const thead = document.querySelector('#tbl thead tr');
  const tbody = document.querySelector('#tbl tbody');
  thead.innerHTML = '';
  tbody.innerHTML = '';

  const cols = [
    { h: 'Leverandør', k: 'SuppName' },
    { h: 'Lev.kode', k: 'SuppCode' },
    { h: 'Produkt', k: 'Navn' },
    { h: 'Kode', k: 'Kode' },
    { h: 'Hylle-servicegrad %', k: 'Avail' },
    { h: 'Salgsverdi', k: 'Sales', descFirst: true },
    { h: 'Lageromløp', k: 'Turns', descFirst: true },
    { h: 'Beholdningsverdi', k: 'StockVal', descFirst: true },
    { h: 'ABC', k: 'ABC' },
    { h: 'XYZ', k: 'XYZ' }
  ];

  for (const c of cols) {
    const th = document.createElement('th');
    const active = sortKey === c.k;
    const arrow = active ? (sortDir === 1 ? '▲' : '▼') : '';
    th.className = 'clickable';
    th.innerHTML = `${c.h} ${arrow ? `<span class="muted">${arrow}</span>` : ''}`;
    th.addEventListener('click', () => {
      if (sortKey === c.k) {
        sortDir = -sortDir;
      } else {
        sortKey = c.k;
        sortDir = c.descFirst ? -1 : 1;
      }
      applyFilters();
    });
    thead.appendChild(th);
  }

  for (const r of shown) {
    const tr = document.createElement('tr');
    const sev = r.Avail == null ? null : r.Avail < 90 ? 'bad' : r.Avail < 95 ? 'warn' : 'good';
    const sevTag = sev
      ? `<span class="tag ${sev}">${r.Avail.toFixed(2)} %</span>`
      : '<span class="muted">–</span>';
    tr.innerHTML = `
      <td>${r.SuppName || '<span class="muted">–</span>'}</td>
      <td class="muted">${r.SuppCode || ''}</td>
      <td>${r.Navn || '<span class="muted">–</span>'}</td>
      <td class="muted">${r.Kode || ''}</td>
      <td>${sevTag}</td>
      <td>${fmtKr(r.Sales)}</td>
      <td>${r.Turns == null ? '–' : r.Turns.toFixed(2)}</td>
      <td>${fmtKr(r.StockVal)}</td>
      <td>${r.ABC || '<span class="muted">–</span>'}</td>
      <td>${r.XYZ || '<span class="muted">–</span>'}</td>
    `;
    tbody.appendChild(tr);
  }

  document.getElementById('btnExport').disabled = shown.length === 0;

  // chip visning
  const chip = document.getElementById('supplierChip');
  const lab = document.getElementById('supplierLabel');
  if (chip && lab) {
    if (supplierFilter) {
      lab.textContent = `${supplierFilter.SuppName} (${supplierFilter.SuppCode})`;
      chip.hidden = false;
      chip.style.display = 'flex';
    } else {
      lab.textContent = '';
      chip.hidden = true;
      chip.style.display = 'none';
    }
  }
}

/* ====================== Leverandør-pivot ====================== */
let pivotSortKey = 'avgAvail', pivotSortDir = 1;

function renderPivot(mappedAll) {
  const regionSel = document.getElementById('region').value;
  const scope = document.getElementById('pivotScope').value;
  const okRegion = r =>
    !regionSel || (regionSel === 'OTHER' ? r.Region === 'OTHER' : r.Region === regionSel);
  const base = scope === 'filtered' ? shown : mappedAll.filter(okRegion);

  const rows = base.filter(r => r.SuppName || r.SuppCode);

  const map = new Map();
  for (const r of rows) {
    const key = `${r.SuppName}|||${r.SuppCode}`;
    if (!map.has(key))
      map.set(key, {
        SuppName: r.SuppName,
        SuppCode: r.SuppCode,
        sumSales: 0,
        sumAvail: 0,
        cntAvail: 0,
        sumTurns: 0,
        cntTurns: 0,
        count: 0
      });
    const g = map.get(key);
    g.count++;
    if (Number.isFinite(r.Sales)) g.sumSales += r.Sales;
    if (Number.isFinite(r.Avail)) {
      g.sumAvail += r.Avail;
      g.cntAvail++;
    }
    if (Number.isFinite(r.Turns)) {
      g.sumTurns += r.Turns;
      g.cntTurns++;
    }
  }
  let pivot = [...map.values()].map(g => ({
    ...g,
    avgAvail: g.cntAvail ? g.sumAvail / g.cntAvail : null,
    avgTurns: g.cntTurns ? g.sumTurns / g.cntTurns : null
  }));

  const pq = (document.getElementById('pivotQ').value || '').toLowerCase().trim();
  if (pq) {
    pivot = pivot.filter(
      g =>
        (g.SuppName || '').toLowerCase().includes(pq) ||
        (g.SuppCode || '').toLowerCase().includes(pq)
    );
  }

  pivot.sort((a, b) => {
    const ak = a[pivotSortKey] == null ? -Infinity : a[pivotSortKey];
    const bk = b[pivotSortKey] == null ? -Infinity : b[pivotSortKey];
    if (ak < bk) return -1 * pivotSortDir;
    if (ak > bk) return 1 * pivotSortDir;
    if (a.sumSales > b.sumSales) return -1;
    if (a.sumSales < b.sumSales) return 1;
    return 0;
  });

  const tbody = document.querySelector('#tblPivot tbody');
  tbody.innerHTML = '';
  for (const g of pivot) {
    const tr = document.createElement('tr');
    tr.className = 'clickable';
    tr.onclick = () => {
      supplierFilter = { SuppName: g.SuppName, SuppCode: g.SuppCode };
      applyFilters();
    };
    tr.innerHTML = `
      <td>${g.SuppName || '<span class="muted">–</span>'}</td>
      <td class="muted">${g.SuppCode || ''}</td>
      <td>${fmtNo(g.count)}</td>
      <td>${g.avgAvail == null ? '–' : g.avgAvail.toFixed(2) + ' %'}</td>
      <td>${g.avgTurns == null ? '–' : g.avgTurns.toFixed(2)}</td>
      <td>${fmtKr(g.sumSales)}</td>
    `;
    tbody.appendChild(tr);
  }
}

// Sortering i pivot-header
document.querySelectorAll('#tblPivot thead th.clickable').forEach(th => {
  th.addEventListener('click', () => {
    const k = th.getAttribute('data-k');
    if (pivotSortKey === k) pivotSortDir = pivotSortDir === 1 ? -1 : 1;
    else {
      pivotSortKey = k;
      pivotSortDir = 1;
    }
    renderPivot(mapAll());
  });
});

// Oppdater pivot ved søk / scope
document.getElementById('pivotQ').addEventListener('input', () => renderPivot(mapAll()));
document.getElementById('pivotScope').addEventListener('input', () => renderPivot(mapAll()));

/* ====================== Fjern leverandør-filter ====================== */
function clearSupplierFilter(e) {
  if (e) e.preventDefault();
  supplierFilter = null;
  const pq = document.getElementById('pivotQ'); if (pq) pq.value = '';
  const gq = document.getElementById('q');      if (gq) gq.value = '';
  const chip = document.getElementById('supplierChip');
  const lab  = document.getElementById('supplierLabel');
  if (lab) lab.textContent = '';
  if (chip) { chip.hidden = true; chip.style.display = 'none'; }
  applyFilters();
}
const clearBtn = document.getElementById('clearSupplier');
if (clearBtn) clearBtn.addEventListener('click', clearSupplierFilter);
document.addEventListener('click', ev => {
  const btn = ev.target.closest && ev.target.closest('#clearSupplier');
  if (btn) clearSupplierFilter(ev);
});

/* ====================== Export ====================== */
function exportCSV() {
  const headers = [
    'Region','Leverandør','Lev.kode','Produkt','Kode','Hylle%','Salgsverdi',
    'Lageromløp','Beholdningsverdi','ABC','XYZ'
  ];
  const rows = shown.map(r => [
    r.Region,
    r.SuppName,
    r.SuppCode,
    r.Navn,
    r.Kode,
    r.Avail == null ? '' : r.Avail.toFixed(2),
    r.Sales == null ? '' : Math.round(r.Sales),
    r.Turns == null ? '' : r.Turns.toFixed(2),
    r.StockVal == null ? '' : Math.round(r.StockVal),
    r.ABC || '',
    r.XYZ || ''
  ]);
  const csv = [headers.join(';'), ...rows.map(r => r.join(';'))].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const a = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(blob), download: 'relex-focus.csv'
  });
  a.click();
  URL.revokeObjectURL(a.href);
}

/* ====================== Wiring (drag&drop, filtre, multi-file) ====================== */
const drop = document.getElementById('drop'), file = document.getElementById('file');
if (file) file.multiple = true;

drop.addEventListener('click', () => file.click());
drop.addEventListener('dragover', e => { e.preventDefault(); drop.style.borderColor = '#60a5fa'; });
drop.addEventListener('dragleave', () => (drop.style.borderColor = ''));
drop.addEventListener('drop', async e => {
  e.preventDefault(); drop.style.borderColor = '';
  const files = Array.from(e.dataTransfer.files)
    .filter(f => /\.(csv|html?)$/i.test(f.name));
  if (!files.length) return;
  await loadFiles(files);
});
file.addEventListener('change', async () => {
  const files = Array.from(file.files);
  if (files.length) await loadFiles(files);
});

for (const id of ['maxAvail','minSales','abc','xyz','q','mode','region']) {
  document.getElementById(id).addEventListener('input', applyFilters);
}
document.getElementById('btnExport').addEventListener('click', exportCSV);

async function loadFiles(files) {
  // vis “lastet”
  if (files.length === 1) {
    drop.innerHTML = `<span class="pill">Lastet: ${files[0].name}</span>`;
  } else {
    drop.innerHTML = `<span class="pill">Lastet: ${files.length} filer</span>`;
  }

  const pq = document.getElementById('pivotQ'); if (pq) pq.value = '';
  const gq = document.getElementById('q');      if (gq) gq.value = '';

  const parsed = [];
  for (const f of files) parsed.push(await readFile(f));
  data = { sources: parsed, kind: files.length > 1 ? 'multi' : parsed[0]?.kind || '' };

  supplierFilter = null;
  applyFilters();
}

/* ====================== Tema ====================== */
const THEME_KEY = 'relexTheme';
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = (theme === 'light') ? '🌙 Mørk' : '☀️ Lys';
}
// Bruk verdien som allerede ble satt i <head>, fallback = dark
(function initTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  applyTheme(current);
})();
document.getElementById('themeToggle')?.addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme') || 'dark';
  applyTheme(cur === 'dark' ? 'light' : 'dark');
});
