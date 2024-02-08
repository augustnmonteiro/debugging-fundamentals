import sharedVariables from "./sharedVariables.js";

class RecordChecker {
    
    async getRecord() {
        try {
            const urlAPI = `http://localhost:8180/game/${sharedVariables.nameUser}/record/DAILY`;
            const response = await fetch(urlAPI);
            if (!response.ok) {
                throw new Error('Failed to fetch record data');
            }

            const data = await response.json();
            console.log(data);

            let divRecordUser = document.querySelector('#recordUser');
            console.log(data.dataRecordPlayer[0].max_score);

            if (data.dataRecordPlayer && data.dataRecordPlayer.length > 0) {
                const maxScore = data.dataRecordPlayer[0].max_score;
                console.log(maxScore)
                if (maxScore === null) {
                    console.log('No record available. You set the first score.');
                    return 0;
                } else if (sharedVariables.points > maxScore) {
                    const msgNewRecord = `Congratulations you have set a new score record:\n new score record: ${currentPoints}`;
                    document.querySelector("#modalAlertResults").style.display = 'none'

                    divRecordUser.innerHTML += `${msgNewRecord}`;
                    console.log(msgNewRecord);
                    return maxScore;
                } else {
                    console.log('You did not beat the record.');
                    return maxScore;
                }
            } else {
                console.log('No record available. You set the first score.');
                return 0;
            }
        } catch (error) {
            console.error('Error fetching record data:', error);
            throw error;
        }
    }
}

const recordPlayers = new RecordChecker();
export default recordPlayers;