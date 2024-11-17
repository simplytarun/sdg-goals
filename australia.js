const sdgData = [
    { goal: "No Poverty", progress: 75 },
    { goal: "Zero Hunger", progress: 60 },
    { goal: "Good Health and Well-being", progress: 80 },
    { goal: "Quality Education", progress: 70 },
    { goal: "Gender Equality", progress: 65 },
    { goal: "Clean Water and Sanitation", progress: 85 },
    { goal: "Affordable and Clean Energy", progress: 90 },
    { goal: "Decent Work and Economic Growth", progress: 70 },
    { goal: "Industry, Innovation and Infrastructure", progress: 75 },
    { goal: "Reduced Inequality", progress: 60 },
    { goal: "Sustainable Cities and Communities", progress: 80 },
    { goal: "Responsible Consumption and Production", progress: 70 },
    { goal: "Climate Action", progress: 65 },
    { goal: "Life Below Water", progress: 60 },
    { goal: "Life on Land", progress: 70 },
    { goal: "Peace, Justice and Strong Institutions", progress: 80 },
    { goal: "Partnerships for the Goals", progress: 75 }
];

function renderCharts() {
    const container = document.getElementById('charts-container');
    sdgData.forEach(data => {
        const chart = document.createElement('div');
        chart.style.width = `${data.progress}%`;
        chart.style.backgroundColor = '#007bff';
        chart.style.color = 'white';
        chart.style.padding = '10px';
        chart.style.margin = '5px 0';
        chart.innerText = `${data.goal}: ${data.progress}%`;
        container.appendChild(chart);
    });
}

document.addEventListener('DOMContentLoaded', renderCharts);