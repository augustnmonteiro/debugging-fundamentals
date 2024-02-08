const sharedVariables = {
    nameUser: localStorage.getItem('nameUser'),
    inputName: document.querySelector('#inputName'),
    divContainerQuestions: document.querySelector('#containerMainQuestions'),
    questionField: document.querySelector('#displayQuestions'),
    inputUserResponse: document.querySelector('#inputAnswers'),
    btnSendUserResponse: document.querySelector('#btnAnswers'),
    divModalResults: document.querySelector("#divModalResults"),
    //Numbers that will be generated randomly
    n1: null,
    n2: null,
    nOperation: 0,
    positionUnknownEquation: 0,
    maxNumber: 10,
    minNumber: 1,
    maxNumberMultiplication: 0,
    //Temporarily save results
    resultEnteredByUser: null,
    resultEquation: null,
    result: null,
    //Match information
    lives: 3,
    points: 0,
    rounds: 0,
    levels: 0,   
    //match difficulty based on level
    manipulateLevel: 0,
    matchLevel : {
        1: { operations: [0, 1] },
        2: { operations: [0, 1, 2] },
        3: { operations: [0, 1, 2, 3] },
    }
};

export default sharedVariables;