const  input = document.querySelector('.login-input')

const  botao = document.querySelector('.login-botao')

const  form = document.querySelector('.form')

const validarInput = ({ target }) => {
  if (target.value.length >2) {
    botao.removeAttribute('disabled');
  } else{
    botao.setAttribute('disabled', '')
  }
}


const submitManual = (event) => {
  event.preventDefault();

  localStorage.setItem('jogador', input.value);
  window.location = 'pages/jogo.html'

}







input.addEventListener('input', validarInput);

form.addEventListener('submit', submitManual);

