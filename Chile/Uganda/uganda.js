const sdgData = [
    { goal: "No Poverty", progress: 45 },
    { goal: "Zero Hunger", progress: 50 },
    { goal: "Good Health and Well-being", progress: 55 },
    { goal: "Quality Education", progress: 60 },
    { goal: "Gender Equality", progress: 55 },
    { goal: "Clean Water and Sanitation", progress: 50 },
    { goal: "Affordable and Clean Energy", progress: 45 },
    { goal: "Decent Work and Economic Growth", progress: 50 },
    { goal: "Industry, Innovation and Infrastructure", progress: 45 },
    { goal: "Reduced Inequalities", progress: 40 },
    { goal: "Sustainable Cities and Communities", progress: 45 },
    { goal: "Responsible Consumption and Production", progress: 40 },
    { goal: "Climate Action", progress: 45 },
    { goal: "Life Below Water", progress: 35 },
    { goal: "Life on Land", progress: 40 },
    { goal: "Peace, Justice and Strong Institutions", progress: 50 },
    { goal: "Partnerships for the Goals", progress: 55 }
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
