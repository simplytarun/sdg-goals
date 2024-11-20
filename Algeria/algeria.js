const sdgData = [
    { goal: "No Poverty", progress: 55 },
    { goal: "Zero Hunger", progress: 52 },
    { goal: "Good Health and Well-being", progress: 70 },
    { goal: "Quality Education", progress: 75 },
    { goal: "Gender Equality", progress: 65 },
    { goal: "Clean Water and Sanitation", progress: 75 },
    { goal: "Affordable and Clean Energy", progress: 70 },
    { goal: "Decent Work and Economic Growth", progress: 65 },
    { goal: "Industry, Innovation and Infrastructure", progress: 60 },
    { goal: "Reduced Inequalities", progress: 58 },
    { goal: "Sustainable Cities and Communities", progress: 60 },
    { goal: "Responsible Consumption and Production", progress: 55 },
    { goal: "Climate Action", progress: 52 },
    { goal: "Life Below Water", progress: 50 },
    { goal: "Life on Land", progress: 60 },
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
