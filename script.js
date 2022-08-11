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
