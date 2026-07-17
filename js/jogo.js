
const grid = document.querySelector('.grid');

const spanJogador = document.querySelector('.jogador')

const spanTemporizador = document.querySelector('.temporizador')

const personagens = [
  'bob',
  'patrick',
  'gary',
  'plankton',
  'lulamolusco',
  'siri',
  'sandy',
  'avos',
  'pirata',
  'puff',
];


let primeiraCarta = '';
let segundaCarta = '';


const checarVitoria = () => {
  const cartasDesabilitadas = document.querySelectorAll('.carta-desabilitada');

  if (cartasDesabilitadas.length == 20){
    clearInterval(this.loop);

    alert(`Parabéns, ${spanJogador.innerHTML}! Seu tempo foi de: ${spanTemporizador.innerHTML} segundos!!`);
  }
}







const checarCartas = () =>{
  const primeiroPersonagem = primeiraCarta.getAttribute('data-personagem')
  const segundoPersonagem = segundaCarta.getAttribute('data-personagem')

  if (primeiroPersonagem == segundoPersonagem) {

    primeiraCarta.firstChild.classList.add('carta-desabilitada');
    segundaCarta.firstChild.classList.add('carta-desabilitada');
    
    
    checarVitoria()
    
    
    
    
    
    primeiraCarta = '';
    segundaCarta = '';





  } else {
    
    setTimeout(() => {primeiraCarta.classList.remove('revela-carta')
    segundaCarta.classList.remove('revela-carta')
      
    primeiraCarta = '';
    segundaCarta = '';
  
  
  }, 900)

    

    
    
  }




}


















const revelaCarta = ({ target }) =>{
  
  if (target.parentNode.className.includes('revela-carta')) {
    return;
  }
  
  if (primeiraCarta == '') {
    target.parentNode.classList.add('revela-carta');
    primeiraCarta = target.parentNode;
  } else if (segundaCarta == '') {
    target.parentNode.classList.add('revela-carta');
    segundaCarta = target.parentNode;

  }

  checarCartas();
  

}




const criarElemento = (tag, className) => {
  const elemento = document.createElement(tag); 
  elemento.className = className
  return elemento;
}

const criarCarta = (personagem) => {

  const card = criarElemento('div', 'card')
  const frente = criarElemento('div', 'face frente')
  const tras = criarElemento('div', 'face tras')

  frente.style.backgroundImage = `url('../images/${personagem}.jpg')`;
  
  card.appendChild(frente)
  card.appendChild(tras)
  card.addEventListener('click', revelaCarta)
  card.setAttribute('data-personagem', personagem)

  return card;
}


const loadGame = () =>{
  
  const personagensDuplicados = [ ...personagens, ...personagens ]

  const embaralhado = personagensDuplicados.sort(() => Math.random() - 0.5)


  embaralhado.forEach((personagem) => {
    const card = criarCarta(personagem)
    grid.appendChild(card)
  });
}

const startTemporizador = () => {
  
  this.loop = setInterval(() => {
    const tempoAtual = Number(spanTemporizador.innerHTML);

    spanTemporizador.innerHTML = tempoAtual + 1;

  }, 1000)
}

window.onload = () => {
  const nomeJogador = localStorage.getItem('jogador')

  spanJogador.innerHTML = nomeJogador
  startTemporizador()

  loadGame();
}



