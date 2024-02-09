import sharedVariables from "./sharedVariables.js";

class Profile {
    async getRecord(username, period) {
        try {
            const urlAPI = `http://localhost:8180/game/${username}/record/${period}`;
            const response = await fetch(urlAPI);
            const formattingWordPeriod = period.charAt(0).toUpperCase() + period.slice(1).toLowerCase();
            if (!response.ok) {
                throw new Error('Failed to fetch record data');
            }
            const data = await response.json();

            // Verificando e definindo valores padrão caso sejam nulos
            const recordPlayer = data.dataRecordPlayer[0];
            const maxScore = recordPlayer.max_score !== null ? recordPlayer.max_score : 0;
            const maxLevel = recordPlayer.max_level !== null ? recordPlayer.max_level : 0;
            const maxRound = recordPlayer.max_round !== null ? recordPlayer.max_round : 0;

            const recordDiv = document.getElementById('record');
            recordDiv.innerHTML = '';
            const createElementHtml = `
            <h1>Record Level ${formattingWordPeriod}: ${maxLevel}</h1>
            <h1>Record Score ${formattingWordPeriod}: ${maxScore}</h1>
            <h1>Record Round ${formattingWordPeriod}: ${maxRound}</h1>
            `;
            recordDiv.innerHTML += createElementHtml;

            recordDiv.querySelectorAll('h1').forEach(paragraph => {
                paragraph.classList.add('recordsUser');
            });

            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    async fecthPlayerRecord(period) {
        if (!sharedVariables.nameUser) {
            console.log("Name User Is Invalid.")
        }
        await this.getRecord(sharedVariables.nameUser, period);
    }

    clickInSelectPeriod() {
        const dailyBtnSelectPeriod = document.getElementById('dailyBtnSelectRecordPeriod');
        const weeklyBtnSelectPeriod = document.getElementById('weeklyBtnSelectRecordPeriod');
        const montlhyBtnSelectPeriod = document.getElementById('monthlyBtnSelectRecordPeriod');

        dailyBtnSelectPeriod.addEventListener('click', () => {
            this.handlePeriodRecords('DAILY');
        });

        weeklyBtnSelectPeriod.addEventListener('click', () => {
            this.handlePeriodRecords('WEEKLY');
        });

        montlhyBtnSelectPeriod.addEventListener('click', () => {
            this.handlePeriodRecords('MONTHLY');
        });
    }

    handlePeriodRecords(period) {
        const dailyBtnSelectPeriod = document.getElementById('dailyBtnSelectRecordPeriod');
        const weeklyBtnSelectPeriod = document.getElementById('weeklyBtnSelectRecordPeriod');
        const montlhyBtnSelectPeriod = document.getElementById('monthlyBtnSelectRecordPeriod');

        switch (period) {
            case 'DAILY':
                this.fecthPlayerRecord('DAILY');

                dailyBtnSelectPeriod.classList.add('selected');
                weeklyBtnSelectPeriod.classList.remove('selected');
                montlhyBtnSelectPeriod.classList.remove('selected');
                break;
            case 'WEEKLY':
                this.fecthPlayerRecord('WEEKLY');

                dailyBtnSelectPeriod.classList.remove('selected');
                weeklyBtnSelectPeriod.classList.add('selected');
                montlhyBtnSelectPeriod.classList.remove('selected');
                break;
            case 'MONTHLY':
                this.fecthPlayerRecord('MONTHLY');

                dailyBtnSelectPeriod.classList.remove('selected');
                weeklyBtnSelectPeriod.classList.remove('selected');
                montlhyBtnSelectPeriod.classList.add('selected');
                break;
            default:
                console.error('Period Invalid');
                break;
        }
    }
}

const playerProfaile = new Profile();
export default playerProfaile;
