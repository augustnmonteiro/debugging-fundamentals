let divResultUser = document.querySelector('#resultUser')

function getUrl(username) {
    return `https://api.gith.com/users/${username}`;
}

document.querySelector('#btnSearchUser').addEventListener('click', () => {
    divResultUser.innerHTML = '';

    const username = document.getElementById('username').value;
    const url = getUrl(username);

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao acessar a API do GitHub');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            divResultUser.innerHTML = `
                <p>Username: ${data.login}</p>
                <p>Bio: ${data.bio}</p>
                <p>Name: ${data.name}</p>
                <p>Avatar: ${data.avatar_url}</p>
            `;
        })
        .catch(error => {
            console.error('Erro:', error);
        });
});

