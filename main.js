/* ====================== I18N ====================== */
const I18N_KEY = 'relexLang';
const i18n = {
  no: {
    "app.title":"Relex Focus – produkter å se på",
    "app.h1":"Relex Focus",
    "drop.text":"Dra-og-slipp Relex-eksport (CSV eller HTML) hit – eller klikk",
    "drop.title":"Klikk for å velge fil eller dra-og-slipp hit",
    "lang.label":"Språk",
    "filters.maxAvail.label":"Maks. hylle-servicegrad (%)",
    "filters.maxAvail.title":"Maksimal hylle-servicegrad i prosent",
    "filters.maxAvail.ph":"f.eks. 98.5",
    "filters.minSales.label":"Min. salgsverdi (kr)",
    "filters.minSales.title":"Minimum salgsverdi i kroner",
    "filters.minSales.ph":"f.eks. 10000",
    "filters.abc.label":"ABC filter",
    "filters.abc.title":"ABC filter",
    "filters.xyz.label":"XYZ filter",
    "filters.xyz.title":"XYZ filter",
    "filters.search.label":"Søk (navn/kode/lev.)",
    "filters.search.ph":"f.eks. H7, kabel, 7400…, EXIDE, SE1-7270150",
    "filters.mode.label":"Kriterier",
    "filters.mode.title":"Velg filtreringskriterier",
    "filters.mode.both":"Begge (lav hylle OG høy salg)",
    "filters.mode.either":"Minst ett (lav hylle ELLER høy salg)",
    "filters.mode.hylle":"Kun lav hylle",
    "filters.mode.salg":"Kun høy salg",
    "filters.region.label":"Lokasjon (fra Lev.kode)",
    "filters.region.title":"Filtrer på lokasjon",
    "region.no2":"Vestby (NO2-)",
    "region.se1":"Örebro (SE1-)",
    "region.other":"Andre/ukjent",
    "actions.export":"Eksporter utsnitt (CSV)",
    "actions.clearFilter":"Fjern filter",
    "theme.label":"Tema",
    "theme.title":"Bytt mellom mørkt og lyst",
    "theme.light":"☀️ Lys",
    "theme.dark":"🌙 Mørk",
    "kpi.total":"Rader (totalt)",
    "kpi.filtered":"Rader (filtrert)",
    "kpi.avgAvail":"Snitt servicegrad (filtrert)",
    "kpi.avgTurns":"Snitt lageromløp (filtrert)",
    "kpi.sumSales":"Sum salgsverdi (filtrert)",
    "pivot.title":"Leverandører (pivot)",
    "pivot.scopeLabel":"Pivotgrunnlag",
    "pivot.scopeTitle":"Velg pivotgrunnlag",
    "pivot.scope.filtered":"Pivotgrunnlag: Kun filtrerte",
    "pivot.scope.all":"Pivotgrunnlag: Alle produkter",
    "pivot.searchPh":"Søk leverandørnavn / -kode",
    "pivot.filter":"Filter:",
    "pivot.hint":"Klikk på en leverandør for å vise produktene under.",
    "tbl.hint":"Tips: Klikk på kolonne-overskrifter for å sortere.",
    "tblPivot.supplier":"Leverandør",
    "tblPivot.code":"Lev.kode",
    "tblPivot.products":"Produkter",
    "tblPivot.avgAvail":"Snitt hylle-%",
    "tblPivot.avgTurns":"Snitt omløp",
    "tblPivot.sumSales":"Sum salg",
    "tbl.col.supplier":"Leverandør",
    "tbl.col.suppcode":"Lev.kode",
    "tbl.col.product":"Produkt",
    "tbl.col.code":"Kode",
    "tbl.col.avail":"Hylle-servicegrad %",
    "tbl.col.sales":"Salgsverdi",
    "tbl.col.turns":"Lageromløp",
    "tbl.col.stock":"Beholdningsverdi",
    "tbl.col.abc":"ABC",
    "tbl.col.xyz":"XYZ",
    "tbl.col.region": "Region",
    "common.all":"Alle"
  },
  sv: {
    "app.title":"Relex Focus – produkter att titta på",
    "app.h1":"Relex Focus",
    "drop.text":"Dra och släpp Relex-export (CSV/HTML) här – eller klicka",
    "drop.title":"Klicka för att välja fil eller dra-och-släpp här",
    "lang.label":"Språk",
    "filters.maxAvail.label":"Max. hylltillgänglighet (%)",
    "filters.maxAvail.title":"Max hylltillgänglighet i procent",
    "filters.maxAvail.ph":"t.ex. 98.5",
    "filters.minSales.label":"Min. försäljningsvärde (kr)",
    "filters.minSales.title":"Minsta försäljningsvärde i kronor",
    "filters.minSales.ph":"t.ex. 10000",
    "filters.abc.label":"ABC-filter",
    "filters.abc.title":"ABC-filter",
    "filters.xyz.label":"XYZ-filter",
    "filters.xyz.title":"XYZ-filter",
    "filters.search.label":"Sök (namn/kod/lev.)",
    "filters.search.ph":"t.ex. H7, kabel, 7400…, EXIDE, SE1-7270150",
    "filters.mode.label":"Kriterier",
    "filters.mode.title":"Välj filtreringskriterier",
    "filters.mode.both":"Båda (låg hylla OCH hög försäljning)",
    "filters.mode.either":"Minst ett (låg hylla ELLER hög försäljning)",
    "filters.mode.hylle":"Endast låg hylla",
    "filters.mode.salg":"Endast hög försäljning",
    "filters.region.label":"Plats (från Lev.kod)",
    "filters.region.title":"Filtrera på plats",
    "region.no2":"Vestby (NO2-)",
    "region.se1":"Örebro (SE1-)",
    "region.other":"Övriga/okänd",
    "actions.export":"Exportera utdrag (CSV)",
    "actions.clearFilter":"Ta bort filter",
    "theme.label":"Tema",
    "theme.title":"Växla mörkt/ljust",
    "theme.light":"☀️ Ljust",
    "theme.dark":"🌙 Mörkt",
    "kpi.total":"Rader (totalt)",
    "kpi.filtered":"Rader (filtrerade)",
    "kpi.avgAvail":"Snitt tillgänglighet (filtrerad)",
    "kpi.avgTurns":"Snitt lageromsättning (filtrerad)",
    "kpi.sumSales":"Summa försäljningsvärde (filtrerad)",
    "pivot.title":"Leverantörer (pivot)",
    "pivot.scopeLabel":"Pivotunderlag",
    "pivot.scopeTitle":"Välj pivotunderlag",
    "pivot.scope.filtered":"Pivotunderlag: Endast filtrerade",
    "pivot.scope.all":"Pivotunderlag: Alla produkter",
    "pivot.searchPh":"Sök leverantörsnamn / -kod",
    "pivot.filter":"Filter:",
    "pivot.hint":"Klicka på en leverantör för att visa produkterna nedan.",
    "tbl.hint":"Tips: Klicka på kolumnrubriker för att sortera.",
    "tblPivot.supplier":"Leverantör",
    "tblPivot.code":"Lev.kod",
    "tblPivot.products":"Produkter",
    "tblPivot.avgAvail":"Snitt hylla-%",
    "tblPivot.avgTurns":"Snitt omsättning",
    "tblPivot.sumSales":"Summa försäljning",
    "tbl.col.supplier":"Leverantör",
    "tbl.col.suppcode":"Lev.kod",
    "tbl.col.product":"Produkt",
    "tbl.col.code":"Kod",
    "tbl.col.avail":"Hylltillgänglighet %",
    "tbl.col.sales":"Försäljningsvärde",
    "tbl.col.turns":"Lageromsättning",
    "tbl.col.stock":"Lagervärde",
    "tbl.col.abc":"ABC",
    "tbl.col.xyz":"XYZ",
    "tbl.col.region":"Region",
    "common.all":"Alla"
  },
  en: {
    "app.title":"Relex Focus – products to review",
    "app.h1":"Relex Focus",
    "drop.text":"Drag & drop Relex export (CSV/HTML) here — or click",
    "drop.title":"Click to choose file or drag & drop here",
    "lang.label":"Language",
    "filters.maxAvail.label":"Max shelf availability (%)",
    "filters.maxAvail.title":"Maximum shelf availability in percent",
    "filters.maxAvail.ph":"e.g. 98.5",
    "filters.minSales.label":"Min. sales value (kr)",
    "filters.minSales.title":"Minimum sales value in NOK",
    "filters.minSales.ph":"e.g. 10000",
    "filters.abc.label":"ABC filter",
    "filters.abc.title":"ABC filter",
    "filters.xyz.label":"XYZ filter",
    "filters.xyz.title":"XYZ filter",
    "filters.search.label":"Search (name/code/vendor)",
    "filters.search.ph":"e.g. H7, cable, 7400…, EXIDE, SE1-7270150",
    "filters.mode.label":"Criteria",
    "filters.mode.title":"Choose filtering criteria",
    "filters.mode.both":"Both (low shelf AND high sales)",
    "filters.mode.either":"Either (low shelf OR high sales)",
    "filters.mode.hylle":"Only low shelf",
    "filters.mode.salg":"Only high sales",
    "filters.region.label":"Location (from Supp.code)",
    "filters.region.title":"Filter by location",
    "region.no2":"Vestby (NO2-)",
    "region.se1":"Örebro (SE1-)",
    "region.other":"Other/unknown",
    "actions.export":"Export selection (CSV)",
    "actions.clearFilter":"Clear filter",
    "theme.label":"Theme",
    "theme.title":"Toggle dark/light",
    "theme.light":"☀️ Light",
    "theme.dark":"🌙 Dark",
    "kpi.total":"Rows (total)",
    "kpi.filtered":"Rows (filtered)",
    "kpi.avgAvail":"Avg availability (filtered)",
    "kpi.avgTurns":"Avg stock turns (filtered)",
    "kpi.sumSales":"Sum sales value (filtered)",
    "pivot.title":"Suppliers (pivot)",
    "pivot.scopeLabel":"Pivot scope",
    "pivot.scopeTitle":"Choose pivot scope",
    "pivot.scope.filtered":"Pivot scope: Filtered only",
    "pivot.scope.all":"Pivot scope: All products",
    "pivot.searchPh":"Search supplier name / code",
    "pivot.filter":"Filter:",
    "pivot.hint":"Click a supplier to show products below.",
    "tbl.hint":"Tip: Click column headers to sort.",
    "tblPivot.supplier":"Supplier",
    "tblPivot.code":"Supp.code",
    "tblPivot.products":"Products",
    "tblPivot.avgAvail":"Avg shelf-%",
    "tblPivot.avgTurns":"Avg turns",
    "tblPivot.sumSales":"Sum sales",
    "tbl.col.supplier":"Supplier",
    "tbl.col.suppcode":"Supp.code",
    "tbl.col.product":"Product",
    "tbl.col.code":"Code",
    "tbl.col.avail":"Shelf availability %",
    "tbl.col.sales":"Sales value",
    "tbl.col.turns":"Stock turns",
    "tbl.col.stock":"End balance value",
    "tbl.col.abc":"ABC",
    "tbl.col.xyz":"XYZ",
    "tbl.col.region":"Region",
    "common.all":"All"
  }
};

