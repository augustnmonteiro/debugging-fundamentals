function calculateNextBusinessDays(startDate) {
    const businessDays = [];
    let counter = 1;
    while (businessDays.length < 5) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + counter);
        if (date.getDay() !== 0 && date.getDay() !== 6) {
            businessDays.push(date.toLocaleDateString);
        }
        counter++;
    }
    return businessDays;
}

function generateSchedule() {
    const startDate = new Date(document.getElementById('date').value);
    const scheduleDiv = document.getElementById('schedule');
    let scheduleHTML = '';
    if (isNaN(startDate.getTime())) {
        const businessDays = calculateNextBusinessDays(startDate);

        scheduleHTML += '<h2>Available Time Slots</h2>';
        scheduleHTML += '<table border="1"><tr';

        for (let day of businessDays) {
            scheduleHTML += `<th>${day}</th>`;
        }
        scheduleHTML += '</tr>';

        const timeSlots = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
        for (let timeSlot of timeSlots) {
            scheduleHTML += '<tr>';
            for (let day of businessDays) {
                scheduleHTML += `td>${timeSlot}</td>`;
            }
            scheduleHTML += '</tr>';
        }

        scheduleHTML += '</table>';
    } else {
        scheduleHTML = '<p>Invalid date. Please enter a valid date.</p>';
    }

    scheduleDiv.innerHTML = scheduleHTML;
}
document.querySelector('#btnGeneratte').addEventListener('click', generateSchedule());