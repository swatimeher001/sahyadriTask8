// Chart configuration for Miles Statistics
const milesCtx = document.getElementById('milesChart').getContext('2d');
const milesChart = new Chart(milesCtx, {
    type: 'bar',
    data: {
        labels: ['1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM'],
        datasets: [{
            label: 'Miles',
            data: [157, 200, 256, 300, 350, 400],
            backgroundColor: '#4caf50',
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Chart configuration for Car Statistics
const carCtx = document.getElementById('carChart').getContext('2d');
const carChart = new Chart(carCtx, {
    type: 'line',
    data: {
        labels: ['7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM'],
        datasets: [{
            label: 'Car Usage',
            data: [50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
