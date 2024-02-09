import sharedVariables from "./sharedVariables.js";

class RecordChecker {

    generateConfetti() {
        const container = document.getElementById('confettiContainer');
        const colors = ['#f00', '#0f0', '#00f', '#ff0']; 
    
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's'; 
            container.appendChild(confetti);
    
            setTimeout(() => {
                container.removeChild(confetti);
            }, 5000); 
        }
    }

    async getRecord() {
        try {
            const urlAPI = `http://localhost:8180/game/${sharedVariables.nameUser}/record/DAILY`;
            const response = await fetch(urlAPI);
            if (!response.ok) {
                throw new Error('Failed to fetch record data');
            }

            const data = await response.json();

            let divRecordUser = document.querySelector('#recordUser');
            divRecordUser.innerHTML = '';
            console.log(data.dataRecordPlayer[0].max_score);

            if (data.dataRecordPlayer && data.dataRecordPlayer.length > 0) {
                const maxScore = data.dataRecordPlayer[0].max_score;
                if (maxScore === null) {
                    console.log('No record available. You set the first score.');
                    return 0;
                } else if (sharedVariables.points > maxScore) {
                    sharedVariables.UserSetANewRecord = true;
                    const p = document.createElement('p');
                    const msgNewRecord = `
                        Congratulations you have set a new score record.
                        '\n'New Score: ${sharedVariables.points}.
                    `;
                    p.textContent = `${msgNewRecord}`;
                    this.generateConfetti()
                    document.querySelector("#modalAlertResults").style.display = 'none'

                    divRecordUser.appendChild(p);
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