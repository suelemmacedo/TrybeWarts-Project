function userValidation() {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');

  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
  const button = document.getElementById('btn');
  button.addEventListener('click', userValidation);
}

userValidation();

const btnSubmit = document.querySelector('#submit-btn');
const concordo = document.querySelector('#agreement');

function enableSubmit() {
  if (concordo.checked === true) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}
concordo.addEventListener('click', enableSubmit);

const text = document.querySelector('#textarea');

text.addEventListener('keyup', function(e) { 
  const inputLength = text.value.length; 
  const limiteChars = 500;

  let maxChars = document.getElementById('textarea').setAttribute('maxChars', limiteChars);
  const pValor = document.getElementById('counter');

  let charsDigitados = parseInt(inputLength);
  pValor.innerHTML = ( - charsDigitados + limiteChars);
});