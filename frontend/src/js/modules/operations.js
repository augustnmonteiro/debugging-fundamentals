import sharedVariables from "./sharedVariables.js";

class Operations {

    constructor(gameInstance) {
        this.game = gameInstance;
    }

    somar() {
        if (sharedVariables.levels >= 4) {
            sharedVariables.resultadoEquacao = sharedVariables.n1 + sharedVariables.n2;
            let posicaoPergunta = this.game.posicao("+");
            sharedVariables.campoPergunta.innerHTML = `${posicaoPergunta}`;
        } else {
            sharedVariables.resultado = sharedVariables.n1 + sharedVariables.n2;
            let pergunta = `${sharedVariables.n1} + ${sharedVariables.n2} = X`;
            sharedVariables.campoPergunta.innerHTML = `${pergunta}`;
        }
    }

    subtrair() {
        this.game.checks.alterarPosicaoDoN1comN2SeN1menorN2();
        if (sharedVariables.levels >= 4) {
            sharedVariables.resultadoEquacao = sharedVariables.n1 - sharedVariables.n2;
            let posicaoPergunta = this.game.posicao("-");
            sharedVariables.campoPergunta.innerHTML = `${posicaoPergunta}`;
        } else {
            sharedVariables.resultado = sharedVariables.n1 - sharedVariables.n2;
            let pergunta = `${sharedVariables.n1} - ${sharedVariables.n2} = X`;
            sharedVariables.campoPergunta.innerHTML = `${pergunta}`;
        }
    }

    multiplicar() {
        this.game.numberGenerator.gerarN1eN2paraMultiplicacaoEDivisao();
        this.game.checks.alterarPosicaoDoN1comN2SeN1menorN2();

        if (sharedVariables.levels >= 4) {
            sharedVariables.resultadoEquacao = sharedVariables.n1 * sharedVariables.n2;
            let posicaoPergunta = this.game.posicao("*");
            sharedVariables.campoPergunta.innerHTML = `${posicaoPergunta}`;
        } else {
            sharedVariables.resultado = sharedVariables.n1 * sharedVariables.n2;
            let pergunta = `${sharedVariables.n1} * ${sharedVariables.n2} = X`;
            sharedVariables.campoPergunta.innerHTML = `${pergunta}`;
        }
    }

    dividir() {
        this.game.numberGenerator.gerarN1eN2paraMultiplicacaoEDivisao();
        this.game.checks.checarSeNumeroSaoDivisiveis();

        if (sharedVariables.levels >= 4) {
            sharedVariables.resultadoEquacao = sharedVariables.n1 / sharedVariables.n2;
            let posicaoPergunta = this.game.posicao("/");
            sharedVariables.campoPergunta.innerHTML = `${posicaoPergunta}`;
        } else {
            sharedVariables.resultado = sharedVariables.n1 / sharedVariables.n2;
            let Pergunta = `${sharedVariables.n1} / ${sharedVariables.n2} = X`;
            sharedVariables.campoPergunta.innerHTML = `${Pergunta}`;
        }
    }
}

export default Operations;