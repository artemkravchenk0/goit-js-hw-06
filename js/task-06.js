const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', () => {
const minLength = inputEl.dataset.length;

    if (inputEl.value.length >= minLength){
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    }
});
