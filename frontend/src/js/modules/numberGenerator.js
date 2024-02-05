import sharedVariables from "./sharedVariables.js";

class NumberGenerator {
    gerarNumeros() {
        sharedVariables.n1 = Math.floor(Math.random() * (sharedVariables.max - sharedVariables.min) + sharedVariables.min);
        sharedVariables.n2 = Math.floor(Math.random() * (sharedVariables.max - sharedVariables.min) + sharedVariables.min);
        sharedVariables.nPosicao = Math.floor(Math.random() * 3);

        if (sharedVariables.levels <= 2) {
            const operacoesPermitidas = sharedVariables.infoNivel.operacoes;
            console.log(operacoesPermitidas);
            console.log(operacoesPermitidas.length);
            sharedVariables.nOperacao = operacoesPermitidas[Math.floor(Math.random() * operacoesPermitidas.length)];
        } else {
            sharedVariables.nOperacao = Math.floor(Math.random() * 4);
        }
    }

    gerarN1eN2paraMultiplicacaoEDivisao() {
        sharedVariables.n1 = Math.floor(Math.random() * (sharedVariables.maxMultiplicacao - sharedVariables.min) + sharedVariables.min);
        sharedVariables.n2 = Math.floor(Math.random() * (sharedVariables.maxMultiplicacao - sharedVariables.min) + sharedVariables.min);
    }

    gerarN1eN2() {
        sharedVariables.n1 = Math.floor(Math.random() * (sharedVariables.max - sharedVariables.min) + sharedVariables.min);
        sharedVariables.n2 = Math.floor(Math.random() * (sharedVariables.max - sharedVariables.min) + sharedVariables.min);
    }
}

export default NumberGenerator;