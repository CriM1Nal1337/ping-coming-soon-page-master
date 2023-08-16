const btn = document.getElementById('btn');
const spanError = document.getElementById('error-email');
const email = document.getElementById('email');

btn.addEventListener("click", function () {
    const isValidEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value);
    if (isValidEmail) {
        spanError.classList.add('hide');
        email.classList.remove('border-red');
    } else {
        spanError.classList.remove('hide');
        email.classList.add('border-red');
    }
});