function getLang() {
  return document.documentElement.getAttribute('data-lang') || localStorage.getItem(I18N_KEY) || 'no';
}
function t(key) {
  const L = getLang();
  return (i18n[L] && i18n[L][key]) || (i18n.no && i18n.no[key]) || key;
}
function applyI18n() {
  // textContent
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.getAttribute('data-i18n')); });
  // title
  document.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.getAttribute('data-i18n-title')); });
  // placeholder
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.getAttribute('data-i18n-ph')); });
  // <html lang="">
  const L = getLang();
  document.documentElement.lang = L;
  document.documentElement.setAttribute('data-lang', L);
  localStorage.setItem(I18N_KEY, L);
}
document.addEventListener('DOMContentLoaded', () => {
  const sel = document.getElementById('langSel');
  const LKEY = 'relexLang';

  if (sel) {
    // sett initial verdi fra getLang()
    const initial = getLang();
    sel.value = initial;
    document.documentElement.setAttribute('data-lang', initial);
    document.documentElement.lang = initial;

    sel.addEventListener('change', () => {
      const lang = sel.value;

      // persist + sett på <html>
      localStorage.setItem(LKEY, lang);
      document.documentElement.setAttribute('data-lang', lang);
      document.documentElement.lang = lang;

      // (valgfritt) legg ?lang=xx i URL uten reload
      try {
        const url = new URL(location.href);
        url.searchParams.set('lang', lang);
        history.replaceState(null, '', url.toString());
      } catch {}

      // oversett statiske og dynamiske tekster
      applyI18n();
      applyDynamicLabels();

      // oppdater tema-knappen (tekst byttes via i18n)
      applyTheme(document.documentElement.getAttribute('data-theme') || 'dark');

      // bygg tabeller/pivot på nytt med nye header-tekster
      applyFilters();
    });
  }
});


