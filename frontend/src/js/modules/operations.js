import sharedVariables from "./sharedVariables.js";

class Operations {

    constructor(gameInstance) {
        this.game = gameInstance;
        this.question;
    }

    addition() {
        try {
            if (sharedVariables.levels >= 4) {
                sharedVariables.resultEquation = sharedVariables.n1 + sharedVariables.n2;
                this.question = this.game.positionUnknownQuestion("+");
                sharedVariables.questionField.innerHTML = `${this.question}`;
            } else {
                sharedVariables.result = sharedVariables.n1 + sharedVariables.n2;
                this.question = `${sharedVariables.n1} + ${sharedVariables.n2} = ?`;
                sharedVariables.questionField.innerHTML = `${this.question}`;
            }    
        } catch (error) {
            console.error(`Error during add operation: ${error}`);
        }
    }

    subtraction() {
        try {
            this.game.checks.changePositionOfN1WithN2IfN1IsSmallerThanN2();
            if (sharedVariables.levels >= 4) {
                sharedVariables.resultEquation = sharedVariables.n1 - sharedVariables.n2;
                this.question = this.game.positionUnknownQuestion("-");
                sharedVariables.questionField.innerHTML = `${this.question}`;
            } else {
                sharedVariables.result = sharedVariables.n1 - sharedVariables.n2;
                this.question = `${sharedVariables.n1} - ${sharedVariables.n2} = ?`;
                sharedVariables.questionField.innerHTML = `${this.question}`;
            }    
        } catch (error) {
            console.error(`Error during subtraction operation: ${error}`);
        }
    }

    multiplication() {
        try {
            this.game.numberGenerator.generateN1andN2forMultiplicationAndDivision();
            this.game.checks.changePositionOfN1WithN2IfN1IsSmallerThanN2();
    
            if (sharedVariables.levels >= 4) {
                sharedVariables.resultEquation = sharedVariables.n1 * sharedVariables.n2;
                this.question = this.game.positionUnknownQuestion("*");
                sharedVariables.questionField.innerHTML = `${this.question}`;
            } else {
                sharedVariables.result = sharedVariables.n1 * sharedVariables.n2;
                this.question = `${sharedVariables.n1} * ${sharedVariables.n2} = ?`;
                sharedVariables.questionField.innerHTML = `${this.question}`;
            }    
        } catch (error) {
            console.error(`Error during multiplication operation: ${error}`);
        }
    }

    division() {
        try {
            this.game.numberGenerator.generateN1andN2forMultiplicationAndDivision();
            this.game.checks.checkIfNumbersAreDivisible();
    
            if (sharedVariables.levels >= 4) {
                sharedVariables.resultEquation = sharedVariables.n1 / sharedVariables.n2;
                this.question = this.game.positionUnknownQuestion("/");
                sharedVariables.questionField.innerHTML = `${this.question}`;
            } else {
                sharedVariables.result = sharedVariables.n1 / sharedVariables.n2;
                this.question = `${sharedVariables.n1} / ${sharedVariables.n2} = ?`;
                sharedVariables.questionField.innerHTML = `${this.question}`;
            }
        } catch (error) {
            console.error(`Error during division operation: ${error}`);
        }
    }
}

export default Operations;