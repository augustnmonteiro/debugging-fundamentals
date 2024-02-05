const sharedVariables = {
    campoPergunta: document.querySelector('#displayQuestions'),
    btnResposta: document.querySelector('#btnAnswers'),
    pResposta: document.querySelector('#inputAnswers'),
    headerQuestions: document.querySelector('#headerQuestions'),
    //Números que serão gerados aleatoriamente
    n1: null,
    n2: null,
    nOperacao: 0,
    nPosicao: 0,
    max: 10,
    min: 1,
    maxMultiplicacao: 0,
    //Guardar resultados
    resultadoDigitadoPeloUsuario: null,
    resultadoEquacao: null,
    resultado: null,
    //Informações sobre a partida 
    vidas: 3,
    pontos: 0,
    rounds: 0,
    levels: 0,   
    //Nivel da partida 
    infoNivel: 0,
    niveisUsuario : {
        1: { operacoes: [0, 1] },
        2: { operacoes: [0, 1, 2] },
        3: { operacoes: [0, 1, 2, 3] },
    }
};

export default sharedVariables;