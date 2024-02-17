class Ranking {
    constructor() {
        this.limit = 50;
        this.selectedPeriod = 'WEEKLY';
    }
    
    async getRanking(url) {
        console.log(url)
        if (!url) {
            throw new Error('URL is required');
        }

        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                if (response.status === 404) {
                    return null; 
                }
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching ranking:', error);
            throw error;
        }
    }

    createRanking(data) {
        const resultsUsersModal = document.getElementById('showRankingDiv');
        const tableHTML = document.createElement('table');
        
        tableHTML.innerHTML = '<tr><th>Position</th><th>Username</th><th>Score</th></tr>';
    
        if (!data || data.length === 0) {
            const noResultsMessage = document.createElement('tr');
            const noResultsCell = document.createElement('td');
            noResultsCell.setAttribute('colspan', '3');
            noResultsCell.textContent = 'No ranking available for the selected period';
            noResultsMessage.appendChild(noResultsCell);
            tableHTML.appendChild(noResultsMessage);
            document.getElementById('showMoreResults').style.display = 'none';
        } else {
            data.forEach((entry, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${index + 1}°</td><td>${entry.username}</td><td>${entry.score}</td>`;
                tableHTML.appendChild(row);
            });
    
            if (data.length < this.limit) {
                document.getElementById('showMoreResults').style.display = 'none';
            } else {
                document.getElementById('showMoreResults').style.display = 'block';
            }
        }
    
        
        resultsUsersModal.innerHTML = '';
        resultsUsersModal.appendChild(tableHTML);
    }
    
    

    getSelectedPeriod() {
        let selectedValue = document.getElementById("selectPeriodRanking").value;
        return selectedValue;
    }

    async handlePeriodChange(periodRanking, limit) {
        this.selectedPeriod = periodRanking;
        
        try {
            const urlRanking = `http://localhost:8180/users/game/rank/${periodRanking}?limit=${limit}`;
            console.log(urlRanking);
            
            const data = await this.getRanking(urlRanking);
            
            if (!data || data.length === 0) {
                document.getElementById('showRankingDiv').style.display = 'none';
                document.getElementById('showMoreResults').style.display = 'none';
            } else {
                document.getElementById('showRankingDiv').style.display = 'block';
                document.getElementById('btnsPeriodRanking').style.display = 'block';
                document.getElementById('showMoreResults').style.display = 'block';
                this.createRanking(data?.ranking); 
            }
        } catch (error) {
            console.error(error);
            document.getElementById('showRankingDiv').style.display = 'none';
        }
    }
    
    
    
    clearPreviousResults() {
        const resultsUsersModal = document.getElementById('resultsUsersModal');
        resultsUsersModal.innerHTML = '';
    }
    
    initialize() {
        const btnDailyRanking = document.querySelector('#btnDailyRanking');
        const btnWeeklyRanking = document.querySelector('btnWeeklyRanking');
        const btnMonthlyRanking = document.querySelector('#btnMonthlyRanking');
        const btnShowMoreResults = document.querySelector('#showMoreResults');
    
        const applyStyle = (selectedButton) => {
            const buttons = [btnDailyRanking, btnWeeklyRanking, btnMonthlyRanking];
            buttons.forEach(button => {
                if (button === selectedButton) {
                    button.style.backgroundColor = '#00deffc7';
                    button.style.color = '#383939';
                } else {
                    button.style.backgroundColor = '';
                    button.style.color = '';
                }
            });
        };
    
        btnDailyRanking.addEventListener('click', () => {
            this.clearPreviousResults();
            this.limit = 50;
            this.handlePeriodChange('DAILY', this.limit); 
            applyStyle(btnDailyRanking);
        });
    
        btnWeeklyRanking.addEventListener('click', () => {
            this.clearPreviousResults();
            this.limit = 50;
            this.handlePeriodChange('WEEKLY', this.limit); 
            applyStyle(btnWeeklyRanking);
        });
    
        btnMonthlyRanking.addEventListener('click', () => {
            this.clearPreviousResults();
            this.limit = 50;
            this.handlePeriodChange('MONTHLY', this.limit); 
            applyStyle(btnMonthlyRanking);
        });
    
        btnShowMoreResults.addEventListener('click', () => {
            this.limit += 50;
            this.handlePeriodChange(this.selectedPeriod, this.limit);
            
        });
    
        btnWeeklyRanking.click();
    }
    
}

const ranking = new Ranking();
export default ranking;
