/* =========================================================
   Relex Focus — app.js (clean bootstrap, v1)
   ========================================================= */

/* ====================== I18N ====================== */
const I18N_KEY = 'relexLang';
const i18n = {
  no: {
    'app.title': 'Relex Focus – produkter å se på',
    'app.h1': 'Relex Focus',
    'drop.text': 'Dra-og-slipp Relex-eksport (CSV eller HTML) hit – eller klikk',
    'drop.title': 'Klikk for å velge fil eller dra-og-slipp hit',
    'lang.label': 'Språk',
    'filters.maxAvail.label': 'Maks. hylle-servicegrad (%)',
    'filters.maxAvail.title': 'Maksimal hylle-servicegrad i prosent',
    'filters.maxAvail.ph': 'f.eks. 98.5',
    'filters.minSales.label': 'Min. salgsverdi (kr)',
    'filters.minSales.title': 'Minimum salgsverdi i kroner',
    'filters.minSales.ph': 'f.eks. 10000',
    'filters.abc.label': 'ABC filter',
    'filters.abc.title': 'ABC filter',
    'filters.xyz.label': 'XYZ filter',
    'filters.xyz.title': 'XYZ filter',
    'filters.search.label': 'Søk (navn/kode/lev.)',
    'filters.search.ph': 'f.eks. H7, kabel, 7400…, EXIDE, SE1-7270150',
    'filters.mode.label': 'Kriterier',
    'filters.mode.title': 'Velg filtreringskriterier',
    'filters.mode.both': 'Begge (lav hylle OG høy salg)',
    'filters.mode.either': 'Minst ett (lav hylle ELLER høy salg)',
    'filters.mode.hylle': 'Kun lav hylle',
    'filters.mode.salg': 'Kun høy salg',
    'filters.region.label': 'Lokasjon (fra Lev.kode)',
    'filters.region.title': 'Filtrer på lokasjon',
    'filters.minQty.label': 'Min. salgsantall',
    'filters.minQty.title': 'Minimum antall solgte enheter',
    'filters.minQty.ph': 'f.eks. 1',
    'filters.minUnits.label': 'Min. beholdning (stk)',
    'filters.minUnits.title': 'Minimum beholdning i antall enheter',
    'filters.minUnits.ph': 'f.eks. 1',
    'filters.onlySO.label': 'Stockouts',
    'filters.onlySO.text': 'Kun rader med stockout',
    'region.no2': 'Vestby (NO2-)',
    'region.se1': 'Örebro (SE1-)',
    'region.other': 'Andre/ukjent',
    'actions.export': 'Eksporter utsnitt (CSV)',
    'actions.clearFilter': 'Fjern filter',
    'theme.label': 'Tema',
    'theme.title': 'Bytt mellom mørkt og lyst',
    'theme.light': '☀️ Lys',
    'theme.dark': '🌙 Mørk',
    'kpi.total': 'Rader (totalt)',
    'kpi.filtered': 'Rader (filtrert)',
    'kpi.avgAvail': 'Snitt servicegrad (filtrert)',
    'kpi.avgTurns': 'Snitt lageromløp (filtrert)',
    'kpi.sumSales': 'Sum salgsverdi (filtrert)',
    'pivot.title': 'Leverandører (pivot)',
    'pivot.scopeLabel': 'Pivotgrunnlag',
    'pivot.scopeTitle': 'Velg pivotgrunnlag',
    'pivot.scope.filtered': 'Pivotgrunnlag: Kun filtrerte',
    'pivot.scope.all': 'Pivotgrunnlag: Alle produkter',
    'pivot.searchPh': 'Søk leverandørnavn / -kode',
    'pivot.filter': 'Filter:',
    'pivot.hint': 'Klikk på en leverandør for å vise produktene under.',
    'tbl.hint': 'Tips: Klikk på kolonne-overskrifter for å sortere.',
    'tblPivot.supplier': 'Leverandør',
    'tblPivot.code': 'Lev.kode',
    'tblPivot.products': 'Produkter',
    'tblPivot.avgAvail': 'Snitt hylle-%',
    'tblPivot.avgTurns': 'Snitt omløp',
    'tblPivot.sumSales': 'Sum salg',
    'tbl.col.supplier': 'Leverandør',
    'tbl.col.suppcode': 'Lev.kode',
    'tbl.col.product': 'Produkt',
    'tbl.col.code': 'Kode',
    'tbl.col.avail': 'Hylle-servicegrad %',
    'tbl.col.sales': 'Salgsverdi',
    'tbl.col.turns': 'Lageromløp',
    'tbl.col.stock': 'Beholdningsverdi',
    'tbl.col.abc': 'ABC',
    'tbl.col.xyz': 'XYZ',
    'tbl.col.region': 'Region',
    'common.all': 'Alle'
  },
  sv: {
    'app.title': 'Relex Focus – produkter att titta på',
    'app.h1': 'Relex Focus',
    'drop.text': 'Dra och släpp Relex-export (CSV/HTML) här – eller klicka',
    'drop.title': 'Klicka för att välja fil eller dra-och-släpp här',
    'lang.label': 'Språk',
    'filters.maxAvail.label': 'Max. hylltillgänglighet (%)',
    'filters.maxAvail.title': 'Max hylltillgänglighet i procent',
    'filters.maxAvail.ph': 't.ex. 98.5',
    'filters.minSales.label': 'Min. försäljningsvärde (kr)',
    'filters.minSales.title': 'Minsta försäljningsvärde i kronor',
    'filters.minSales.ph': 't.ex. 10000',
    'filters.abc.label': 'ABC-filter',
    'filters.abc.title': 'ABC-filter',
    'filters.xyz.label': 'XYZ-filter',
    'filters.xyz.title': 'XYZ-filter',
    'filters.search.label': 'Sök (namn/kod/lev.)',
    'filters.search.ph': 't.ex. H7, kabel, 7400…, EXIDE, SE1-7270150',
    'filters.mode.label': 'Kriterier',
    'filters.mode.title': 'Välj filtreringskriterier',
    'filters.mode.both': 'Båda (låg hylla OCH hög försäljning)',
    'filters.mode.either': 'Minst ett (låg hylla ELLER hög försäljning)',
    'filters.mode.hylle': 'Endast låg hylla',
    'filters.mode.salg': 'Endast hög försäljning',
    'filters.region.label': 'Plats (från Lev.kod)',
    'filters.region.title': 'Filtrera på plats',
    'filters.minQty.label': 'Min. försäljningsantal',
    'filters.minQty.title': 'Minsta antal sålda enheter',
    'filters.minQty.ph': 't.ex. 1',
    'filters.minUnits.label': 'Min. saldo (st)',
    'filters.minUnits.title': 'Minsta saldo i enheter',
    'filters.minUnits.ph': 't.ex. 1',
    'filters.onlySO.label': 'Stockouts',
    'filters.onlySO.text': 'Endast rader med stockout',
    'region.no2': 'Vestby (NO2-)',
    'region.se1': 'Örebro (SE1-)',
    'region.other': 'Övriga/okänd',
    'actions.export': 'Exportera utdrag (CSV)',
    'actions.clearFilter': 'Ta bort filter',
    'theme.label': 'Tema',
    'theme.title': 'Växla mörkt/ljust',
    'theme.light': '☀️ Ljust',
    'theme.dark': '🌙 Mörkt',
    'kpi.total': 'Rader (totalt)',
    'kpi.filtered': 'Rader (filtrerade)',
    'kpi.avgAvail': 'Snitt tillgänglighet (filtrerad)',
    'kpi.avgTurns': 'Snitt lageromsättning (filtrerad)',
    'kpi.sumSales': 'Summa försäljningsvärde (filtrerad)',
    'pivot.title': 'Leverantörer (pivot)',
    'pivot.scopeLabel': 'Pivotunderlag',
    'pivot.scopeTitle': 'Välj pivotunderlag',
    'pivot.scope.filtered': 'Pivotunderlag: Endast filtrerade',
    'pivot.scope.all': 'Pivotunderlag: Alla produkter',
    'pivot.searchPh': 'Sök leverantörsnamn / -kod',
    'pivot.filter': 'Filter:',
    'pivot.hint': 'Klicka på en leverantör för att visa produkterna nedan.',
    'tbl.hint': 'Tips: Klicka på kolumnrubriker för att sortera.',
    'tblPivot.supplier': 'Leverantör',
    'tblPivot.code': 'Lev.kod',
    'tblPivot.products': 'Produkter',
    'tblPivot.avgAvail': 'Snitt hylla-%',
    'tblPivot.avgTurns': 'Snitt omsättning',
    'tblPivot.sumSales': 'Summa försäljning',
    'tbl.col.supplier': 'Leverantör',
    'tbl.col.suppcode': 'Lev.kod',
    'tbl.col.product': 'Produkt',
    'tbl.col.code': 'Kod',
    'tbl.col.avail': 'Hylltillgänglighet %',
    'tbl.col.sales': 'Försäljningsvärde',
    'tbl.col.turns': 'Lageromsättning',
    'tbl.col.stock': 'Lagervärde',
    'tbl.col.abc': 'ABC',
    'tbl.col.xyz': 'XYZ',
    'tbl.col.region': 'Region',
    'common.all': 'Alla'
  },
  en: {
    'app.title': 'Relex Focus – products to review',
    'app.h1': 'Relex Focus',
    'drop.text': 'Drag & drop Relex export (CSV/HTML) here — or click',
    'drop.title': 'Click to choose file or drag & drop here',
    'lang.label': 'Language',
    'filters.maxAvail.label': 'Max shelf availability (%)',
    'filters.maxAvail.title': 'Maximum shelf availability in percent',
    'filters.maxAvail.ph': 'e.g. 98.5',
    'filters.minSales.label': 'Min. sales value (kr)',
    'filters.minSales.title': 'Minimum sales value in NOK',
    'filters.minSales.ph': 'e.g. 10000',
    'filters.abc.label': 'ABC filter',
    'filters.abc.title': 'ABC filter',
    'filters.xyz.label': 'XYZ filter',
    'filters.xyz.title': 'XYZ filter',
    'filters.search.label': 'Search (name/code/vendor)',
    'filters.search.ph': 'e.g. H7, cable, 7400…, EXIDE, SE1-7270150',
    'filters.mode.label': 'Criteria',
    'filters.mode.title': 'Choose filtering criteria',
    'filters.mode.both': 'Both (low shelf AND high sales)',
    'filters.mode.either': 'Either (low shelf OR high sales)',
    'filters.mode.hylle': 'Only low shelf',
    'filters.mode.salg': 'Only high sales',
    'filters.region.label': 'Location (from Supp.code)',
    'filters.region.title': 'Filter by location',
    'filters.minQty.label': 'Min. sales qty',
    'filters.minQty.title': 'Minimum sold units',
    'filters.minQty.ph': 'e.g. 1',
    'filters.minUnits.label': 'Min. end balance (units)',
    'filters.minUnits.title': 'Minimum end balance in units',
    'filters.minUnits.ph': 'e.g. 1',
    'filters.onlySO.label': 'Stockouts',
    'filters.onlySO.text': 'Only rows with stockout',
    'region.no2': 'Vestby (NO2-)',
    'region.se1': 'Örebro (SE1-)',
    'region.other': 'Other/unknown',
    'actions.export': 'Export selection (CSV)',
    'actions.clearFilter': 'Clear filter',
    'theme.label': 'Theme',
    'theme.title': 'Toggle dark/light',
    'theme.light': '☀️ Light',
    'theme.dark': '🌙 Dark',
    'kpi.total': 'Rows (total)',
    'kpi.filtered': 'Rows (filtered)',
    'kpi.avgAvail': 'Avg availability (filtered)',
    'kpi.avgTurns': 'Avg stock turns (filtered)',
    'kpi.sumSales': 'Sum sales value (filtered)',
    'pivot.title': 'Suppliers (pivot)',
    'pivot.scopeLabel': 'Pivot scope',
    'pivot.scopeTitle': 'Choose pivot scope',
    'pivot.scope.filtered': 'Pivot scope: Filtered only',
    'pivot.scope.all': 'Pivot scope: All products',
    'pivot.searchPh': 'Search supplier name / code',
    'pivot.filter': 'Filter:',
    'pivot.hint': 'Click a supplier to show products below.',
    'tbl.hint': 'Tip: Click column headers to sort.',
    'tblPivot.supplier': 'Supplier',
    'tblPivot.code': 'Supp.code',
    'tblPivot.products': 'Products',
    'tblPivot.avgAvail': 'Avg shelf-%',
    'tblPivot.avgTurns': 'Avg turns',
    'tblPivot.sumSales': 'Sum sales',
    'tbl.col.supplier': 'Supplier',
    'tbl.col.suppcode': 'Supp.code',
    'tbl.col.product': 'Product',
    'tbl.col.code': 'Code',
    'tbl.col.avail': 'Shelf availability %',
    'tbl.col.sales': 'Sales value',
    'tbl.col.turns': 'Stock turns',
    'tbl.col.stock': 'End balance value',
    'tbl.col.abc': 'ABC',
    'tbl.col.xyz': 'XYZ',
    'tbl.col.region': 'Region',
    'common.all': 'All'
  }
};
// --- I18N helpers (robust) ---
function getLang() {
  // 1) ?lang=xx i URL
  try {
    if (typeof URLSearchParams !== 'undefined' && typeof location !== 'undefined') {
      const q = new URLSearchParams(location.search).get('lang');
      if (q) return q;
    }
  } catch (e) {
    /* ignore */
  }

  // 2) <html data-lang="xx">
  const dl = document.documentElement.getAttribute('data-lang');
  if (dl) return dl;

  // 3) localStorage
  try {
    const ls = localStorage.getItem(I18N_KEY);
    if (ls) return ls;
  } catch (e) {
    /* ignore */
  }

  // 4) default
  return 'no';
}

