import sharedVariables from "./sharedVariables.js";


import SharedVariables from "./sharedVariables.js";

class ManipulationElements {

    constructor(gameInstance) {
        this.game = gameInstance;
        this.hearts = 3;
    }

    manipulationModalAlerts(msg) {
        const divmodalAlerts = document.querySelector("#divModalAlerts");
        const modalAlerts = document.querySelector("#modalAlert");

        divmodalAlerts.classList.add("open");
        modalAlerts.classList.add("alerts");
        modalAlerts.innerHTML = msg;

        //logica para mudar o designer do alerta baseado no erro ou acerto.
        // if(estado) {

        // }

        //verificar se o alerta é de erro ou de subir de nivel 

        // if (erro) {

        // }

        divmodalAlerts.addEventListener('click', (e) => {
            if (e.target.id === 'close' || e.target.id === 'divModalAlerts') {
                divmodalAlerts.classList.remove('open');
            }
        });

        setTimeout(() => {
            divmodalAlerts.classList.remove('open');
            // modalAlerts.innerHTML = "";
        }, 3000);
    }

    manipulationResultsFinished(pontos) {
        const divContainerQuestions = document.querySelector('#containerMainQuestions');
        const divmodalResults = document.querySelector("#divModalResults");
        const modalResults = document.querySelector("#modalAlertResults");
        const nameUser = localStorage.getItem("nameUser");

        divmodalResults.style.display = "flex";
        divContainerQuestions.style.display = "none";
        sharedVariables.btnResposta.style.display = 'none';
        sharedVariables.pResposta.style.display = 'none';
        sharedVariables.headerQuestions.style.display = 'none';
        modalResults.classList.add("alerts");

        //Lógica de mostrar os reslutado do usuario abaixo

        modalResults.innerHTML = `FIM DE JOGO ${nameUser}! Você fez: ${pontos} Pontos`;

        this.game.manipulationBD.enviarDadosBd();
    }

    manipuleVida(heartId) {
        const heartElement = document.getElementById(heartId);

        if (heartElement.classList.contains("heart")) { 
            return heartElement.classList.replace('heart', 'empty-heart');
        }
        heartElement.classList.replace('empty-heart', 'heart');
    }
}

export default ManipulationElements;