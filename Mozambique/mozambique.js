const sdgData = [
    { goal: "No Poverty", progress: 50 },
    { goal: "Zero Hunger", progress: 45 },
    { goal: "Good Health and Well-being", progress: 55 },
    { goal: "Quality Education", progress: 60 },
    { goal: "Gender Equality", progress: 50 },
    { goal: "Clean Water and Sanitation", progress: 55 },
    { goal: "Affordable and Clean Energy", progress: 50 },
    { goal: "Decent Work and Economic Growth", progress: 60 },
    { goal: "Industry, Innovation and Infrastructure", progress: 50 },
    { goal: "Reduced Inequalities", progress: 45 },
    { goal: "Sustainable Cities and Communities", progress: 50 },
    { goal: "Responsible Consumption and Production", progress: 45 },
    { goal: "Climate Action", progress: 50 },
    { goal: "Life Below Water", progress: 40 },
    { goal: "Life on Land", progress: 45 },
    { goal: "Peace, Justice and Strong Institutions", progress: 55 },
    { goal: "Partnerships for the Goals", progress: 60 }
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