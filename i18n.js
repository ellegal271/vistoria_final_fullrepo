
const strings = { es:{ searchPlaceholder:'Buscar pines...' }, en:{ searchPlaceholder:'Search pins...' } };
function lang(){ return localStorage.getItem('lang')||'es'; }
function applyLang(){ const s=strings[lang()]; if(!s) return; const el=document.getElementById('searchInput'); if(el) el.placeholder=s.searchPlaceholder; }
document.addEventListener('DOMContentLoaded', applyLang);
