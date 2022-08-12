const input = document.querySelector('.login-input');
const btn = document.querySelector('.login-btn');
const form = document.querySelector('.login-form');

function validateInput({ target }) {
  if (target.value.length > 2) {
    btn.removeAttribute('disabled')
  } else {
    btn.setAttribute('disabled', '')
  }
}

function handleSubmit(event) {
  event.preventDefault();

  localStorage.setItem('player', input.value);
  window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit)