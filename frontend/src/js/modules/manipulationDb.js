import sharedVariables from "./sharedVariables.js";

class ManipulationBD {
    
    enviarDadosBd() {
        const username = localStorage.getItem('nameUser');
        const score = sharedVariables.pontos;
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
                    throw new Error(`Erro na requisição: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                console.log('Resposta do servidor:', data);
            })
            .catch(error => {
                console.error('Erro ao enviar dados para o servidor:', error);
            });
    }
}

export default ManipulationBD;