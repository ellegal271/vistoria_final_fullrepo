
function toggleDark(){ document.body.classList.toggle('dark'); localStorage.setItem('dark', document.body.classList.contains('dark')?'1':'0'); }
(function(){ if(localStorage.getItem('dark')==='1') document.body.classList.add('dark'); })();
document.addEventListener('DOMContentLoaded', ()=>{ setTimeout(()=>{ document.querySelectorAll('img[loading],video').forEach(i=>i.setAttribute('loading','lazy')); },500); });
