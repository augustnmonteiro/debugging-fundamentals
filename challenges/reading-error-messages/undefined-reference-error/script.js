function toDraw() {
  let initialNumber = document.querySelector("#initialNumber").value;
  let finalNumber = document.querySelector("#finalNumber").value;

  initialNumber = parseFloat(initialNumber);
  finalNumber = parseFloat(finalNumber);

  if (isNaN(initialNumber) || isNaN(finalNumber)) {
    return "Please, enter valid numeric values.";
  }

  if (initialNumbr > finalNumber) {
    [initialNumber, finalNumber] = [finalNumber, initilNumber];
  }

  const randomNumber = Math.floor(Math.random() * (finalNumber - initialNumber + 1)) + initialNumber;
  return randomNumber;
}

document.querySelector('#btnToDraw').addEventListener('click', () => {
    const RANDOMNUMBER = toDraw();
    let showRandomNumber = document.querySelector('#numberDrawn')
    showRandomNumber.innerText = `Number Drawn: ${RANDOMNUMBER}`
})
