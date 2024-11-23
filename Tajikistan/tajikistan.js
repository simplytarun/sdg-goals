const sdgData = [
    { goal: "No Poverty", progress: 40 },
    { goal: "Zero Hunger", progress: 35 },
    { goal: "Good Health and Well-being", progress: 45 },
    { goal: "Quality Education", progress: 50 },
    { goal: "Gender Equality", progress: 45 },
    { goal: "Clean Water and Sanitation", progress: 40 },
    { goal: "Affordable and Clean Energy", progress: 35 },
    { goal: "Decent Work and Economic Growth", progress: 40 },
    { goal: "Industry, Innovation and Infrastructure", progress: 35 },
    { goal: "Reduced Inequalities", progress: 30 },
    { goal: "Sustainable Cities and Communities", progress: 35 },
    { goal: "Responsible Consumption and Production", progress: 30 },
    { goal: "Climate Action", progress: 35 },
    { goal: "Life Below Water", progress: 25 },
    { goal: "Life on Land", progress: 30 },
    { goal: "Peace, Justice and Strong Institutions", progress: 40 },
    { goal: "Partnerships for the Goals", progress: 45 }
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