function setLang(lang, { persist = true, updateUrl = false } = {}) {
  const L = lang || 'no';
  document.documentElement.setAttribute('data-lang', L);
  document.documentElement.lang = L;

  if (persist) {
    try {
      localStorage.setItem(I18N_KEY, L);
    } catch (e) {
      /* ignore */
    }
  }

  if (updateUrl) {
    try {
      const url = new URL(location.href);
      url.searchParams.set('lang', L);
      history.replaceState(null, '', url.toString());
    } catch (e) {
      /* ignore */
    }
  }
}

function t(key) {
  const L = getLang();
  return (i18n[L] && i18n[L][key]) || (i18n.no && i18n.no[key]) || key;
}
function applyI18n() {
  // innerText
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  // title
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.getAttribute('data-i18n-title'));
  });
  // placeholder
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-ph'));
  });
  // generisk attributt-liste: data-i18n-attr="title,aria-label,placeholder"
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const list = (el.getAttribute('data-i18n-attr') || '')
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);
    list.forEach(attr => {
      const keyAttr = `data-i18n-${attr}`;
      const k = el.getAttribute(keyAttr);
      if (k) el.setAttribute(attr, t(k));
    });
  });

  // <html lang="..."> + persist
  const L = getLang();
  document.documentElement.lang = L;
  document.documentElement.setAttribute('data-lang', L);
  localStorage.setItem(I18N_KEY, L);
}

