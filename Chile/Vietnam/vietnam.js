const sdgData = [
    { goal: "No Poverty", progress: 70 },
    { goal: "Zero Hunger", progress: 65 },
    { goal: "Good Health and Well-being", progress: 75 },
    { goal: "Quality Education", progress: 80 },
    { goal: "Gender Equality", progress: 70 },
    { goal: "Clean Water and Sanitation", progress: 75 },
    { goal: "Affordable and Clean Energy", progress: 70 },
    { goal: "Decent Work and Economic Growth", progress: 75 },
    { goal: "Industry, Innovation and Infrastructure", progress: 70 },
    { goal: "Reduced Inequalities", progress: 65 },
    { goal: "Sustainable Cities and Communities", progress: 70 },
    { goal: "Responsible Consumption and Production", progress: 65 },
    { goal: "Climate Action", progress: 70 },
    { goal: "Life Below Water", progress: 60 },
    { goal: "Life on Land", progress: 65 },
    { goal: "Peace, Justice and Strong Institutions", progress: 75 },
    { goal: "Partnerships for the Goals", progress: 80 }
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
