(() => {
  'use strict';

  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      alert('Thank you for contacting Swastik Properties! We will get back to you shortly.');
      form.reset();
      form.classList.remove('was-validated');
    }
    form.classList.add('was-validated');
  });
})();