// --- init + binding ---
document.addEventListener('DOMContentLoaded', () => {
  const sel = document.getElementById('langSel');

  // Initialt språk fra URL/data-lang/localStorage, og synk til <select>
  const initial = getLang();
  setLang(initial, { persist: true, updateUrl: false });
  if (sel) sel.value = initial;

  // Kjør første oversettelse + UI-labels + tema + data
  applyI18n();
  if (typeof applyDynamicLabels === 'function') applyDynamicLabels();
  applyTheme(document.documentElement.getAttribute('data-theme') || localStorage.getItem('relexTheme') || 'dark');
  applyFilters();

  // Endring via select
  if (sel) {
    sel.addEventListener('change', () => {
      const lang = sel.value;
      setLang(lang, { persist: true, updateUrl: true });

      applyI18n();
      if (typeof applyDynamicLabels === 'function') applyDynamicLabels();

      // oppdater tema-knappetekst via i18n
      applyTheme(document.documentElement.getAttribute('data-theme') || 'dark');

      // bygg tabeller/pivot på nytt med nye headere
      applyFilters();
    });
  }
});

window.__RELEX_APP_VERSION__ = 'clean-v1';
console.log('Relex Focus app.js', window.__RELEX_APP_VERSION__);

function applyDynamicLabels() {
  // Tema-knappetekst (viser motsatt valg)
  const themeBtn = byId('themeToggle');
  if (themeBtn) {
    const cur = document.documentElement.getAttribute('data-theme') || 'dark';
    // Hvis vi er i dark, tilby "☀️ Lys" osv.
    themeBtn.textContent = t(cur === 'dark' ? 'theme.light' : 'theme.dark');
    themeBtn.title = t('theme.title');
  }

  // KPI-etiketter (dersom du viser dem i HTML uten data-i18n)
  byId('kLblTotal') && (byId('kLblTotal').textContent = t('kpi.total'));
  byId('kLblShown') && (byId('kLblShown').textContent = t('kpi.filtered'));
  byId('kLblAvgA') && (byId('kLblAvgA').textContent = t('kpi.avgAvail'));
  byId('kLblAvgT') && (byId('kLblAvgT').textContent = t('kpi.avgTurns'));
  byId('kLblSumS') && (byId('kLblSumS').textContent = t('kpi.sumSales'));

  // Pivot-tekster (dersom ikke allerede via data-i18n)
  byId('pivotTitle') && (byId('pivotTitle').textContent = t('pivot.title'));
  byId('pivotFilter') && (byId('pivotFilter').textContent = t('pivot.filter'));
  const pq = byId('pivotQ');
  if (pq) pq.placeholder = t('pivot.searchPh');
}