function applyDynamicLabels() {
  // Pivot-headere
  const sel = q => document.querySelector(q);
  sel('#tblPivot thead th[data-k="SuppName"]').textContent = t('tblPivot.supplier');
  sel('#tblPivot thead th[data-k="SuppCode"]').textContent = t('tblPivot.code');
  sel('#tblPivot thead th[data-k="count"]').textContent    = t('tblPivot.products');
  sel('#tblPivot thead th[data-k="avgAvail"]').textContent = t('tblPivot.avgAvail');
  sel('#tblPivot thead th[data-k="avgTurns"]').textContent = t('tblPivot.avgTurns');
  sel('#tblPivot thead th[data-k="sumSales"]').textContent = t('tblPivot.sumSales');

  // Eksport-knapp
  const exp = sel('#btnExport'); if (exp) exp.textContent = t('actions.export');
}



/* ====================== Tall-format ====================== */
const num = s => {
  if (s == null) return null;
  if (typeof s === 'number') return s;
  s = String(s).trim();
  if (!s) return null;

  // normaliser mellomrom, fjern valuta (NOK-format) og tusenskilletegn
  s = s
    .replace(/\u00A0/g, ' ')
    .replace(/ kr/gi, '')
    .replace(/kr/gi, '')
    .replace(/ /g, '');

  // prosenter som "12,34%" → 12.34
  if (/%$/.test(s)) {
    s = s.replace('%', '').replace(',', '.');
    const v = parseFloat(s);
    return Number.isFinite(v) ? v : null;
  }

  // norsk desimal komma → punktum
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
  // Fjern BOM og normaliser linjer
  let lines = text
    .replace(/^\uFEFF/, '')
    .split(/\r?\n/)
    .map(l => l.trimEnd())
    .filter(l => l.length);

  if (!lines.length) return { headers: [], rows: [], kind: 'csv' };

  // Finn separator: prioriter TAB, ellers velg den med flest treff
  const cand = ['\t', ';', ','];
  const sep = cand
    .map(s => [s, (lines[0].match(new RegExp('\\' + s, 'g')) || []).length])
    .sort((a, b) => b[1] - a[1])[0][0];

  // Enkel CSV-split som håndterer "..."-felt
  const splitCSV = (line) => {
    const out = [];
    let cur = '';
    let inQ = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        // dobbel " inni felt = escape
        if (inQ && line[i+1] === '"') { cur += '"'; i++; }
        else inQ = !inQ;
      } else if (ch === sep && !inQ) {
        out.push(cur); cur = '';
      } else {
        cur += ch;
      }
    }
    out.push(cur);
    return out.map(x => x.trim());
  };

  // Heuristikk: finn første linje som ligner på header
  // (inneholder minst 5 kolonner og treffer noen kjente navn)
  const headerHints = /(Supplier\s*name|Supplier\s*code|Product\s*name|Product\s*code|Availability|Sales|ABC|XYZ|Leverand|Produkt|Hyll|Behold|Lager)/i;
  let headerIdx = 0;
  for (let i = 0; i < Math.min(lines.length, 30); i++) {
    const cells = splitCSV(lines[i]);
    const hitNames = cells.filter(c => headerHints.test(c)).length;
    if (cells.length >= 5 && hitNames >= 2) { headerIdx = i; break; }
  }

  // Les headers
  const headers = splitCSV(lines[headerIdx]).map(h => h.replace(/\s+/g, ' ').trim());

  // Les rader etter header
  const body = lines.slice(headerIdx + 1);
  let rows = body.map(line => {
    const cells = splitCSV(line);
    const o = {};
    headers.forEach((h, i) => (o[h] = (cells[i] ?? '').trim()));
    return o;
  });

  // Filtrer bort totals/# om de forekommer (både norsk/engelsk)
  rows = rows.filter(r => {
    const pn = (r['Produktnavn'] || r['Product name'] || '').trim().toLowerCase();
    const pc = (r['Produktkode'] || r['Product code'] || '').trim();
    if (pn === 'totalt' || pn === 'total') return false;
    if (pc === '#') return false;
    return true;
  });

  return { headers, rows, kind: 'csv' };
}

