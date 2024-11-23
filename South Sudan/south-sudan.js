const sdgData = [
    { goal: "No Poverty", progress: 35 },
    { goal: "Zero Hunger", progress: 30 },
    { goal: "Good Health and Well-being", progress: 40 },
    { goal: "Quality Education", progress: 45 },
    { goal: "Gender Equality", progress: 35 },
    { goal: "Clean Water and Sanitation", progress: 30 },
    { goal: "Affordable and Clean Energy", progress: 25 },
    { goal: "Decent Work and Economic Growth", progress: 35 },
    { goal: "Industry, Innovation and Infrastructure", progress: 30 },
    { goal: "Reduced Inequalities", progress: 25 },
    { goal: "Sustainable Cities and Communities", progress: 30 },
    { goal: "Responsible Consumption and Production", progress: 25 },
    { goal: "Climate Action", progress: 40 },
    { goal: "Life Below Water", progress: 20 },
    { goal: "Life on Land", progress: 30 },
    { goal: "Peace, Justice and Strong Institutions", progress: 40 },
    { goal: "Partnerships for the Goals", progress: 50 }
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
