const inputName = document.querySelector('#inputName');
const btnStart = document.querySelector('#btnStart');
const campoPergunta = document.querySelector('#exibirPergunta');
const btnResposta = document.querySelector('#btnResposta');
const pResposta = document.querySelector('#inputResposta').value;
let n1 = null;
let n2 = null;
let nOperacao = 0;
let nPosicao = 0;
let resultadoDigitadoPeloUsuario = null;
let resultadoEquacao = null;
let resultado = null;
max = 10;
min = 0;

function startGame() {

    // document.querySelector('#jogar').style.display = 'none';
    // document.querySelector('#pergunta').style.display = 'block';

    gerarNumeros();
    switch (nOperacao) {
        case 0:
            somar();
            break;
        case 1:
            subtrair();
            break;
        case 2:
            multiplicar();
            break;
        case 3:
            dividir();
            break;
    }

    btnResposta.addEventListener("click", () => {
        resultadoDigitadoPeloUsuario = pResposta;
        console.log(resultado, resultadoDigitadoPeloUsuario);
        checarResultado();
    }
)}

function somar() {
    resultadoEquacao = n1 + n2;
    let posicaotexto = posicao("+");
    campoPergunta.innerHTML = `Qual o valor de ${posicaotexto}`;
}

function subtrair() {
    alterarPosicaoDoN1comN2SeN1menorN2();
    resultadoEquacao = n1 - n2;
    let posicaoTexto = posicao("-");
    campoPergunta.innerHTML = `Qual o valor de ${posicaoTexto}`;
}

function multiplicar() {
    alterarPosicaoDoN1comN2SeN1menorN2();
    resultadoEquacao = n1 * n2;
    let posicaoTexto = posicao("*");
    campoPergunta.innerHTML = `Qual o valor de ${posicaoTexto}`;
}

function dividir() {
    checarSeNumeroSaoDivisiveis();
    resultadoEquacao = n1 / n2;
    let posicaoTexto = posicao("/");
    campoPergunta.innerHTML = `Qual o valor de ${posicaoTexto}`;
}

function posicao(sinal) {
    let equacao = "";
    switch (nPosicao) {
        case 0:
            equacao = `? ${sinal} ${n2} = ${resultadoEquacao}`;
            resultado = n1;
            break;
        case 1:
            equacao = `${n1} ${sinal} ? = ${resultadoEquacao}`;
            resultado = n2;
            break;
        case 2:
            equacao = `${n1} ${sinal} ${n2} = ?`;
            resultado = resultadoEquacao;
            break;
    }
    return equacao;
}

function alterarPosicaoDoN1comN2SeN1menorN2() {
    let n2Temporario = n2;
    if (n1 < n2) {
        n2 = n1;
        n1 = n2Temporario;
    }
}

function checarSeNumeroSaoDivisiveis() {
    while (n1 % n2 != 0) {
        gerarN1eN2();
    }
    alterarPosicaoDoN1comN2SeN1menorN2();
}

function checarResultado() {
    if (resultadoDigitadoPeloUsuario == resultado) {
        startGame();
    } else {
        alert("FIM DE JOGO: " + resultado)
    }
}

function gerarNumeros() {
    n1 = Math.floor(Math.random() * (max - min) + min);
    n2 = Math.floor(Math.random() * (max - min) + min);
    nOperacao = Math.floor(Math.random() * 4);
    nPosicao = Math.floor(Math.random() * 3);
}

function gerarN1eN2() {
    n1 = Math.floor(Math.random() * (max - min) + min);
    n2 = Math.floor(Math.random() * (max - min) + min);
}

btnStart.addEventListener('click', () => {
    startGame();
})