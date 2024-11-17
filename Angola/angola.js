const sdgData = [
    { goal: "No Poverty", progress: 70 },
    { goal: "Zero Hunger", progress: 60 },
    { goal: "Good Health and Well-being", progress: 75 },
    { goal: "Quality Education", progress: 65 },
    { goal: "Gender Equality", progress: 50 },
    { goal: "Clean Water and Sanitation", progress: 55 },
    { goal: "Affordable and Clean Energy", progress: 40 },
    { goal: "Decent Work and Economic Growth", progress: 45 },
    { goal: "Industry, Innovation and Infrastructure", progress: 30 },
    { goal: "Reduced Inequalities", progress: 35 },
    { goal: "Sustainable Cities and Communities", progress: 25 },
    { goal: "Responsible Consumption and Production", progress: 20 },
    { goal: "Climate Action", progress: 15 },
    { goal: "Life Below Water", progress: 10 },
    { goal: "Life on Land", progress: 5 },
    { goal: "Peace, Justice and Strong Institutions", progress: 50 },
    { goal: "Partnerships for the Goals", progress: 40 }
];

function renderCharts() {
    const container = document.getElementById('charts-container');
    sdgData.forEach(data => {
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.style.width = `${data.progress}%`;
        progressBar.innerText = `${data.goal}: ${data.progress}%`;
        container.appendChild(progressBar);
    });
}

document.addEventListener('DOMContentLoaded', renderCharts);