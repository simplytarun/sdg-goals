const sdgData = [
    { goal: "No Poverty", progress: 60 },
    { goal: "Zero Hunger", progress: 65 },
    { goal: "Good Health and Well-being", progress: 70 },
    { goal: "Quality Education", progress: 75 },
    { goal: "Gender Equality", progress: 55 },
    { goal: "Clean Water and Sanitation", progress: 80 },
    { goal: "Affordable and Clean Energy", progress: 50 },
    { goal: "Decent Work and Economic Growth", progress: 60 },
    { goal: "Industry, Innovation and Infrastructure", progress: 55 },
    { goal: "Reduced Inequalities", progress: 50 },
    { goal: "Sustainable Cities and Communities", progress: 45 },
    { goal: "Responsible Consumption and Production", progress: 40 },
    { goal: "Climate Action", progress: 35 },
    { goal: "Life Below Water", progress: 30 },
    { goal: "Life on Land", progress: 25 },
    { goal: "Peace, Justice and Strong Institutions", progress: 65 },
    { goal: "Partnerships for the Goals", progress: 55 }
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