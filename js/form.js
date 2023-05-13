// validate formulario
const form = document.querySelector('form');
const inputName = document.querySelector('#name');
const inputLastName = document.querySelector('#lastname');
const inputEmail = document.querySelector('#email');
const submitButton = form.querySelector('#btn-enviar');

function enableSubmitButton() {
  const name = form.elements.name.value;
  const lastName = form.elements.lastname.value;
  const email = form.elements.email.value;
  if (name !== '' && lastName !== '' && email !== '') {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

form.addEventListener('input', enableSubmitButton);


