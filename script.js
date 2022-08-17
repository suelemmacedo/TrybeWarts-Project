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

text.addEventListener('keyup', () => {
  const inputLength = text.value.length;
  const limiteChars = 500;
  const pValor = document.getElementById('counter');
  pValor.innerHTML = -inputLength + limiteChars;
});

const formData = document.getElementById('form-data');
const submitName = document.getElementById('submit-name');
const submitEmail = document.getElementById('submit-email');
const submitCasa = document.getElementById('submit-casa');
const submitFam = document.getElementById('submit-familia');
const submitMaterias = document.getElementById('submit-materias');
const submitAva = document.getElementById('submit-avaliacao');
const submitObservacoes = document.getElementById('submit-observacoes');

const form = document.querySelectorAll('main')[0];
const formDataName = document.getElementById('input-name');
const formDataLastName = document.getElementById('input-lastname');
const formDataEmail = document.getElementById('input-email');
const formDataCasa = document.getElementById('house');

function submitClick(event) {
  event.preventDefault();
  form.style.display = 'none';
  formData.style.display = 'inline-block';
}

const textArea = document.getElementById('textarea');

function changeFormData() {
  submitName.innerHTML = `Nome: ${formDataName.value} ${formDataLastName.value}`;
  submitEmail.innerHTML = `Email: ${formDataEmail.value}`;
  submitCasa.innerHTML = `Casa: ${formDataCasa.value}`;
  submitFam.innerHTML = `Família: ${document.querySelector('input[name="family"]:checked').value}`;
  submitAva.innerHTML = `Avaliação: ${document.querySelector('input[name="rate"]:checked').value}`;
  submitObservacoes.innerHTML = `Observações: ${textArea.value}`;
}

function setMaterias() {
  const formDataMaterias = document.querySelectorAll('input[name="materia"]:checked');
  let resultado = '';
  for (let i = 0; i < formDataMaterias.length; i += 1) {
    if (i === 0) {
      resultado = formDataMaterias[i].value;
    } else {
      resultado += `, ${formDataMaterias[i].value}`;
    }
  }
  submitMaterias.innerHTML = `Matérias: ${resultado}`;
}

btnSubmit.addEventListener('click', submitClick);
btnSubmit.addEventListener('click', changeFormData);
btnSubmit.addEventListener('click', setMaterias);
