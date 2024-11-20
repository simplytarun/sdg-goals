const sdgData = [
    { goal: "No Poverty", progress: 75 },
    { goal: "Zero Hunger", progress: 70 },
    { goal: "Good Health and Well-being", progress: 80 },
    { goal: "Quality Education", progress: 85 },
    { goal: "Gender Equality", progress: 78 },
    { goal: "Clean Water and Sanitation", progress: 88 },
    { goal: "Affordable and Clean Energy", progress: 90 },
    { goal: "Decent Work and Economic Growth", progress: 75 },
    { goal: "Industry, Innovation and Infrastructure", progress: 68 },
    { goal: "Reduced Inequalities", progress: 72 },
    { goal: "Sustainable Cities and Communities", progress: 75 },
    { goal: "Responsible Consumption and Production", progress: 70 },
    { goal: "Climate Action", progress: 65 },
    { goal: "Life Below Water", progress: 60 },
    { goal: "Life on Land", progress: 80 },
    { goal: "Peace, Justice and Strong Institutions", progress: 85 },
    { goal: "Partnerships for the Goals", progress: 78 }
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
