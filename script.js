const WHATSAPP_NUMBER = "2349092171994";
document.querySelectorAll('[data-wa]').forEach(a=>{if(WHATSAPP_NUMBER!=="YOUR_WHATSAPP_NUMBER"){a.href=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Cynthiagrey Designs, I'd like to make an enquiry about your Christmas collection.")}`}else a.onclick=e=>{e.preventDefault();alert('Add Cynthiagrey Designs WhatsApp number in script.js to activate this button.')}});
const menu=document.querySelector('.menu');const nav=document.querySelector('nav');menu.onclick=()=>{menu.classList.toggle('open');nav.classList.toggle('open')};document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>{menu.classList.remove('open');nav.classList.remove('open')});document.getElementById('year').textContent=new Date().getFullYear();
r();
