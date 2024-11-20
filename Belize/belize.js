const sdgData = [
    { goal: "No Poverty", progress: 65 },
    { goal: "Zero Hunger", progress: 60 },
    { goal: "Good Health and Well-being", progress: 75 },
    { goal: "Quality Education", progress: 80 },
    { goal: "Gender Equality", progress: 70 },
    { goal: "Clean Water and Sanitation", progress: 85 },
    { goal: "Affordable and Clean Energy", progress: 80 },
    { goal: "Decent Work and Economic Growth", progress: 70 },
    { goal: "Industry, Innovation and Infrastructure", progress: 65 },
    { goal: "Reduced Inequality", progress: 55 },
    { goal: "Sustainable Cities and Communities", progress: 75 },
    { goal: "Responsible Consumption and Production", progress: 70 },
    { goal: "Climate Action", progress: 60 },
    { goal: "Life Below Water", progress: 65 },
    { goal: "Life on Land", progress: 70 },
    { goal: "Peace, Justice and Strong Institutions", progress: 75 },
    { goal: "Partnerships for the Goals", progress: 70 }
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