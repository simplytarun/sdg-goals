const sdgData = [
    { goal: "No Poverty", progress: 50 },
    { goal: "Zero Hunger", progress: 45 },
    { goal: "Good Health and Well-being", progress: 55 },
    { goal: "Quality Education", progress: 60 },
    { goal: "Gender Equality", progress: 50 },
    { goal: "Clean Water and Sanitation", progress: 40 },
    { goal: "Affordable and Clean Energy", progress: 30 },
    { goal: "Decent Work and Economic Growth", progress: 35 },
    { goal: "Industry, Innovation and Infrastructure", progress: 25 },
    { goal: "Reduced Inequalities", progress: 30 },
    { goal: "Sustainable Cities and Communities", progress: 20 },
    { goal: "Responsible Consumption and Production", progress: 15 },
    { goal: "Climate Action", progress: 10 },
    { goal: "Life Below Water", progress: 5 },
    { goal: "Life on Land", progress: 10 },
    { goal: "Peace, Justice and Strong Institutions", progress: 40 },
    { goal: "Partnerships for the Goals", progress: 30 }
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