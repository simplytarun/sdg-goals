const sdgData = [
    { goal: "No Poverty", progress: 70 },
    { goal: "Zero Hunger", progress: 68 },
    { goal: "Good Health and Well-being", progress: 75 },
    { goal: "Quality Education", progress: 80 },
    { goal: "Gender Equality", progress: 72 },
    { goal: "Clean Water and Sanitation", progress: 85 },
    { goal: "Affordable and Clean Energy", progress: 78 },
    { goal: "Decent Work and Economic Growth", progress: 70 },
    { goal: "Industry, Innovation and Infrastructure", progress: 65 },
    { goal: "Reduced Inequalities", progress: 68 },
    { goal: "Sustainable Cities and Communities", progress: 70 },
    { goal: "Responsible Consumption and Production", progress: 63 },
    { goal: "Climate Action", progress: 60 },
    { goal: "Life Below Water", progress: 55 },
    { goal: "Life on Land", progress: 58 },
    { goal: "Peace, Justice and Strong Institutions", progress: 65 },
    { goal: "Partnerships for the Goals", progress: 75 }
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
