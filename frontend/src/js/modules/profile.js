class Profile {
    async getRecord(username, period) {
        try {
            const urlAPI = `http://localhost:8180/game/${username}/record/${period}`;
            const response = await fetch(urlAPI);
            if (!response.ok) {
                throw new Error('Failed to fetch record data');
            }
            const data = await response.json();

            // Verificando e definindo valores padrão caso sejam nulos
            const recordPlayer = data.dataRecordPlayer[0];
            const maxScore = recordPlayer.max_score !== null ? recordPlayer.max_score : 0;
            const maxLevel = recordPlayer.max_level !== null ? recordPlayer.max_level : 0;
            const maxRound = recordPlayer.max_round !== null ? recordPlayer.max_round : 0;
            const totalScore = recordPlayer.total_score !== null ? recordPlayer.total_score : 0;
            const totalRoundsPlayed = recordPlayer.total_rounds_played !== null ? recordPlayer.total_rounds_played : 0;

            const recordDiv = document.getElementById('record');
            recordDiv.innerHTML = '';
            const createElementHtml = `
                <p>Record Score: ${maxScore}</p>
                <p>Record Level: ${maxLevel}</p>
                <p>Record Round: ${maxRound}</p>
                <p>Total Score: ${totalScore}</p>
                <p>Total Rounds: ${totalRoundsPlayed}</p>
            `;
            recordDiv.innerHTML += createElementHtml;
            console.log(data);
        } catch(error) {
            console.log(error);
        }
    }
}

const playerProfaile = new Profile();
export default playerProfaile;
