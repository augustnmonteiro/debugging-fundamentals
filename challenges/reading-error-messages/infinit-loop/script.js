let quantity = 5;
let secretNumber = Math.floor(Math.random() * quantity); 
let attempts = 0;

while (true) {
    const guess = parseInt(prompt(`Guess the number (between 1 and ${quantity}):`));

    if (isNaN(guess)) {
        alert("Please enter a valid number.");
        break;
    }

    attempts++;

    if (guess === secretNumber) {
        alert(`Congratulations! You guessed it in ${attempts} attempts.`);
        attempts = 0; 
        secretNumber = Math.floor(Math.random() * 10) + 1; 
    } else {
        alert("Try again. Your guess is incorrect.");
    }
}
