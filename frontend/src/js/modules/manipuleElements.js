import sharedVariables from "./sharedVariables.js";
import ManipulationDB from "./manipulationDB.js";
import sounds from "./sounds.js";
import * as EventHandlers from "./eventHandlers.js";
import RecordChecker from "./manipuleCheckRecordPlayer.js";
import share from "./shareResults.js";

class ManipulationElements {

    constructor(gameInstance) {
        this.game = gameInstance;
    }

    manipulationResultsFinished(points) {
        try {
            const modalResults = document.querySelector("#modalAlertResults");
            const btnShare = document.querySelector("#btnShareResults");
            const btnRestartGame = document.querySelector("#restartGame");
            const btnShowRanking = document.querySelector("#showRanking");
            const btnHome = document.querySelector("#showIndex");
            const createP = document.createElement('p');
            
            sharedVariables.divModalResults.style.display = "flex";
            sharedVariables.divContainerQuestions.style.display = "none";
            btnRestartGame.focus();
            modalResults.style.display = 'block'
            modalResults.innerHTML = '';
            createP.textContent = `Congratulations ${sharedVariables.nameUser}!! You scored ${sharedVariables.points} points, send it to your friend to play and learn together`;
            modalResults.appendChild(createP);
            RecordChecker.getRecord();
    
            ManipulationDB.sendMatchDataDB();
    
            this.game.manipulationElements.manipulateHearts(`heart2`)
            this.game.manipulationElements.manipulateHearts(`heart3`)
            
            btnShare.addEventListener("click", () =>{
                share.shareResults();
            });

            btnRestartGame.addEventListener("click", () => {
                sounds.soundPlay('../../frontend/assets/sounds/soundPlayGame.mp3');
                this.game.resetGame();
            })
    
            btnShowRanking.addEventListener("click", () => {
                EventHandlers.handleBtnRankingClick();
            })

            btnHome.addEventListener("click", () => {
                location.reload();
            });

        } catch (error) {
            console.error(`Error generating game end screen: ${error}`);
        }
    }

    manipulateHearts(heartId) {
        try {
            const heartElement = document.getElementById(heartId);
            if (heartElement.classList.contains("heart")) { 
                return heartElement.classList.replace('heart', 'empty-heart');
            }
            heartElement.classList.replace('empty-heart', 'heart');
        } catch (error) {
            console.error(`error when manipulating hearts: ${error}`);
        }

    }

}

export default ManipulationElements;