const sdgData = [
    { goal: "No Poverty", progress: 85 },
    { goal: "Zero Hunger", progress: 80 },
    { goal: "Good Health and Well-being", progress: 90 },
    { goal: "Quality Education", progress: 88 },
    { goal: "Gender Equality", progress: 80 },
    { goal: "Clean Water and Sanitation", progress: 95 },
    { goal: "Affordable and Clean Energy", progress: 90 },
    { goal: "Decent Work and Economic Growth", progress: 85 },
    { goal: "Industry, Innovation and Infrastructure", progress: 75 },
    { goal: "Reduced Inequalities", progress: 80 },
    { goal: "Sustainable Cities and Communities", progress: 85 },
    { goal: "Responsible Consumption and Production", progress: 78 },
    { goal: "Climate Action", progress: 70 },
    { goal: "Life Below Water", progress: 65 },
    { goal: "Life on Land", progress: 75 },
    { goal: "Peace, Justice and Strong Institutions", progress: 90 },
    { goal: "Partnerships for the Goals", progress: 85 }
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
