const counterValueEl = document.querySelector('#value');
let counterValue = parseInt(counterValueEl.textContent);

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    // обработчик декремента
    if (button.dataset.action === 'decrement') {
        button.addEventListener('click', () => {
            counterValue -= 1
            counterValueEl.textContent = counterValue;
        })       
    }
    // обработчик инкримента
    if (button.dataset.action === 'increment') {
        button.addEventListener('click', () => {
            counterValue += 1
            counterValueEl.textContent = counterValue;
        })       
    }
});
