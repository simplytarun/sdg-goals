const sdgData = [
    { goal: "No Poverty", progress: 65 },
    { goal: "Zero Hunger", progress: 70 },
    { goal: "Good Health and Well-being", progress: 80 },
    { goal: "Quality Education", progress: 75 },
    { goal: "Gender Equality", progress: 60 },
    { goal: "Clean Water and Sanitation", progress: 85 },
    { goal: "Affordable and Clean Energy", progress: 50 },
    { goal: "Decent Work and Economic Growth", progress: 55 },
    { goal: "Industry, Innovation and Infrastructure", progress: 65 },
    { goal: "Reduced Inequalities", progress: 60 },
    { goal: "Sustainable Cities and Communities", progress: 55 },
    { goal: "Responsible Consumption and Production", progress: 45 },
    { goal: "Climate Action", progress: 40 },
    { goal: "Life Below Water", progress: 30 },
    { goal: "Life on Land", progress: 25 },
    { goal: "Peace, Justice and Strong Institutions", progress: 70 },
    { goal: "Partnerships for the Goals", progress: 60 }
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