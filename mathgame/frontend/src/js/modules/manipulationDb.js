import sharedVariables from "./sharedVariables.js";

class ManipulationDB{
    
    sendMatchDataDB() {
        try {
            const username = localStorage.getItem('nameUser');
            const score = sharedVariables.points;
            const round = sharedVariables.rounds;
            const level = sharedVariables.levels;
    
            const dados = { username, score, round, level };
    
            fetch('http://localhost:8180/users/insertUsers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Request error: ${response.statusText}`);
                    }
                    return response.text();
                })
                .then(data => {
                    console.log(`Server Response: ${data}`);
                })
                .catch(error => {
                    console.error(`Error sending data to the server: ${error}`);
                });
        } catch (error) {
            console.error(`Error when handling data to send to the server: ${error}`);
        }
    }
}

const manipulationBD = new ManipulationDB();
export default manipulationBD;