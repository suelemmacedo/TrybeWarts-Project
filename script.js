function userValidation() {
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");

  if (email.value === "tryber@teste.com" && senha.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
  const button = document.getElementById("btn");
  button.addEventListener("click", userValidation);
}

userValidation();

const btnSubmit = document.querySelector("#submit-btn");
const concordo = document.querySelector("#agreement");

function enableSubmit() {
  if (concordo.checked === true) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}
concordo.addEventListener("click", enableSubmit);

const text = document.querySelector("#textarea");

text.addEventListener("keyup", function (e) {
  const inputLength = text.value.length;
  const limiteChars = 500;

  let maxChars = document
    .getElementById("textarea")
    .setAttribute("maxChars", limiteChars);
  const pValor = document.getElementById("counter");

  let charsDigitados = parseInt(inputLength);
  pValor.innerHTML = -charsDigitados + limiteChars;
});

const formData = document.getElementById('form-data');
const submitName = document.getElementById('submit-name');
const submitEmail = document.getElementById('submit-email');
const submitCasa = document.getElementById('submit-casa');
const submitFamilia = document.getElementById('submit-familia');
const submitMaterias = document.getElementById('submit-materias');
const submitAvaliacao = document.getElementById('submit-avaliacao');
const submitObservacoes = document.getElementById('submit-observacoes');

const form = document.querySelectorAll("main")[0];
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
  submitFamilia.innerHTML = `Família: ${document.querySelector('input[name="family"]:checked').value}`;
  submitAvaliacao.innerHTML = `Avaliação: ${document.querySelector('input[name="rate"]:checked').value}`;
  submitObservacoes.innerHTML = `Observações: ${textArea.value}`;
}

function setMaterias() {
  const formDataMaterias = document.querySelectorAll('input[name="materia"]:checked');
  let resultado = '';
  for(let i = 0; i < formDataMaterias.length; i += 1) {
    if(i === 0) {
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

/* const nome = document.getElementById("input-name");
const sobrenome = document.getElementById("input-lastname");

let estudantes = [];

const addEstudante = (ev) => {
  ev.preventDefault();
  const estudante = {
    Nome: `${nome.value} ${sobrenome.value}`,
    Email: document.getElementById("input-email").value,
    Casa: document.getElementById("house").value,
    Família: document.getElementById("label-family").value,
    Matérias: document.getElementsByClassName("subject").value,
    Avaliação: document.getElementById("label-rate").value,
    Observações: document.getElementById("textarea").value,
  };
  let estudantes = [];
  estudantes.push(estudante);
  document.forms[0].reset();
  console.log(estudantes);
};

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  document.getElementById("submit-btn").addEventListener("click", addEstudante);
}); */

//const form = document.querySelectorAll("main")[0];
//form.addEventListener("click", function (e) {
//  e.preventDefault();
//  const newForm = document.createElement("div");
//  newForm.id = "form-data";
//  newForm.innerHTML = estudantes;
//  form.parentNode.replaceChild(newForm, form);
//});