/* ---------- Små hjelpere ---------- */
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
const pct = x => {
  const v = num(x);
  return v == null ? null : v <= 1 ? v * 100 : v;
};
const fmtNo = n => (n == null ? '–' : n.toLocaleString('no-NO'));
const fmtKr = n => (n == null ? '–' : Math.round(n).toLocaleString('no-NO') + ' kr');
const byId = id => document.getElementById(id);
// Velg beste tilgjengelighet: 30 dager -> siste uke -> nå (fallback)
function preferAvail(r) {
  if (Number.isFinite(r.Avail30)) return r.Avail30;
  if (Number.isFinite(r.AvailWeek)) return r.AvailWeek;
  return r.Avail;
}

// Les tall fra <input type="number"> med safe fallback
function readNum(id, fallback){
  const el = byId(id);
  if (!el) return fallback;
  // Bruk native valueAsNumber først
  let v = (typeof el.valueAsNumber === 'number') ? el.valueAsNumber : NaN;
  if (!Number.isFinite(v)) {
    const raw = (el.value || '').replace(/\s/g,''); // fjern mellomrom
    v = Number(raw);
  }
  return Number.isFinite(v) ? v : fallback;
}
// Klem verdier til gyldig område
const clamp = (n,min,max)=> Math.min(max, Math.max(min, n));

/* ---------- Global tilstand ---------- */
let data = { sources: [], kind: '' };
let shown = [];
let sortKey = null;
let sortDir = 1;
let supplierFilter = null;
let supplierByCode = new Map();
// Skjul/vis "Availability-%" (nå) i tabell + CSV (data beholdes i mapping)
const SHOW_NOW_AVAIL = false;
const SHOW_SO_FIRST = false; // skjul Stockouts-kolonnen i UI/CSV

