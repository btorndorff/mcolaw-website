const myForm = document.querySelector('#contact');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#msg');
const errorMsg = document.querySelector('#error-msg');

myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '' || msg.value === '') {
        errorMsg.classList.add('error');
        errorMsg.innerHTML = "Please enter all fields";

        setTimeout(() => errorMsg.remove(), 3000);
    } else {
        console.log(nameInput.value + "\n" + emailInput.value + "\n" + msg.value);
        nameInput.value = '';
        emailInput.value = '';
        msg.value = '';
    }

}