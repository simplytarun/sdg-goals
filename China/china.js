const sdgData = [
    { goal: "No Poverty", progress: 94 },
    { goal: "Zero Hunger", progress: 90 },
    { goal: "Good Health and Well-being", progress: 85 },
    { goal: "Quality Education", progress: 88 },
    { goal: "Gender Equality", progress: 70 },
    { goal: "Clean Water and Sanitation", progress: 95 },
    { goal: "Affordable and Clean Energy", progress: 92 },
    { goal: "Decent Work and Economic Growth", progress: 88 },
    { goal: "Industry, Innovation and Infrastructure", progress: 90 },
    { goal: "Reduced Inequalities", progress: 80 },
    { goal: "Sustainable Cities and Communities", progress: 78 },
    { goal: "Responsible Consumption and Production", progress: 75 },
    { goal: "Climate Action", progress: 72 },
    { goal: "Life Below Water", progress: 65 },
    { goal: "Life on Land", progress: 70 },
    { goal: "Peace, Justice and Strong Institutions", progress: 75 },
    { goal: "Partnerships for the Goals", progress: 88 }
];

function renderCharts() {
    const container = document.getElementById('charts-container');
    sdgData.forEach(data => {
        const progressBarContainer = document.createElement('div');
        progressBarContainer.className = 'progress-bar-container';

        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.style.width = `${data.progress}%`;
        progressBar.innerText = `${data.goal}: ${data.progress}%`;

        progressBarContainer.appendChild(progressBar);
        container.appendChild(progressBarContainer);
    });
}

document.addEventListener('DOMContentLoaded', renderCharts);
