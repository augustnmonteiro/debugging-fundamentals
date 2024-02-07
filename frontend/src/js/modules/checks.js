import sharedVariables from "./sharedVariables.js";
import sounds from "./sounds.js";

class Checks {

    constructor(gameInstance) {
        this.game = gameInstance;
    }

    checkResult() {
        try {
            if (Number(sharedVariables.resultEnteredByUser) == sharedVariables.result) {
                this.game.manipuleLevelLifesAndPoints();
                this.game.startGame();
                sounds.soundPlay('../../frontend/assets/sounds/soundSucess.mp3');
                sharedVariables.inputUserResponse.value = "";
            } else {
                sharedVariables.inputUserResponse.classList.add('error');
                sounds.soundPlay('../../frontend/assets/sounds/soundError.mp3');
                setTimeout(() => {
                    sharedVariables.inputUserResponse.classList.remove('error');
                    sharedVariables.inputUserResponse.value = "";
                    this.game.decreaseLife();
                }, 1000);
            }
        } catch (error) {
            console.error(`Error when checking user response: ${error}`);
        }
    }

    changePositionOfN1WithN2IfN1IsSmallerThanN2() {
        try {
            let n2Temporary = sharedVariables.n2;
            if (sharedVariables.n1 < sharedVariables.n2) {
                sharedVariables.n2 = sharedVariables.n1;
                sharedVariables.n1 = n2Temporary;
            }
        } catch (error) {
            console.error(`Error when checking if n1 is less than n2: ${error}`);
        }
    }

    checkIfNumbersAreDivisible() {
        try {
            while (sharedVariables.n1 % sharedVariables.n2 != 0) {
                this.game.numberGenerator.generateN1andN2();
            }
            this.changePositionOfN1WithN2IfN1IsSmallerThanN2();
        } catch (error) {
            console.error(`Error when checking whether numbers are divisible: ${error}`);
        }
    }
}

export default Checks;