/* ---------- Kolonnealiaser ---------- */
const wantedCols = [
  // --- ID/faste felt ---
  { k:'SupplierName', m:/^(Leverand.{0,2}r\s*navn|Leverant.{0,2}rs?namn|Supplier\s*name|Vendor\s*name)$/i },
  { k:'SupplierCode', m:/^(Leverand.{0,2}r\s*kode|Leverant.{0,2}r.*(kod|nr|nummer)|Supp(?:lier)?\s*code|Vendor\s*(code|id))$/i },
  { k:'Produktnavn',  m:/^(Produktnavn|Produktnamn|Product\s*name)$/i },
  { k:'Produktkode',  m:/^(Produktkode|Product\s*code|SKU|Article\s*(no|number)|Art\.?\s*nr\.?)$/i },
  { k:'LocationCode', m:/^(Location\s*code|Location|Lokasjonskode|Lokasjon|Plassering|Site(?:\s*code)?|Warehouse(?:\s*code)?)$/i },

  // --- Stockouts ---
  { k:'SOFirst', m:/^(Count\s*of\s*stockouts\s*\(from\s*first\s*balance\)|Stockouts.*first|Stockout.*first)$/i },

  // --- Availability ---
  // NB: “Availability-% (nå)” er STRAMT, så den ikke fanger 30 dager/uke
  { k:'Hylle%',    m:/^(Hyll(?:e|es).*service|Hylleservicegrad|Availability\s*-%(?:\s*\(.*\))?)$/i },
  { k:'Avail30',   m:/^(Availability\s*%?\s*last\s*30\s*days|Availability\s*%?\s*last\s*30|Hylle.*30\s*dager|Hylltillg[aä]nglighet.*30\s*dagar)$/i },
  { k:'AvailWeek', m:/^(Availability\s*%?\s*last\s*week|Hylle.*(siste|forrige)\s*uke|Hylltillg[aä]nglighet.*senaste\s*vecka)$/i },

  // --- Salg og beholdning ---
  { k:'SalesQty',        m:/^(Sales\s*quantity|Sales\s*qty|Salgsantall|Försäljningsantal|Försäljningsvolym)$/i },
  { k:'Salg verdi',      m:/^(Sales\s*\(value\)|Sales\s*value)(?:\s*\(kr\))?$|^Sales\s*value$|Sales.*amount/i },
  { k:'Beholdningsverdi',m:/^(End\s*balance\s*value|Ending\s*balance\s*value)(?:\s*\(kr\))?$|^Stock.*value$|^Inventory.*value$/i },
  { k:'EndBalanceUnits', m:/^(End\s*balance|Ending\s*balance)$|^Stock\s*units$|^Inventory\s*(qty|units)$|^Beholdning\s*\(stk\)$/i },

  // --- Omløp ---
  {k:'Turns', m:/(Inventory\s*turnover(?:\s*last\s*30\s*days)?|Inventory\s*turns?|Stock\s*turns?|Stock\s*turnover|Rotation(?:\s*\(times\))?|Lageroml|Lageromløp|oml[øo]pshast|lageroms(?:ä|a)ttning|oms(?:ä|a)ttningshastighet|omlopp)/i},
  { k:'Lageromløp', m:/^(Lageroml|oml[øo]pshast|Turnover|Rotation|Stock\s*turn)$/i },

  // --- Klassifisering ---
  { k:'ABC', m:/^(ABC-?klassifisering|ABC\s*class)$/i },
  { k:'XYZ', m:/^(XYZ-?klasse|XYZ\s*class)$/i }
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

/* ---------- CSV/HTML-leser ---------- */
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
  let lines = text
    .replace(/^\uFEFF/, '')
    .split(/\r?\n/)
    .map(l => l.trimEnd())
    .filter(l => l.length);
  if (!lines.length) return { headers: [], rows: [], kind: 'csv' };

  const candidates = ['\t', '; ', ','];
  const count = (s, ch) => (s.match(new RegExp('\\' + (ch.trim() || ch), 'g')) || []).length;
  const sep =
    candidates
      .map(s => [s, count(lines[0], s)])
      .sort((a, b) => b[1] - a[1])[0][0]
      .trim() || ';';

  const splitCSV = line => {
    const out = [];
    let cur = '';
    let inQ = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQ && line[i + 1] === '"') {
          cur += '"';
          i++;
        } else inQ = !inQ;
      } else if (ch === sep && !inQ) {
        out.push(cur);
        cur = '';
      } else cur += ch;
    }
    out.push(cur);
    return out.map(x => x.trim());
  };

  const hint = /(Supplier\s*name|Supplier\s*code|Product\s*name|Product\s*code|Location|Availability|Sales|ABC|XYZ|Leverand|Produkt|Hyll|Behold|Lager)/i;
  let headerIdx = 0;
  for (let i = 0; i < Math.min(lines.length, 30); i++) {
    const cells = splitCSV(lines[i]);
    const hit = cells.filter(c => hint.test(c)).length;
    if (cells.length >= 5 && hit >= 2) {
      headerIdx = i;
      break;
    }
  }

  const rawHeaders = splitCSV(lines[headerIdx]).map(h =>
    h
      .replace(/^['"“”]+|['"“”]+$/g, '')
      .replace(/\s+/g, ' ')
      .trim()
  );
  const dropFirst = rawHeaders[0] === '' || rawHeaders[0] === '#' || /^\(index\)$/i.test(rawHeaders[0]);
  const headers = dropFirst ? rawHeaders.slice(1) : rawHeaders;

  const body = lines.slice(headerIdx + 1);
  let rows = body.map(line => {
    const cells = splitCSV(line);
    const start = dropFirst ? 1 : 0;
    const o = {};
    headers.forEach((h, i) => (o[h] = (cells[i + start] ?? '').trim()));
    return o;
  });

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
  const theadHdrs = Array.from(table.querySelectorAll('thead tr th, thead tr td')).map(th => th.textContent.trim());
  if (theadHdrs.length) {
    const bodyRows = Array.from(table.querySelectorAll('tbody tr')).map(tr => {
      const o = {};
      Array.from(tr.children).forEach((td, i) => (o[theadHdrs[i] || 'col' + i] = td.textContent.trim()));
      return o;
    });
    return { headers: theadHdrs, rows: bodyRows, kind: 'html' };
  }
  const trs = Array.from(table.querySelectorAll('tr'));
  if (!trs.length) return { headers: [], rows: [], kind: 'html' };
  const hdr = Array.from(trs[0].children).map(td => td.textContent.trim());
  const rows = trs.slice(1).map(tr => {
    const o = {};
    Array.from(tr.children).forEach((td, i) => (o[hdr[i] || 'col' + i] = td.textContent.trim()));
    return o;
  });
  return { headers: hdr, rows, kind: 'html' };
}

/* ---------- Supplier-lookup (tverrsnitt) ---------- */
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

/* ---------- Mapping ---------- */
function mapRowFactory(headers) {
  const cols = buildMap(headers);
  return function mapRow(row) {
    const sNameRaw = (row[cols['SupplierName']] ?? '').trim();
    const sCodeRaw = (row[cols['SupplierCode']] ?? '').trim();
    let sName = sNameRaw === '#' ? '' : sNameRaw;
    let sCode = sCodeRaw === '#' ? '' : sCodeRaw;

    const prodCode = (row[cols['Produktkode']] ?? '').trim();
    if (prodCode && (!sName || !sCode) && supplierByCode.has(prodCode)) {
      const f = supplierByCode.get(prodCode);
      if (!sName) sName = f.name || sName;
      if (!sCode) sCode = f.code || sCode;
    }

    // Finn region fra Location/SuppCode og normaliser til NO2 / SE1 / OTHER
    const locRaw = (row[cols['LocationCode']] ?? '').trim().toUpperCase();
    const sCodeUC = (sCode || '').toUpperCase();
    let Region = 'OTHER';
    const hay = locRaw || sCodeUC;
    if (/NO2/.test(hay)) Region = 'NO2';
    else if (/SE1/.test(hay)) Region = 'SE1';

    return {
      Region,
      Kode: prodCode,
      Navn: row[cols['Produktnavn']] ?? '',
      SuppCode: sCode,
      SuppName: sName,

      SOFirst: num(row[cols['SOFirst']]),
      Avail: pct(row[cols['Hylle%']]),
      Avail30: pct(row[cols['Avail30']]),
      AvailWeek: pct(row[cols['AvailWeek']]),

      SalesQty: num(row[cols['SalesQty']]),
      Sales: num(row[cols['Salg verdi']]),
      StockVal: num(row[cols['Beholdningsverdi']]),
      EndUnits: num(row[cols['EndBalanceUnits']]),

      Turns: num(row[cols['Turns']]) ?? num(row[cols['Lageromløp']]),

      Stockouts: num(row[cols['SOFirst']]) ?? 0,

      ABC: (row[cols['ABC']] ?? '').trim(),
      XYZ: (row[cols['XYZ']] ?? '').trim(),
      _raw: row
    };
  };
}
function mapAll() {
  const out = [];
  for (const src of data.sources) {
    const mapRow = mapRowFactory(src.headers);
    out.push(...src.rows.map(mapRow));
  }
  return out;
}

/* ---------- Filtre + sort ---------- */
function ensureShowAllDefaults() {
  byId('mode') && (byId('mode').value = 'either');
  byId('maxAvail') && (byId('maxAvail').value = 95);
  byId('minSales') && (byId('minSales').value = 10000);
  byId('abc') && (byId('abc').value = '');
  byId('xyz') && (byId('xyz').value = '');
  byId('region') && (byId('region').value = '');
  byId('q') && (byId('q').value = '');
}

/* 👉 LEGG TIL DENNE BLOKKEN rett under ensureShowAllDefaults() */
function bindFilterEvents() {
  const on = (id, evts) => {
    const el = byId(id);
    if (!el) return;
    evts.split(' ').forEach(evt => el.addEventListener(evt, applyFilters));
  };

  // Tall/tekst: oppdater mens du skriver + når feltet “commit’es”
  ['maxAvail','minSales','minQty','minUnits','q'].forEach(id => on(id, 'input change'));

  // Select/checkbox: på change holder
  ['abc','xyz','mode','region','pivotScope','onlySO'].forEach(id => on(id, 'change'));

  // Hindre submit-refresh hvis filtrene ligger i et <form>
  const form = document.querySelector('#filtersForm');
  if (form) form.addEventListener('submit', e => e.preventDefault());
}


function applyFilters() {
  buildSupplierLookupFromSources();

  // trygge lesere for tall
const maxAvail  = clamp(readNum('maxAvail', 95), 0, 100);
const minSales  = Math.max(0, readNum('minSales', 10000));
const minQty    = Math.max(0, readNum('minQty', 0));
const minUnits  = Math.max(0, readNum('minUnits', 0));

const abc       = (byId('abc')?.value || '').trim();
const xyz       = (byId('xyz')?.value || '').trim();
const q         = (byId('q')?.value || '').trim().toLowerCase();
const mode      = (byId('mode')?.value || 'either');
const regionSel = (byId('region')?.value || '').trim();
const onlySO    = Boolean(byId('onlySO')?.checked);


  const mapped = mapAll();

  shown = mapped.filter(r => {
    const A = preferAvail(r); // 30d -> uke -> nå
    const hasAvail = Number.isFinite(A);
    const hasSales = Number.isFinite(r.Sales);
    const condAvail = hasAvail ? A <= maxAvail : true;
    const condSales = hasSales ? r.Sales >= minSales : true;

    let passes = false;
    if (mode === 'both') passes = condAvail && condSales;
    if (mode === 'either') passes = condAvail || condSales;
    if (mode === 'hylle') passes = condAvail;
    if (mode === 'salg') passes = condSales;

    const okABC = !abc || r.ABC === abc;
    const okXYZ = !xyz || r.XYZ === xyz;
    const okQ =
      !q || (r.Navn || '').toLowerCase().includes(q) || (r.Kode || '').toLowerCase().includes(q) || (r.SuppName || '').toLowerCase().includes(q) || (r.SuppCode || '').toLowerCase().includes(q);
    const okSupplier = !supplierFilter || (r.SuppName === supplierFilter.SuppName && r.SuppCode === supplierFilter.SuppCode);
    const okRegion = !regionSel || (regionSel === 'OTHER' ? r.Region === 'OTHER' : r.Region === regionSel);
    const okQty = !minQty || (r.SalesQty ?? 0) >= minQty;
    const okUnits = !minUnits || (r.EndUnits ?? 0) >= minUnits;
    const okSO = !onlySO || (r.Stockouts ?? 0) > 0;

    return passes && okABC && okXYZ && okQ && okSupplier && okRegion && okQty && okUnits && okSO;
  });

  // --- sortering ---
  // NB: hvis du har fjernet 'Avail'-kolonnen fra visningen og vil ha en annen default,
  // bytt fallback under til f.eks. 'Avail30' eller 'Sales'.
  const key = sortKey || 'Avail30';

  shown.sort((a, b) => {
    const A = a[key],
      B = b[key];
    const nA = A == null || A === '';
    const nB = B == null || B === '';
    if (nA && nB) return 0;
    if (nA) return 1;
    if (nB) return -1;

    if (typeof A === 'string' || typeof B === 'string') {
      const cmp = String(A).localeCompare(String(B), 'no', { numeric: true, sensitivity: 'base' });
      return cmp * sortDir;
    }
    if (A < B) return -1 * sortDir;
    if (A > B) return 1 * sortDir;

    // tie-breaker: salgsverdi høyest først
    const sA = a.Sales ?? -Infinity;
    const sB = b.Sales ?? -Infinity;
    if (sA > sB) return -1;
    if (sA < sB) return 1;
    return 0;
  });

  // --- render ---
  render();
  renderPivot(mapped);
}

/* ---------- Render tabell ---------- */
function render() {
  const totalRows = data.sources.reduce((s, src) => s + src.rows.length, 0);
  byId('kTotal') && (byId('kTotal').textContent = fmtNo(totalRows));
  byId('kShown') && (byId('kShown').textContent = fmtNo(shown.length));

  const avgA = shown.length ? shown.reduce((s, r) => s + (preferAvail(r) ?? 0), 0) / shown.length : null;

  const turnsVals = shown.map(r => r.Turns).filter(Number.isFinite);
  const avgT = turnsVals.length ? turnsVals.reduce((a, b) => a + b, 0) / turnsVals.length : null;
  const sumS = shown.length ? shown.reduce((s, r) => s + (r.Sales ?? 0), 0) : null;
  byId('kAvgA') && (byId('kAvgA').textContent = avgA == null ? '–' : avgA.toFixed(2) + ' %');
  byId('kAvgT') && (byId('kAvgT').textContent = avgT == null ? '–' : avgT.toFixed(2));
  byId('kSumS') && (byId('kSumS').textContent = fmtKr(sumS));

  const thead = byId('tbl')?.querySelector('thead tr');
  const tbody = byId('tbl')?.querySelector('tbody');
  if (!thead || !tbody) return;
  thead.innerHTML = '';
  tbody.innerHTML = '';

  const cols = [
    { h: t('tbl.col.region'), k: 'Region' },
    { h: t('tbl.col.code'), k: 'Kode' },
    { h: t('tbl.col.product'), k: 'Navn' },
    { h: t('tbl.col.suppcode'), k: 'SuppCode' },
    { h: t('tbl.col.supplier'), k: 'SuppName' },
    ...(SHOW_SO_FIRST ? [{ h:'Count of stockouts (from first balance)', k:'SOFirst', descFirst:true }] : []),


    // Vis "Availability-% (nå)" bare hvis slått på:
    ...(SHOW_NOW_AVAIL ? [{ h: t('tbl.col.avail'), k: 'Avail' }] : []),

    { h: 'Availability % last 30 days', k: 'Avail30' },
    { h: 'Availability % last week', k: 'AvailWeek' },
    { h: 'Sales quantity', k: 'SalesQty', descFirst: true },
    { h: t('tbl.col.sales'), k: 'Sales', descFirst: true },
    { h: t('tbl.col.stock'), k: 'StockVal', descFirst: true },
    { h: 'End balance (units)', k: 'EndUnits', descFirst: true },
    { h: t('tbl.col.abc'), k: 'ABC' },
    { h: t('tbl.col.xyz'), k: 'XYZ' }
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

  const int0 = v => Math.round(v).toLocaleString('no-NO');
  const pct2 = v => (isFinite(v) ? Number(v).toFixed(2) + ' %' : '–');
  const col = (v, fmt) => (v == null || v === '' ? '<span class="muted">–</span>' : fmt ? fmt(v) : v);

  for (const r of shown) {
    const tr = document.createElement('tr');
    const A = preferAvail(r);
    const sev = A == null ? null : A < 90 ? 'bad' : A < 95 ? 'warn' : 'good';
    const sevTag = A == null ? '<span class="muted">–</span>' : `<span class="sev ${sev}">${A.toFixed(2)} %</span>`;
    const nowAvailCell = SHOW_NOW_AVAIL ? `<td>${r.Avail == null ? '<span class="muted">–</span>' : r.Avail.toFixed(2) + ' %'}</td>` : '';

    tr.innerHTML = `
  <td>${r.Region ?? '–'}</td>
  <td class="muted">${r.Kode || ''}</td>
  <td>${r.Navn || '<span class="muted">–</span>'}</td>
  <td class="muted">${r.SuppCode || ''}</td>
  <td>${r.SuppName || '<span class="muted">–</span>'}</td>
  ${SHOW_SO_FIRST ? `<td>${col(r.SOFirst,int0)}</td>` : ``}

  ${nowAvailCell}
  <td>${col(r.Avail30, pct2)}</td>
  <td>${col(r.AvailWeek, pct2)}</td>
  <td>${col(r.SalesQty, int0)}</td>
  <td>${fmtKr(r.Sales)}</td>
  <td>${fmtKr(r.StockVal)}</td>
  <td>${col(r.EndUnits, int0)}</td>
  <td>${r.ABC || '<span class="muted">–</span>'}</td>
  <td>${r.XYZ || '<span class="muted">–</span>'}</td>`;

  tr.style.cursor = 'zoom-in'; // eller 'pointer'
  tr.addEventListener('click', () => window.HistoryChart?.openForRow(r));


    tbody.appendChild(tr);
  }

  if (byId('btnExport')) byId('btnExport').disabled = shown.length === 0;

  const chip = byId('supplierChip');
  const lab = byId('supplierLabel');
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

/* ---------- Pivot ---------- */
let pivotSortKey = 'avgAvail',
  pivotSortDir = 1;
function renderPivot(mappedAll) {
  const regionSel = byId('region')?.value || '';
  const scope = byId('pivotScope')?.value || 'filtered';
  const okRegion = r => !regionSel || (regionSel === 'OTHER' ? r.Region === 'OTHER' : r.Region === regionSel);
  const base = scope === 'filtered' ? shown : mappedAll.filter(okRegion);
  const rows = base.filter(r => r.SuppName || r.SuppCode);
  const map = new Map();
  for (const r of rows) {
    const key = `${r.SuppName}|||${r.SuppCode}`;
    if (!map.has(key)) map.set(key, { SuppName: r.SuppName, SuppCode: r.SuppCode, sumSales: 0, sumAvail: 0, cntAvail: 0, sumTurns: 0, cntTurns: 0, count: 0 });
    const g = map.get(key);
    g.count++;
    if (Number.isFinite(r.Sales)) g.sumSales += r.Sales;
    const A = preferAvail(r);
    if (Number.isFinite(A)) {
      g.sumAvail += A;
      g.cntAvail++;
    }
    if (Number.isFinite(r.Turns)) {
      g.sumTurns += r.Turns;
      g.cntTurns++;
    }
  }
  let pivot = [...map.values()].map(g => ({ ...g, avgAvail: g.cntAvail ? g.sumAvail / g.cntAvail : null, avgTurns: g.cntTurns ? g.sumTurns / g.cntTurns : null }));
  const pq = (byId('pivotQ')?.value || '').toLowerCase().trim();
  if (pq) pivot = pivot.filter(g => (g.SuppName || '').toLowerCase().includes(pq) || (g.SuppCode || '').toLowerCase().includes(pq));
  pivot.sort((a, b) => {
    const ak = a[pivotSortKey] == null ? -Infinity : a[pivotSortKey];
    const bk = b[pivotSortKey] == null ? -Infinity : b[pivotSortKey];
    if (ak < bk) return -1 * pivotSortDir;
    if (ak > bk) return 1 * pivotSortDir;
    if (a.sumSales > b.sumSales) return -1;
    if (a.sumSales < b.sumSales) return 1;
    return 0;
  });
  const tbody = byId('tblPivot')?.querySelector('tbody');
  if (!tbody) return;
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
      <td>${fmtKr(g.sumSales)}</td>`;
    tbody.appendChild(tr);
  }
}
document.querySelectorAll('#tblPivot thead th.clickable')?.forEach(th => {
  th.addEventListener('click', () => {
    const k = th.getAttribute('data-k');
    if (pivotSortKey === k) pivotSortDir *= -1;
    else {
      pivotSortKey = k;
      pivotSortDir = 1;
    }
    renderPivot(mapAll());
  });
});
byId('pivotQ')?.addEventListener('input', () => renderPivot(mapAll()));
byId('pivotScope')?.addEventListener('input', () => renderPivot(mapAll()));

/* ---------- Clear supplier chip ---------- */
function clearSupplierFilter(e) {
  if (e) e.preventDefault();
  supplierFilter = null;
  const pq = byId('pivotQ');
  if (pq) pq.value = '';
  const gq = byId('q');
  if (gq) gq.value = '';
  const chip = byId('supplierChip');
  const lab = byId('supplierLabel');
  if (lab) lab.textContent = '';
  if (chip) {
    chip.hidden = true;
    chip.style.display = 'none';
  }
  applyFilters();
}
byId('clearSupplier')?.addEventListener('click', clearSupplierFilter);

/* ---------- Eksport ---------- */
function exportCSV() {
  const delim = ';';

  const headers = [
    t('tbl.col.region'),
    t('tbl.col.code'),
    t('tbl.col.product'),
    t('tbl.col.suppcode'),
    t('tbl.col.supplier'),
    'Count of stockouts (from first balance)',
    ...(SHOW_NOW_AVAIL ? ['Availability-%'] : []),
    'Availability % last 30 days',
    'Availability % last week',
    'Sales quantity',
    t('tbl.col.sales'),
    t('tbl.col.stock'),
    'End balance (units)',
    t('tbl.col.abc'),
    t('tbl.col.xyz')
  ];

  const int0 = v => (v == null || v === '' ? '' : String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, ' '));
  const pct2 = v => (v == null || !isFinite(v) ? '' : Number(v).toFixed(2) + ' %');
  const kr = v => (v == null || v === '' ? '' : Math.round(v).toLocaleString('no-NO') + ' kr');

  const csvEscape = s => {
    const str = String(s ?? '');
    if (/[\"\n\r;]/.test(str)) return `"${str.replace(/"/g, '""')}"`;
    return str;
    // NB: vi escaper ';' som separator – endre hvis du bytter delimiter
  };

  const rows = shown.map(r => {
    const out = [r.Region ?? '', r.Kode ?? '', r.Navn ?? '', r.SuppCode ?? '', r.SuppName ?? '', int0(r.SOFirst)];
    if (SHOW_NOW_AVAIL) out.push(pct2(r.Avail));
    out.push(pct2(r.Avail30), pct2(r.AvailWeek), int0(r.SalesQty), kr(r.Sales), kr(r.StockVal), int0(r.EndUnits), r.ABC ?? '', r.XYZ ?? '');
    return out.map(csvEscape).join(delim);
  });

  const csv = [headers.map(csvEscape).join(delim), ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const a = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(blob),
    download: 'relex-focus.csv'
  });
  a.click();
  URL.revokeObjectURL(a.href);
}
byId('btnExport')?.addEventListener('click', exportCSV);

