import Game from "./game.js";
import checkFields from "./checkFields.js";
import sharedVariables from "./sharedVariables.js";
import sounds from "./sounds.js";
import ranking from "./minipulationRanking.js";
import profile from "./profile.js";

const divIndex = document.querySelector('#containerIndex');
const divContainerStart = document.querySelector('#containerStartGeneral');
const divModalRanking = document.querySelector('#divModalRanking');
const btnRanking = document.querySelector("#btnRanking");
const btnShowRanking = document.querySelector("#showRanking");
const divlabelInputUsername = document.querySelector('#labelInputUsername');
const btnStart = document.querySelector('#btnStart');
const btnProfile = document.querySelector("#btnProfile");
const divModalProfile = document.querySelector('#divModalProfile');
const btnConfig = document.querySelector("#btnConfig");
const btnAlterUsername = document.querySelector('#btnAlterUser');
const inputAlterUsernameElement = document.querySelector('#inputNameConfig');
const divModalConfig = document.querySelector('#divModalConfig');


export function initializePage() {
    try {
        if (sharedVariables.nameUser) {
            divlabelInputUsername.style.display = 'none';
            document.querySelector('#greeting').innerHTML = `Hello ${sharedVariables.nameUser}`;
            btnStart.focus();
        }

        sharedVariables.inputName.focus();
        sharedVariables.inputName.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === 'Space') {
                btnStart.click();
            }
        })

        btnStart.addEventListener('click', handleInitializeGame);
    } catch (error) {
        console.error(`Error initializing page: ${error}`);
    }

};


export function handleBtnRankingClick() {
    try {
        if (btnRanking) {
            btnRanking.addEventListener('click', () => {
                sharedVariables.divModalResults.style.display = 'none';
                divModalRanking.classList.add('open');
                ranking.initialize();

                handleShowModal(divModalRanking);
            });
        }

        if (btnShowRanking) {
            btnShowRanking.addEventListener('click', () => {
                sharedVariables.divModalResults.style.display = 'none';
                divContainerStart.style.display = 'flex';
                divModalRanking.classList.add('open');
                ranking.initialize()
                if (divModalRanking) {
                    divModalRanking.addEventListener('click', (e) => {
                        if (e.target.id === 'close' || e.target.id === 'divModalRanking') {
                            divModalRanking.classList.remove('open');
                            location.reload();
                        }
                    });

                    document.addEventListener('keydown', (e) => {
                        if (e.key === 'Escape') {
                            divModalRanking.classList.remove('open');
                            location.reload();
                        }
                    });
                }
            });
        }
    } catch (error) {
        console.error(`Error when handling modal ranking: ${error}`);
    }
};

export function handleBtnProfileClick() {
    try {
        if (btnProfile) {
            btnProfile.addEventListener('click', () => {
                divIndex.style.display = 'none';
                divModalProfile.classList.add('open');

                const usernameProfile = document.querySelector('#usernameProfile');

                if (usernameProfile) {
                    usernameProfile.innerText = sharedVariables.nameUser;
                }

                profile.fecthPlayerRecord('DAILY');
                profile.clickInSelectPeriod();

                divModalProfile.addEventListener('click', (e) => {
                    if (e.target.id === 'close' || e.target.id === 'divModalProfile') {
                        divModalProfile.classList.remove('open');
                        divIndex.style.display = 'flex';
                    }
                })
                handleShowModal(divModalProfile);
            })
        }
    } catch (error) {
        console.error(`Error when handling modal profile: ${error}`);
    }
};

export function handleBtnConfigClick() {
    try {
        if (btnConfig) {
            btnConfig.addEventListener('click', () => {
                divIndex.style.display = 'none';
                divModalConfig.classList.add('open');
                document.querySelector('#usernameConfig').innerHTML = sharedVariables.nameUser;

                inputAlterUsernameElement.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        btnAlterUsername.click();
                        location.reload();
                    }
                })

                btnAlterUsername.addEventListener('click', () => {
                    if (inputAlterUsernameElement.value != '') {
                        localStorage.setItem('nameUser', inputAlterUsernameElement.value);
                        location.reload();
                    }
                });

                handleShowModal(divModalConfig);
            })
        }
    } catch (error) {
        console.error(`Error when handling modal config: ${error}`);
    }
};

function handleInitializeGame() {
    checkFields.checkUsername();
    if (!sharedVariables.nameUser) {
        localStorage.setItem('nameUser', sharedVariables.inputName.value);
    }

    divContainerStart.style.display = 'none';
    sharedVariables.divContainerQuestions.style.display = 'flex';
    sounds.soundPlay('../../frontend/assets/sounds/soundPlayGame.mp3');
    const game = new Gam();
    sharedVariables.inputUserResponse.focus();
}

function handleShowModal(modal) {
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target.id === 'close' || e.target === modal) {
                modal.classList.remove('open');
                divIndex.style.display = 'flex';
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                modal.classList.remove('open');
                divIndex.style.display = 'flex';
            }
        });
    }
}

export function handleUsername() {
    try {
        sharedVariables.inputName.placeholder = checkFields.generatePlaceholder();
    } catch (error) {
        console.error(`Error inserting random placeholder if input username is empty: ${error}`);
    }
}