const sdgData = [
    { goal: "No Poverty", progress: 60 },
    { goal: "Zero Hunger", progress: 55 },
    { goal: "Good Health and Well-being", progress: 65 },
    { goal: "Quality Education", progress: 70 },
    { goal: "Gender Equality", progress: 65 },
    { goal: "Clean Water and Sanitation", progress: 60 },
    { goal: "Affordable and Clean Energy", progress: 65 },
    { goal: "Decent Work and Economic Growth", progress: 70 },
    { goal: "Industry, Innovation and Infrastructure", progress: 65 },
    { goal: "Reduced Inequalities", progress: 60 },
    { goal: "Sustainable Cities and Communities", progress: 65 },
    { goal: "Responsible Consumption and Production", progress: 60 },
    { goal: "Climate Action", progress: 65 },
    { goal: "Life Below Water", progress: 55 },
    { goal: "Life on Land", progress: 60 },
    { goal: "Peace, Justice and Strong Institutions", progress: 70 },
    { goal: "Partnerships for the Goals", progress: 75 }
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