/* ---------- Drag&drop / file ---------- */
const drop = byId('drop'),
  file = byId('file');
if (file) file.multiple = true;
drop?.addEventListener('click', () => file?.click());
drop?.addEventListener('dragover', e => {
  e.preventDefault();
  drop.style.borderColor = '#60a5fa';
});
drop?.addEventListener('dragleave', () => (drop.style.borderColor = ''));
drop?.addEventListener('drop', async e => {
  e.preventDefault();
  drop.style.borderColor = '';
  const files = Array.from(e.dataTransfer.files).filter(f => /\.(csv|html?)$/i.test(f.name));
  if (!files.length) return;
  await loadFiles(files);
});
file?.addEventListener('change', async () => {
  const files = Array.from(file.files);
  if (files.length) await loadFiles(files);
});
async function loadFiles(files){
  drop && (drop.innerHTML = files.length===1
    ? `<span class="pill">Lastet: ${files[0].name}</span>`
    : `<span class="pill">Lastet: ${files.length} filer</span>`);

  const parsed = [];

  for (const f of files) {
    const res = await readFile(f);                  // { headers, rows, kind }
    const cols = buildMap(res.headers ?? []);

    // Hvis fila har 'Week/Time period' → splitt rader
    if (cols['Week']) {
      const isHist = (row) => {
        const v = row[cols['Week']];
        return v != null && String(v).trim() !== '';
      };

      const rowsHist = (res.rows || []).filter(isHist);
      const rowsSnap = (res.rows || []).filter(r => !isHist(r));

      // Send historikk-radene til graf-modulen
      if (rowsHist.length) {
        window.HistoryChart?.ingest({
          rows: rowsHist,
          headers: res.headers,
          cols
        });
      }

      // Bruk bare snapshot-rader videre til tabellen
      res.rows = rowsSnap;

      // Hvis det ikke var noen snapshot-rader igjen, hopp til neste fil
      if (res.rows.length === 0) continue;
    }

    // Vanlig snapshot-fil (eller blandet med rester etter split) → inn i appen
    parsed.push(res);
  }

  // Hvis du bare lastet historikk, behold forrige visning
  if (!parsed.length) return;

  data = { sources: parsed, kind: files.length>1 ? 'multi' : (parsed[0]?.kind || '') };
  supplierFilter = null;
  ensureShowAllDefaults();
  applyFilters();
}



