const sdgData = [
    { goal: "No Poverty", progress: 25 },
    { goal: "Zero Hunger", progress: 20 },
    { goal: "Good Health and Well-being", progress: 30 },
    { goal: "Quality Education", progress: 35 },
    { goal: "Gender Equality", progress: 25 },
    { goal: "Clean Water and Sanitation", progress: 40 },
    { goal: "Affordable and Clean Energy", progress: 35 },
    { goal: "Decent Work and Economic Growth", progress: 30 },
    { goal: "Industry, Innovation and Infrastructure", progress: 28 },
    { goal: "Reduced Inequalities", progress: 22 },
    { goal: "Sustainable Cities and Communities", progress: 30 },
    { goal: "Responsible Consumption and Production", progress: 25 },
    { goal: "Climate Action", progress: 27 },
    { goal: "Life Below Water", progress: 20 },
    { goal: "Life on Land", progress: 30 },
    { goal: "Peace, Justice and Strong Institutions", progress: 18 },
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
