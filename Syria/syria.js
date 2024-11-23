const sdgData = [
    { goal: "No Poverty", progress: 30 },
    { goal: "Zero Hunger", progress: 25 },
    { goal: "Good Health and Well-being", progress: 35 },
    { goal: "Quality Education", progress: 40 },
    { goal: "Gender Equality", progress: 30 },
    { goal: "Clean Water and Sanitation", progress: 25 },
    { goal: "Affordable and Clean Energy", progress: 20 },
    { goal: "Decent Work and Economic Growth", progress: 30 },
    { goal: "Industry, Innovation and Infrastructure", progress: 25 },
    { goal: "Reduced Inequalities", progress: 20 },
    { goal: "Sustainable Cities and Communities", progress: 25 },
    { goal: "Responsible Consumption and Production", progress: 20 },
    { goal: "Climate Action", progress: 25 },
    { goal: "Life Below Water", progress: 15 },
    { goal: "Life on Land", progress: 20 },
    { goal: "Peace, Justice and Strong Institutions", progress: 30 },
    { goal: "Partnerships for the Goals", progress: 35 }
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
