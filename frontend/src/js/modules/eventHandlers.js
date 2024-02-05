import Game from "./game.js";

export function initializePage() {
    const divContainerStart = document.querySelector('#containerStartGeneral');
    const divContainerQuestions = document.querySelector('#containerMainQuestions');
    const inputName = document.querySelector('#inputName');
    const btnStart = document.querySelector('#btnStart');
    const nameUser = localStorage.getItem('nameUser');

    if (nameUser) {
        inputName.style.display = 'none';
        document.querySelector('#greeting').innerHTML = `Bem Vindo(a) ${nameUser}`;
    }

    btnStart.addEventListener('click', () => {
        if (!nameUser) {
            localStorage.setItem('nameUser', inputName.value);
        }
        
        divContainerStart.style.display = 'none';
        divContainerQuestions.style.display = 'flex';
        const game = new Game();
    });

};

export function handleBtnRankingClick() {
    const btnRanking = document.querySelector("#btnRanking");
    const divIndex = document.querySelector('#containerIndex');


    if (btnRanking) {
        btnRanking.addEventListener('click', () => {
            divIndex.style.display = 'none';
            const divModal = document.querySelector('#divModalRanking');
            divModal.classList.add('open');
            
            divModal.addEventListener('click', (e) => {
                if (e.target.id === 'close' || e.target.id === 'divModalRanking') {
                    divModal.classList.remove('open');
                    divIndex.style.display = 'flex';
                }
            });
        });
    }
};

export function handleBtnProfileClick() {
    const btnProfile = document.querySelector("#btnProfile");
    const divIndex = document.querySelector('#containerIndex');

    if (btnProfile) {
        btnProfile.addEventListener('click', () => {
            divIndex.style.display = 'none';
            const divModal = document.querySelector('#divModalProfile');
            divModal.classList.add('open');

            divModal.addEventListener('click', (e) => {
                if (e.target.id === 'close' || e.target.id === 'divModalProfile') {
                    divModal.classList.remove('open');
                    divIndex.style.display = 'flex';

                }
            });
        })
    }
};

export function handleBtnConfigClick() {
    const btnConfig = document.querySelector("#btnConfig");
    const divIndex = document.querySelector('#containerIndex');

    if (btnConfig) {
        btnConfig.addEventListener('click', () => {
            divIndex.style.display = 'none';
            const divModal = document.querySelector('#divModalConfig');
            divModal.classList.add('open');

            divModal.addEventListener('click', (e) => {
                if (e.target.id === 'close' || e.target.id === 'divModalConfig') {
                    divModal.classList.remove('open');
                    divIndex.style.display = 'flex';

                }
            });
        })
    }
};