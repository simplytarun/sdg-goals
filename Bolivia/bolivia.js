const sdgData = [
    { goal: "No Poverty", progress: 65 },
    { goal: "Zero Hunger", progress: 60 },
    { goal: "Good Health and Well-being", progress: 70 },
    { goal: "Quality Education", progress: 75 },
    { goal: "Gender Equality", progress: 68 },
    { goal: "Clean Water and Sanitation", progress: 80 },
    { goal: "Affordable and Clean Energy", progress: 75 },
    { goal: "Decent Work and Economic Growth", progress: 65 },
    { goal: "Industry, Innovation and Infrastructure", progress: 62 },
    { goal: "Reduced Inequalities", progress: 60 },
    { goal: "Sustainable Cities and Communities", progress: 63 },
    { goal: "Responsible Consumption and Production", progress: 55 },
    { goal: "Climate Action", progress: 58 },
    { goal: "Life Below Water", progress: 50 },
    { goal: "Life on Land", progress: 52 },
    { goal: "Peace, Justice and Strong Institutions", progress: 65 },
    { goal: "Partnerships for the Goals", progress: 70 }
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
