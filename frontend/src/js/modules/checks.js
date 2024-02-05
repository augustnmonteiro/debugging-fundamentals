import sharedVariables from "./sharedVariables.js";

class Checks {

    constructor(gameInstance) {
        this.game = gameInstance;
        }
    

    checarResultado() {
        if (Number(sharedVariables.resultadoDigitadoPeloUsuario) == sharedVariables.resultado) {
            this.game.adicionarPontos();
            this.game.apresentarPergunta();
        } else {
            this.game.diminuirVida();
        }
    }

    alterarPosicaoDoN1comN2SeN1menorN2() {
        let n2Temporario = sharedVariables.n2;
        if (sharedVariables.n1 < sharedVariables.n2) {
            sharedVariables.n2 = sharedVariables.n1;
            sharedVariables.n1 = n2Temporario;
        }
    }

    checarSeNumeroSaoDivisiveis() {
        while (sharedVariables.n1 % sharedVariables.n2 != 0) {
            this.game.numberGenerator.gerarN1eN2();
        }
        this.alterarPosicaoDoN1comN2SeN1menorN2();
    }
}

export default Checks;