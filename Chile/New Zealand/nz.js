const sdgData = [
    { goal: "No Poverty", progress: 90 },
    { goal: "Zero Hunger", progress: 85 },
    { goal: "Good Health and Well-being", progress: 95 },
    { goal: "Quality Education", progress: 95 },
    { goal: "Gender Equality", progress: 90 },
    { goal: "Clean Water and Sanitation", progress: 95 },
    { goal: "Affordable and Clean Energy", progress: 90 },
    { goal: "Decent Work and Economic Growth", progress: 90 },
    { goal: "Industry, Innovation and Infrastructure", progress: 90 },
    { goal: "Reduced Inequalities", progress: 85 },
    { goal: "Sustainable Cities and Communities", progress: 90 },
    { goal: "Responsible Consumption and Production", progress: 85 },
    { goal: "Climate Action", progress: 90 },
    { goal: "Life Below Water", progress: 80 },
    { goal: "Life on Land", progress: 85 },
    { goal: "Peace, Justice and Strong Institutions", progress: 95 },
    { goal: "Partnerships for the Goals", progress: 95 }
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
