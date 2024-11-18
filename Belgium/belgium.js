const sdgData = [
    { goal: "No Poverty", progress: 70 },
    { goal: "Zero Hunger", progress: 65 },
    { goal: "Good Health and Well-being", progress: 80 },
    { goal: "Quality Education", progress: 85 },
    { goal: "Gender Equality", progress: 75 },
    { goal: "Clean Water and Sanitation", progress: 90 },
    { goal: "Affordable and Clean Energy", progress: 70 },
    { goal: "Decent Work and Economic Growth", progress: 60 },
    { goal: "Industry, Innovation and Infrastructure", progress: 75 },
    { goal: "Reduced Inequalities", progress: 65 },
    { goal: "Sustainable Cities and Communities", progress: 70 },
    { goal: "Responsible Consumption and Production", progress: 60 },
    { goal: "Climate Action", progress: 55 },
    { goal: "Life Below Water", progress: 50 },
    { goal: "Life on Land", progress: 60 },
    { goal: "Peace, Justice and Strong Institutions", progress: 80 },
    { goal: "Partnerships for the Goals", progress: 70 }
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