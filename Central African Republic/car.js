const sdgData = [
    { goal: "No Poverty", progress: 30 },
    { goal: "Zero Hunger", progress: 25 },
    { goal: "Good Health and Well-being", progress: 40 },
    { goal: "Quality Education", progress: 35 },
    { goal: "Gender Equality", progress: 30 },
    { goal: "Clean Water and Sanitation", progress: 45 },
    { goal: "Affordable and Clean Energy", progress: 40 },
    { goal: "Decent Work and Economic Growth", progress: 38 },
    { goal: "Industry, Innovation and Infrastructure", progress: 32 },
    { goal: "Reduced Inequalities", progress: 28 },
    { goal: "Sustainable Cities and Communities", progress: 33 },
    { goal: "Responsible Consumption and Production", progress: 27 },
    { goal: "Climate Action", progress: 30 },
    { goal: "Life Below Water", progress: 25 },
    { goal: "Life on Land", progress: 35 },
    { goal: "Peace, Justice and Strong Institutions", progress: 20 },
    { goal: "Partnerships for the Goals", progress: 40 }
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
