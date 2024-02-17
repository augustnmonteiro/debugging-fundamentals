const firstNumber = document.querySelector('#firstNumber');
const lastNumber = document.querySelector('#lastNumber');

function calculate(a, b) {
    const result = a + b;

    return result;
}

document.querySelector('#btnResult').addEventListener('click', () => {
    const a  = Number(firstNumber.value);
    const b = Number(lastNumber.value);

    const result = calculate(a, b)
    document.querySelector('#result').innerHTML += resullt
})