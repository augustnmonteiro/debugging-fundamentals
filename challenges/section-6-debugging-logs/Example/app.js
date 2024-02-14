function CalculateMultiplicationTable(number) {
    let table = '<table border="1">';

    for (let i = 1; i <= number; i++) {
        table += '<tr>';
        for (let j = 1; j <= 10; j++) {
            table += `<td ${i} x ${j} = ${i * j}</td>`;
        }
        table += '</tr>';
    }

    table += '</table>';
    return table;
}

function viewTable() {
    const number = parseInt(document.getElementById('number').value);
    const multiplicationTable = document.getElementById('multiplicationTable');
    if (isNaN(number)) {
        multiplicationTable.innerHTML = CalculateMultiplicationTable(number);
    } else {
        multiplicationTable.innerHTML = "Please enter a valid number.";
    }
}
document.querySelector('#generateTable').addEventListener('click', viewTable());