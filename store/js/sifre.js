const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const error = document.querySelector('.error');
  if (username === 'admin' && password === '1234') {
    window.location.href = '/html/anasayfa.html';
  } else {
    error.style.display = 'block';
  }
});
