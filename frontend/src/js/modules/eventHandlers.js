import Game from "./game.js";
import checkFields from "./checkFields.js";
import sharedVariables from "./sharedVariables.js";
import sounds from "./sounds.js";
import ranking from "./minipulationRanking.js";
import playerProfaile from "./profile.js";

const divIndex = document.querySelector('#containerIndex');
const divContainerStart = document.querySelector('#containerStartGeneral');

export function initializePage() {
    try {
        const divContainerQuestions = document.querySelector('#containerMainQuestions');
        const divlabelInputUsername = document.querySelector('#labelInputUsername');
        const btnStart = document.querySelector('#btnStart');

        if (sharedVariables.nameUser) {
            divlabelInputUsername.style.display = 'none';
            document.querySelector('#greeting').innerHTML = `Hello ${sharedVariables.nameUser}`;
        }

        sharedVariables.inputName.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                btnStart.click();
            }
        })

        btnStart.addEventListener('click', () => {
            checkFields.checkUsername();
            if (!sharedVariables.nameUser) {
                localStorage.setItem('nameUser', sharedVariables.inputName.value);
            }

            divContainerStart.style.display = 'none';
            divContainerQuestions.style.display = 'flex';
            sounds.soundPlay('../../frontend/assets/sounds/soundPlayGame.mp3');
            const game = new Game();
            document.querySelector("#inputAnswers").focus();
        });
    } catch (error) {
        console.error(`Error initializing page: ${error}`);
    }

};


export function handleBtnRankingClick() {
    try {
        const divModalRanking = document.querySelector('#divModalRanking');
        const divModalResults = document.querySelector('#divModalResults');
        const btnRanking = document.querySelector("#btnRanking");
        const btnShowRanking = document.querySelector("#showRanking");

        if (btnRanking) {
            btnRanking.addEventListener('click', () => {
                divModalResults.style.display = 'none';
                divModalRanking.classList.add('open');
                document.getElementById('showRankingDiv').innerHTML = '';
                ranking.initialize()
                divModalRanking.addEventListener('click', (e) => {
                    if (e.target.id === 'close' || e.target.id === 'divModalRanking') {
                        divModalRanking.classList.remove('open');
                        divIndex.style.display = 'flex';
                    }
                });
            });
        }

        if (btnShowRanking) {
            btnShowRanking.addEventListener('click', () => {
                divModalResults.style.display = 'none';
                divContainerStart.style.display = 'flex';
                divModalRanking.classList.add('open');
                ranking.initialize()
                divModalRanking.addEventListener('click', (e) => {
                    if (e.target.id === 'close' || e.target.id === 'divModalRanking') {
                        divModalRanking.classList.remove('open');
                        location.reload();
                    }
                });
            });
        }
    } catch (error) {
        console.error(`Error when handling modal ranking: ${error}`);
    }
};


async function fecthPlayrRecord(period) { 
    const nameUser = localStorage.getItem('nameUser');
    if(!nameUser) {
        console.log("Name User Is Invalid.")
    }
    await playerProfaile.getRecord(nameUser, period);
}

function clickInSelectPeriod() {
    const dailyBtnSelectPeriod = document.getElementById('dailyBtnSelectRecordPeriod');
    const weeklyBtnSelectPeriod = document.getElementById('weeklyBtnSelectRecordPeriod');
    const montlhyBtnSelectPeriod = document.getElementById('monthlyBtnSelectRecordPeriod');

    dailyBtnSelectPeriod.addEventListener('click', function() {
        fecthPlayrRecord('DAILY');
        
        dailyBtnSelectPeriod.classList.add('selected');
        weeklyBtnSelectPeriod.classList.remove('selected');
        montlhyBtnSelectPeriod.classList.remove('selected');
    });

    weeklyBtnSelectPeriod.addEventListener('click', function() {
        fecthPlayrRecord('WEEKLY');
        
        dailyBtnSelectPeriod.classList.remove('selected');
        weeklyBtnSelectPeriod.classList.add('selected');
        montlhyBtnSelectPeriod.classList.remove('selected');
    });

    montlhyBtnSelectPeriod.addEventListener('click', function() {
        fecthPlayrRecord('MONTHLY');
        dailyBtnSelectPeriod.classList.remove('selected');
        weeklyBtnSelectPeriod.classList.remove('selected');
        montlhyBtnSelectPeriod.classList.add('selected');
    });

}

export function handleBtnProfileClick() {
    try {
        const btnProfile = document.querySelector("#btnProfile");
        const divIndex = document.querySelector('#containerIndex');

        if (btnProfile) {
            btnProfile.addEventListener('click', () => {
                divIndex.style.display = 'none';
                const divModal = document.querySelector('#divModalProfile');

                divModal.classList.add('open');
                const nameUser = localStorage.getItem('nameUser');
                const usernameProfile = document.querySelector('#usernameProfile');
                if (usernameProfile) {
                    usernameProfile.innerText = nameUser;
                }
                clickInSelectPeriod();
                divModal.addEventListener('click', (e) => {
                    if (e.target.id === 'close' || e.target.id === 'divModalProfile') {
                        divModal.classList.remove('open');
                        divIndex.style.display = 'flex';
                    }
                })    
            })   
        }                

    }  catch(error) {
        console.log(error)
    }
};

export function handleBtnConfigClick() {
    try {
        const btnConfig = document.querySelector("#btnConfig");
        const btnAlterUsername = document.querySelector('#btnAlterUser');
        const inputAlterUsernameElement = document.querySelector('#inputNameConfig');

        if (btnConfig) {
            btnConfig.addEventListener('click', () => {
                divIndex.style.display = 'none';
                const divModal = document.querySelector('#divModalConfig');
                divModal.classList.add('open');

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
                        inputAlterUsernameElement.value = '';
                    }
                    inputAlterUsernameElement.classList.add('error');

                    setTimeout(() => {
                        inputAlterUsernameElement.classList.remove('error');
                    }, 1000);
                });

                divModal.addEventListener('click', (e) => {
                    if (e.target.id === 'close' || e.target.id === 'divModalConfig') {
                        divModal.classList.remove('open');
                        divIndex.style.display = 'flex';
                    }
                });
            })
        }
    } catch (error) {
        console.error(`Error when handling modal config: ${error}`);
    }
};

export function handleUsername() {
    try {
        sharedVariables.inputName.placeholder = checkFields.generatePlaceholder();
    } catch (error) {
        console.error(`Error inserting random placeholder if input username is empty: ${error}`);
    }
}