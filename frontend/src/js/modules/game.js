import sharedVariables from "./sharedVariables.js"; 
import Operations from "./operations.js";
import NumberGenerator from "./numberGenerator.js";
import Checks from "./checks.js";
import ManipulationBD from "./manipulationDb.js";
import ManipulationElements from "./manipuleElements.js";

class Game {

    constructor() {
        this.operations = new Operations(this);
        this.checks = new Checks(this);
        this.numberGenerator = new NumberGenerator(this);
        this.manipulationBD = new ManipulationBD(this);
        this.manipulationElements = new ManipulationElements(this);
        sharedVariables.infoNivel = sharedVariables.niveisUsuario[sharedVariables.levels + 1];
        this.apresentarPergunta();

        sharedVariables.btnResposta.addEventListener("click", () => {
            sharedVariables.resultadoDigitadoPeloUsuario = sharedVariables.pResposta.value;
            sharedVariables.pResposta.value = "";
            this.checks.checarResultado();
        })
    }

    apresentarPergunta() {
        sharedVariables.rounds++;
        this.numberGenerator.gerarNumeros();
        switch (sharedVariables.nOperacao) {
            case 0:
                this.operations.somar();
                break;
            case 1:
                this.operations.subtrair();
                break;
            case 2:
                this.operations.multiplicar();
                break;
            case 3:
                this.operations.dividir();
                break;
        }
    }

    diminuirVida() {
        sharedVariables.vidas -= 1;
        if (sharedVariables.vidas > 1) {
            this.manipulationElements.manipulationModalAlerts(`Resposta Errada. Você ainda tem ${sharedVariables.vidas} vidas`);
            this.manipulationElements.manipuleVida(`heart${sharedVariables.vidas + 1}`);
            this.apresentarPergunta();
        } else if (sharedVariables.vidas == 1) {
            this.manipulationElements.manipulationModalAlerts(`Resposta Errada. Você ainda tem ${sharedVariables.vidas} vida`);
            this.manipulationElements.manipuleVida(`heart${sharedVariables.vidas + 1}`);
            this.apresentarPergunta();
        } else if (sharedVariables.vidas == 0) {
            this.manipulationElements.manipulationResultsFinished(sharedVariables.pontos);
        }
    }

    adicionarPontos() {
        sharedVariables.pontos += 5;
        if (sharedVariables.pontos % 20 == 0) {
            sharedVariables.max += 10;
            sharedVariables.maxMultiplicacao += 10;
            sharedVariables.levels++;

            if (sharedVariables.levels <= 2) {
                sharedVariables.infoNivel = sharedVariables.niveisUsuario[sharedVariables.levels + 1];
            }
            this.manipulationElements.manipulationModalAlerts(`Você passou de nível! \n As perguntas ficarão mais difíceis, Boa sorte.`);
        }

        if (sharedVariables.pontos % 20 == 0 && sharedVariables.vidas < 3) {
            sharedVariables.vidas += 1;
            this.manipulationElements.manipuleVida(`heart${sharedVariables.vidas}`);
            this.manipulationElements.manipulationModalAlerts(`Parabéns! Você fez ${sharedVariables.pontos} pontos e ganhou 1 vida.`);
        }
    }

    posicao(sinal) {
        let equacao = "";
        switch (sharedVariables.nPosicao) {
            case 0:
                equacao = `? ${sinal} ${sharedVariables.n2} = ${sharedVariables.resultadoEquacao}`;
                sharedVariables.resultado = sharedVariables.n1;
                break;
            case 1:
                equacao = `${sharedVariables.n1} ${sinal} ? = ${sharedVariables.resultadoEquacao}`;
                sharedVariables.resultado = sharedVariables.n2;
                break;
            case 2:
                equacao = `${sharedVariables.n1} ${sinal} ${sharedVariables.n2} = ?`;
                sharedVariables.resultado = sharedVariables.resultadoEquacao;
                break;
        }
        return equacao;
    }

    // function resetarJogo() {
    //     vidas = 3;
    //     max = 10;
    //     pontos = 0;
    //     jogo();
    // }

}

export default Game;