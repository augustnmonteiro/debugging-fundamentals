import sharedVariables from "./sharedVariables.js";
import Operations from "./operations.js";
import NumberGenerator from "./numberGenerator.js";
import Checks from "./checks.js";
import checkFields from "./checkFields.js";
import ManipulationElements from "./manipuleElements.js";
import sounds from "./sounds.js";

class Game {

    constructor() {
        this.operations = new Operations(this);
        this.checks = new Checks(this);
        this.numberGenerator = new NumberGenerator(this);
        this.manipulationElements = new ManipulationElements(this);
        this.startGame();

        sharedVariables.inputUserResponse.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                sharedVariables.btnSendUserResponse.click();
            }
        })
        sharedVariables.btnSendUserRespons.addEventListener("click", () => {
            const checkField = checkFields.checkInputResponse(sharedVariables.inputUserResponse);
            if (checkField) {
                sharedVariables.resultEnteredByUser = sharedVariables.inputUserResponse.value;
                this.checks.checkResult();
            }
        })
    }

    startGame() {
        try {
            sharedVariables.rounds++;
            this.numberGenerator.generateRandomNumbers();
            switch (sharedVariables.nOperation) {
                case 0:
                    this.operations.addition();
                    break;
                case 1:
                    this.operations.subtraction();
                    break;
                case 2:
                    this.operations.multiplication();
                    break;
                case 3:
                    this.operations.division();
                    break;
            }
        } catch (error) {
            console.error(`Error when starting game: ${error}`);
        }
    }

    decreaseLife() {
        try {
            sharedVariables.lives -= 1;
    
            if (sharedVariables.lives > 1) {
                this.manipulationElements.manipulateHearts(`heart${sharedVariables.lives + 1}`);
                this.startGame();
            } else if (sharedVariables.lives == 1) {
                this.manipulationElements.manipulateHearts(`heart${sharedVariables.lives + 1}`);
                this.startGame();
            } else if (sharedVariables.lives == 0) {
                sounds.soundPlay('../../frontend/assets/sounds/soundFinishedGame.mp3');
                this.manipulationElements.manipulationResultsFinished(sharedVariables.points);
            }
        } catch (error) {
            console.error(`Error when decreasing lives: ${error}`);
            
        }
    }

    manipuleLevelLifesAndPoints() {
        try {
            const plevel = document.querySelector("#levelQuestions");
            const pPoints = document.querySelector("#pointsQuestions");
            
            sharedVariables.points += 5;
            
            pPoints.innerHTML = `Points: ${sharedVariables.points}`;
            pPoints.style.color = '#fff';
            sharedVariables.questionField.style.color = '#38c958';
            
            setTimeout(() => {
                pPoints.style.color = '#383939';
                sharedVariables.questionField.style.color = '#FF0000';
            }, 250);
        
            if (sharedVariables.points % 20 == 0) {
                sharedVariables.maxNumber += 10;
                sharedVariables.maxNumberMultiplication += 5;
                sharedVariables.levels++;
        
                plevel.innerHTML = `Level: ${sharedVariables.levels}`;
                plevel.style.color = '#fff';
        
                setTimeout(() => {
                    plevel.style.color = '#383939';
                }, 300);
        
                if (sharedVariables.levels <= 2) {
                    sharedVariables.manipulateLevel = sharedVariables.matchLevel[sharedVariables.levels + 1];
                }
            }
        
            if (sharedVariables.points % 50 == 0 && sharedVariables.lives < 3) {
                sharedVariables.lives += 1;
                this.manipulationElements.manipulateHearts(`heart${sharedVariables.lives}`);
            }
        } catch (error) {
            console.error(`Error when manipulating user points, level and lives: ${error}`);
        }
    }

    positionUnknownQuestion(sinal) {
        try {
            let equation = "";
            switch (sharedVariables.positionUnknownEquation) {
                case 0:
                    equation = `? ${sinal} ${sharedVariables.n2} = ${sharedVariables.resultEquation}`;
                    sharedVariables.result = sharedVariables.n1;
                    break;
                case 1:
                    equation = `${sharedVariables.n1} ${sinal} ? = ${sharedVariables.resultEquation}`;
                    sharedVariables.result = sharedVariables.n2;
                    break;
                case 2:
                    equation = `${sharedVariables.n1} ${sinal} ${sharedVariables.n2} = ?`;
                    sharedVariables.result = sharedVariables.resultEquation;
                    break;
            }
            return equation;            
        } catch (error) {
            console.error(`Error when manipulating user points, level and lives: ${error}`);
        }
    }

    resetGameData() {
        try {
            const plevel = document.querySelector("#levelQuestions");
            const pPoints = document.querySelector("#pointsQuestions");
            
            plevel.innerHTML = `Level: 0`;
            pPoints.innerHTML = `Points: 0`;
            sharedVariables.lives = 3;
            sharedVariables.maxNumber = 10;
            sharedVariables.minNumber = 1;
            sharedVariables.maxNumberMultiplication = 0;
            sharedVariables.rounds = 0;
            sharedVariables.levels = 0;
            sharedVariables.points = 0;
            sharedVariables.manipulateLevel = 0;
        } catch (error) {
            console.error(`Error when resetting game data: ${error}`);
        }
    }

    resetGame() {
        try {
            sharedVariables.divModalResults.style.display = 'none';
            sharedVariables.divContainerQuestions.style.display = 'flex';
            this.resetGameData();
            this.startGame();
            sharedVariables.inputUserResponse.focus();
        } catch (error) {
            console.error(`Error when restarting game: ${error}`);
            
        }
    }
}

export default Game;