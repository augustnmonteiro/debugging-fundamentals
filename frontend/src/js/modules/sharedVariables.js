const sharedVariables = {
    inputName: document.querySelector('#inputName'),
    questionField: document.querySelector('#displayQuestions'),
    btnSendUserResponse: document.querySelector('#btnAnswers'),
    inputUserResponse: document.querySelector('#inputAnswers'),
    nameUser: localStorage.getItem('nameUser'),
    //Números que serão gerados aleatoriamente
    n1: null,
    n2: null,
    nOperation: 0,
    positionUnknownEquation: 0,
    maxNumber: 10,
    minNumber: 1,
    maxNumberMultiplication: 0,
    //Guardar resultados
    resultEnteredByUser: null,
    resultEquation: null,
    result: null,
    //Informações sobre a partida 
    lives: 3,
    points: 0,
    rounds: 0,
    levels: 0,   
    //Nivel da partida 
    manipulateLevel: 0,
    matchLevel : {
        1: { operations: [0, 1] },
        2: { operations: [0, 1, 2] },
        3: { operations: [0, 1, 2, 3] },
    }
};

export default sharedVariables;