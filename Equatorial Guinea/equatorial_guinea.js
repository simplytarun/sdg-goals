const sdgData = [
    { goal: "No Poverty", progress: 55 },
    { goal: "Zero Hunger", progress: 50 },
    { goal: "Good Health and Well-being", progress: 60 },
    { goal: "Quality Education", progress: 65 },
    { goal: "Gender Equality", progress: 60 },
    { goal: "Clean Water and Sanitation", progress: 65 },
    { goal: "Affordable and Clean Energy", progress: 60 },
    { goal: "Decent Work and Economic Growth", progress: 58 },
    { goal: "Industry, Innovation and Infrastructure", progress: 55 },
    { goal: "Reduced Inequalities", progress: 52 },
    { goal: "Sustainable Cities and Communities", progress: 55 },
    { goal: "Responsible Consumption and Production", progress: 50 },
    { goal: "Climate Action", progress: 55 },
    { goal: "Life Below Water", progress: 45 },
    { goal: "Life on Land", progress: 55 },
    { goal: "Peace, Justice and Strong Institutions", progress: 60 },
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
