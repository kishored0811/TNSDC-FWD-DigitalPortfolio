const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

const body = document.body;

const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.bar').forEach(function(bar) {
    const percent = bar.getAttribute('data-percent');
    // Set bar width after a short delay for animation
    setTimeout(() => {
      bar.style.width = percent + '%';
    }, 300);
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if(name.length < 2) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Name must be at least 2 characters.';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please enter a valid email.';
    return;
  }

  if(message.length < 10) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Message must be at least 10 characters.';
    return;
  }

  formMessage.style.color = 'green';
  formMessage.textContent = 'Message sent successfully! Thank you.';
  form.reset();
  
  // Optional: Show an alert on successful form submission
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert("Thank you for your message!");
  this.reset();
});

})
// Animate skills bars on page load
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.skill-bar').forEach(function(bar) {
    const percent = bar.getAttribute('data-percent');
    setTimeout(() => {
      bar.style.width = percent + '%';
    }, 300);
  });

  // Optional: Handle form submit
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for your message!");
    this.reset();
  });
});
