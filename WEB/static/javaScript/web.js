const currentPage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
  if (link.href.includes(`${currentPage}`)) {
    link.classList.add("active");
  }
});




const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password === confirmPassword) {
    // passwords are equal, submit the form
    form.submit();
  } else {
    // passwords are not equal, show an error message
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = 'Passwords do not match';
  }
});