/* ---------- Tema ---------- */
function applyTheme(theme) {
  const T = theme || 'dark';
  document.documentElement.setAttribute('data-theme', T);
  localStorage.setItem('relexTheme', T);

  // Oppdater knappens tekst/title basert på i18n
  const btn = byId('themeToggle');
  if (btn) {
    // Når vi er i dark, tilby lys – og motsatt
    btn.textContent = typeof t === 'function' ? t(T === 'dark' ? 'theme.light' : 'theme.dark') : T === 'dark' ? '☀️ Lys' : '🌙 Mørk';
    if (typeof t === 'function') btn.title = t('theme.title');
  }
}

byId('themeToggle')?.addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme') || 'dark';
  applyTheme(cur === 'dark' ? 'light' : 'dark');
});

/* ---------- Init ---------- */
(function init() {
  ensureShowAllDefaults();

  // Sett tema først (fra storage eller dark som default)
  const savedTheme = localStorage.getItem('relexTheme') || 'dark';
  applyTheme(savedTheme);

  // Sørg for at i18n-tekster og dynamiske labels settes før første render
  if (typeof applyI18n === 'function') applyI18n();
  if (typeof applyDynamicLabels === 'function') applyDynamicLabels();

  bindFilterEvents(); // <-- KOBLE FILTER-HENDLSER HER
  applyFilters(); // første visning
})();
