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

const nome = document.getElementById("input-name");
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
  estudantes.push(estudante);
  document.forms[0].reset();
};

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  document.getElementById("submit-btn").addEventListener("click", addEstudante);
});

const form = document.querySelectorAll("main")[0];
form.addEventListener("click", function (e) {
  e.preventDefault();
  const newForm = document.createElement("div");
  newForm.id = "form-data";
  newForm.innerHTML = estudantes;
  form.parentNode.replaceChild(newForm, form);
});
