/* history-charts.js
   Modul for å vise Relex-lik graf per artikkel. Avhenger av Chart.js.
   API: HistoryChart.ingest({rows, headers, cols}) -> bool
        HistoryChart.openForRow(row)
        HistoryChart.setKeyFn(fn)  // valgfri: hvordan nøkkel bygges
        HistoryChart.reset()
*/
(function () {
  const alias = {
    Week:     /^(Week|Uke|Vecka|Time\s*period|Period|Date|Dato)$/i,
    Loc:      /^(Location\s*code|Location|Lokasjonskode|Lokasjon|Site|Warehouse)$/i,
    Prod:     /^(Product\s*code|Produktkode|SKU|Article\s*(no|number)|Art\.?\s*nr\.?)$/i,
    SalesQty: /^(Sales\s*quantity|Sales\s*qty)$/i,
    Sales:    /^(Sales\s*\(value\)|Sales\s*value)$/i,
    EndUnits: /^(End\s*balance|Ending\s*balance)$|^Stock\s*units$|^Inventory\s*(qty|units)$/i,
    ProjEnd:  /^Projected\s*end\s*balance$/i,
    Avail:    /^(Availability\s*-%|Availability\s*%)$/i
  };

  const state = {
    historyByKey: Object.create(null), // { "REGION|PRODKODE": [ {t, SalesQty, Sales, EndUnits, ProjEnd, Avail}, ... ] }
    chart: null,
    keyFn: r => `${String(r.Region||'').trim().toUpperCase()}|${String(r.Kode||'').trim()}`, // kan overstyres
  };

  function byId(id){ return document.getElementById(id); }

  function parseWhen(v){
    if (!v) return null;
    const s = String(v).trim();
    let m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/); // YYYY-MM-DD
    if (m) return new Date(+m[1], +m[2]-1, +m[3]);
    m = s.match(/^(\d{2})[./-](\d{2})[./-](\d{4})$/); // dd/mm/yyyy
    if (m) return new Date(+m[3], +m[2]-1, +m[1]);
    m = s.match(/^(\d{4})-?W?(\d{1,2})$/i); // 2025-36 eller 2025-W36
    if (m){
      const y=+m[1], w=+m[2];
      const jan4=new Date(y,0,4);
      const day=jan4.getDay()||7;
      const isoMon=new Date(jan4); isoMon.setDate(jan4.getDate()-day+1);
      const d=new Date(isoMon); d.setDate(isoMon.getDate()+(w-1)*7);
      return d;
    }
    const d = new Date(s);
    return isNaN(d) ? null : d;
  }

  function ensureModal(){
    if (byId('chartDlg')) return;
    const dlg = document.createElement('dialog');
    dlg.id = 'chartDlg';
    dlg.className = 'card';
    dlg.style.maxWidth = '980px';
    dlg.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
        <strong id="chartTitle">History</strong>
        <button id="chartClose" class="btn" style="margin-left:auto;">×</button>
      </div>
      <canvas id="prodChart" width="900" height="360"></canvas>
    `;
    document.body.appendChild(dlg);
    byId('chartClose').addEventListener('click', ()=> dlg.close());
  }

  function buildCols(headers){
    const cols = Object.create(null);
    headers.forEach((h,i)=>{
      const H = String(h||'').trim();
      if (alias.Week.test(H))     cols.Week = i;
      else if (alias.Loc.test(H)) cols.LocationCode = i;
      else if (alias.Prod.test(H))cols.Produktkode = i;
      else if (alias.SalesQty.test(H)) cols.SalesQty = i;
      else if (alias.Sales.test(H))    cols.Sales = i;
      else if (alias.EndUnits.test(H)) cols.EndBalanceUnits = i;
      else if (alias.ProjEnd.test(H))  cols.ProjEnd = i;
      else if (alias.Avail.test(H))    cols.Hylle = i;
    });
    return cols;
  }

  function num(v){
    if (v==null) return NaN;
    if (typeof v === 'number') return v;
    const s = String(v).replace(/\s/g,'').replace(/\u00A0/g,'').replace(/,/g,'.').replace(/[^0-9.+-]/g,'');
    const n = Number(s);
    return Number.isFinite(n) ? n : NaN;
  }

  function ingest({rows, headers, cols}){
    // aksepter både main.js' "cols" eller bygg selv fra headers
    const C = cols && (cols.Week||cols.Produktkode||cols.LocationCode) ? cols
          : (headers ? buildCols(headers) : null);
    if (!C || !C.Week || !C.Produktkode || !C.LocationCode) return false;

    for (const row of rows){
      const when = parseWhen(row[C.Week]);
      if (!when) continue;
      const key = `${String(row[C.LocationCode]||'').trim().toUpperCase()}|${String(row[C.Produktkode]||'').trim()}`;
      const pt = {
        t: +when,
        SalesQty:  num(row[C.SalesQty]),
        Sales:     num(row[C.Sales]),
        EndUnits:  num(row[C.EndBalanceUnits]),
        ProjEnd:   num(row[C.ProjEnd]),
        Avail:     num(row[C.Hylle])
      };
      if (!state.historyByKey[key]) state.historyByKey[key] = [];
      state.historyByKey[key].push(pt);
    }
    Object.values(state.historyByKey).forEach(a=>a.sort((a,b)=>a.t-b.t));
    return true;
  }

  function openForRow(r){
    ensureModal();
    const key = state.keyFn(r);
    const arr = state.historyByKey[key] || [];
    const ctxElOld = byId('prodChart');
    const ctxEl = ctxElOld.cloneNode(); // reset canvas
    ctxElOld.replaceWith(ctxEl);

    byId('chartTitle').textContent = `${r.Navn || r.Kode} — ${r.Region || ''} ${r.SuppName ? ' / ' + r.SuppName : ''}`;

    if (state.chart) { try { state.chart.destroy(); } catch {} }

    const ChartLib = window.Chart;
    if (!ChartLib){
      state.chart = null;
      const dlg = byId('chartDlg');
      dlg.showModal();
      return;
    }

    if (!arr.length){
      state.chart = new ChartLib(ctxEl.getContext('2d'), {
        type:'line',
        data:{labels:[0], datasets:[{label:'No history loaded', data:[0]}]},
        options:{plugins:{legend:{display:false}}, scales:{x:{display:false},y:{display:false}}}
      });
      byId('chartDlg').showModal();
      return;
    }

    const labels   = arr.map(p=> new Date(p.t)).map(d=> d.toLocaleDateString());
    const salesQty = arr.map(p=> p.SalesQty ?? null);
    const projEnd  = arr.map(p=> p.ProjEnd  ?? null);
    const endUnits = arr.map(p=> p.EndUnits ?? null);
    const avail    = arr.map(p=> p.Avail    ?? null);

    state.chart = new ChartLib(ctxEl.getContext('2d'), {
      data: {
        labels,
        datasets: [
          { type:'line', label:'Sales quantity',        data:salesQty, yAxisID:'y',  tension:0.2 },
          { type:'line', label:'Projected end balance', data:projEnd,  yAxisID:'y1', tension:0.2 },
          { type:'line', label:'End balance (units)',   data:endUnits, yAxisID:'y1', borderDash:[6,4], tension:0.2 },
          { type:'line', label:'Availability-%',        data:avail,    yAxisID:'y2', borderDash:[2,2], tension:0.2 }
        ]
      },
      options:{
        responsive:true,
        interaction:{mode:'index', intersect:false},
        stacked:false,
        plugins:{legend:{position:'top'}},
        scales:{
          y:  { type:'linear', position:'left',  title:{display:true, text:'Qty'} },
          y1: { type:'linear', position:'right', title:{display:true, text:'End balance'}, grid:{drawOnChartArea:false} },
          y2: { type:'linear', position:'right', title:{display:true, text:'Availability %'}, min:0, max:100, grid:{drawOnChartArea:false}, offset:true }
        }
      }
    });

    byId('chartDlg').showModal();
  }

  function setKeyFn(fn){ if (typeof fn==='function') state.keyFn = fn; }
  function reset(){ state.historyByKey = Object.create(null); if (state.chart) { try{state.chart.destroy();}catch{} state.chart=null; } }

  window.HistoryChart = { ingest, openForRow, setKeyFn, reset };
})();
