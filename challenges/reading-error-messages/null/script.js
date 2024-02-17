function calculateMultiplicationTable() {
            let number = document.getElementById('numbe').value;

            document.getElementById('tableResult').innerHTML = '';
            if (number !== '') {
                for (let i = 1; i <= 10; i++) {
                    let result = number * i;

                    let listItem = document.createElement('li');
                    listItem.textContent = `${number} x ${i} = ${result}`;

                    document.getElementById('tableResult').appendChild(listItem);
                }
            } else {
                alert('Please, enter a number!');
            }
        }

document.querySelector('#multiply').addEventListener('click', () => {
    calculateMultiplicationTable()
})        