// Assuming you have added Chart.js through a CDN in your HTML
// Mock data for the sake of example:

const visitsData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'Site Visits',
        data: [1000, 1250, 1080, 1500, 1400, 1550],
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66, 165, 245, 0.5)',
        fill: true,
    }]
};

const conversionRateData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'Conversion Rate',
        data: [2, 2.5, 2.3, 2.7, 2.9, 3.1],
        borderColor: '#66BB6A',
        backgroundColor: 'rgba(102, 187, 106, 0.5)',
        fill: true,
    }]
};

const configVisits = {
    type: 'line',
    data: visitsData,
    options: {}
};

const configConversionRate = {
    type: 'line',
    data: conversionRateData,
    options: {}
};

const visitsChart = new Chart(
    document.getElementById('visitsChart'),
    configVisits
);

const conversionRateChart = new Chart(
    document.getElementById('conversionRateChart'),
    configConversionRate
);