function parseHTMLTable(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const table = doc.querySelector('table');
  if (!table) return { headers: [], rows: [], kind: 'html' };

  const trs = Array.from(table.querySelectorAll('tr'));

  // Finn første rad som ser ut som header: har minst 3 celler med class="header"
  let headerIdx = -1;
  for (let i = 0; i < trs.length; i++) {
    const hdrCells = trs[i].querySelectorAll('td.header');
    if (hdrCells.length >= 3) { headerIdx = i; break; }
  }
  if (headerIdx === -1) {
    // fallback: gammel oppførsel (men denne HTMLen har ikke <thead>)
    const theadHdrs = Array.from(table.querySelectorAll('thead tr th, thead tr td'))
      .map(th => th.textContent.trim());
    const bodyRows = Array.from(table.querySelectorAll('tbody tr')).map(tr => {
      const o = {};
      Array.from(tr.children).forEach((td, i) => (o[theadHdrs[i] || 'col' + i] = td.textContent.trim()));
      return o;
    });
    return { headers: theadHdrs, rows: bodyRows, kind: 'html' };
  }

  // Les headers fra header-raden
  const headerCells = Array.from(trs[headerIdx].children);
  const headers = headerCells.map(td => td.textContent.trim());

  // Les påfølgende rader som data
  const rows = [];
  for (let i = headerIdx + 1; i < trs.length; i++) {
    const tds = Array.from(trs[i].children);
    if (!tds.length) continue;
    const obj = {};
    tds.forEach((td, idx) => {
      const key = headers[idx] || ('col' + idx);
      obj[key] = td.textContent.trim();
    });
    rows.push(obj);
  }

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
// Matcher norsk, svensk og engelsk – tåler "(kr)" og HTML-varianter
const wantedCols = [
  { k: 'SupplierName',
    m: /^(Leverand.{0,2}r\s*navn|Leverant.{0,2}rs?namn|Supplier\s*name|Vendor\s*name)$/i
  },
  { k: 'SupplierCode',
    m: /^(Leverand.{0,2}r\s*kode|Leverant.{0,2}r.*(kod|nr|nummer)|Supplier\s*code|Vendor\s*(code|id))$/i
  },
  { k: 'Produktnavn',
    m: /(^|\s)Produktnavn|Produktnamn|^Product\s*name$/i
  },
  { k: 'Produktkode',
    m: /^Produktkode$|^Product\s*code$|^SKU$/i
  },

  // Availability-% (eng) / Hylleservicegrad (no/sv)
  // Tåler "Availability-%", "Availability %", "Availability – %", osv.
  { k: 'Hylle%',
    m: /(Hyll(e|es).*service|Hylleservicegrad.*(første|foerste)|^Availability\s*[-–—]?\s*%$|^Availability-?%$)/i
  },

  // Lageromløp / Turnover / Rotation / Stock turn
  { k: 'Lageromløp',
    m: /(Lageroml|oml[øo]pshast|^Turnover$|^Rotation$|^Stock\s*turn$)/i
  },

  // Beholdningsverdi = End balance value (kr) / Inventory/Stock value
  { k: 'Beholdningsverdi',
    m: /(Beholdningens\s*snittverdi|^End\s*balance\s*value(?:\s*\(kr\))?$|^Ending\s*balance\s*value(?:\s*\(kr\))?$|Stock.*value|Inventory.*value)/i
  },

  // Salgsverdi = Sales (value) (kr) – tillat valgfri "(kr)" og variasjoner
  { k: 'Salg verdi',
    m: /^(Sales\s*\(value\)|Sales\s*value)(?:\s*\(kr\))?$|Sales.*value|Sales.*amount/i
  },

  // ABC/XYZ class
  { k: 'ABC',
    m: /(^ABC-?klassifisering|^ABC\s*class$)/i
  },
  { k: 'XYZ',
    m: /(^XYZ-?klasse|^XYZ\s*class$)/i
  }
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
    const A = a[key], B = b[key];

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

    const sA = a.Sales ?? -Infinity, sB = b.Sales ?? -Infinity;
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
  { h: t('tbl.col.supplier'),  k: 'SuppName' },
  { h: t('tbl.col.suppcode'),  k: 'SuppCode' },
  { h: t('tbl.col.product'),   k: 'Navn' },
  { h: t('tbl.col.code'),      k: 'Kode' },
  { h: t('tbl.col.avail'),     k: 'Avail' },
  { h: t('tbl.col.sales'),     k: 'Sales',    descFirst: true },
  { h: t('tbl.col.turns'),     k: 'Turns',    descFirst: true },
  { h: t('tbl.col.stock'),     k: 'StockVal', descFirst: true },
  { h: t('tbl.col.abc'),       k: 'ABC' },
  { h: t('tbl.col.xyz'),       k: 'XYZ' }
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
    t('tbl.col.region'),
    t('tbl.col.supplier'),
    t('tbl.col.suppcode'),
    t('tbl.col.product'),
    t('tbl.col.code'),
    t('tbl.col.avail'),
    t('tbl.col.sales'),
    t('tbl.col.turns'),
    t('tbl.col.stock'),
    t('tbl.col.abc'),
    t('tbl.col.xyz')
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
  localStorage.setItem('relexTheme', theme);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = (theme === 'light') ? t('theme.dark') : t('theme.light');
}
(function initTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  applyI18n();         // <--- kall i18n ved start
  applyTheme(current); // <--- setter korrekt knappetekst per språk
  applyDynamicLabels();// <--- sørg for overskrifter per språk ved start
})();

document.getElementById('themeToggle')?.addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme') || 'dark';
  applyTheme(cur === 'dark' ? 'light' : 'dark');
});
