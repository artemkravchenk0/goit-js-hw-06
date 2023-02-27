const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', () => {
const validLength = parseInt(inputEl.dataset.length);

inputEl.classList.remove("invalid");

    if (inputEl.value.length === validLength){
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    }
});
