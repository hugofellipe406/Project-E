const botao = document.getElementById('botão');
botao.addEventListener('mouseenter' , ()=> {
const larguraJanela = window.innerWidth;
const alturaJanela = window.innerHeight;
const novaPosicaoX = Math.random() * (larguraJanela - botao.offsetWidth);
const novaPosicaoY = Math.random() * (larguraJanela - botao.offsetHeight);

botao.style.left ='${novaPosicaoX}px';
botao.style.top = '${novaPosicaoY}px';


});