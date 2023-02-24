const inputEl = document.querySelector('#name-input');

inputEl.addEventListener('keyup', event =>{ 
    const outputEl = document.querySelector('#name-output');
   
    if (inputEl.value === "") {
        outputEl.innerText = 'Anonymous';
    } else {
        outputEl.innerText = inputEl.value;
    }
})
