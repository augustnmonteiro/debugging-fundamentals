import sharedVariables from "./sharedVariables.js";
import ManipulationDB from "./manipulationDB.js";
import * as EventHandlers from "./eventHandlers.js";
import RecordChecker from "./manipuleCheckRecordPlayer.js";

class ManipulationElements {

    constructor(gameInstance) {
        this.game = gameInstance;
    }

    manipulationResultsFinished(pontos) {
        try {
            const divContainerQuestions = document.querySelector('#containerMainQuestions');
            const divmodalResults = document.querySelector("#divModalResults");
            const modalResults = document.querySelector("#modalAlertResults");
            const btnRestartGame = document.querySelector("#restartGame");
            const btnShowRanking = document.querySelector("#showRanking");
            const checkRecordUser = new RecordChecker(sharedVariables.nameUser)
            divmodalResults.style.display = "flex";         
            divContainerQuestions.style.display = "none";
            modalResults.classList.add("alerts");
    
            //Lógica de mostrar os reslutado do usuario abaixo
    
            // modalResults.innerHTML = `Congratulations ${sharedVariables.nameUser}! You scored ${pontos} Points`;
            checkRecordUser.getRecord(sharedVariables.points)

    
            ManipulationDB.sendMatchDataDB();
    
            this.game.manipulationElements.manipulateHearts(`heart2`)
            this.game.manipulationElements.manipulateHearts(`heart3`)
            
            btnRestartGame.addEventListener("click", () => {
                this.game.resetGame();
            })
    
            btnShowRanking.addEventListener("click", () => {
                EventHandlers.handleBtnRankingClick();
            })
        } catch (error) {
            console.error(`Error generating game end screen: ${error}`);
        }
    }

    manipulateHearts(heartId) {
        try {
            const heartElement = document.getElementById(heartId);
            console.log("Atualizei os heart");
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