const sdgData = [
    { goal: "No Poverty", progress: 95 },
    { goal: "Zero Hunger", progress: 90 },
    { goal: "Good Health and Well-being", progress: 95 },
    { goal: "Quality Education", progress: 98 },
    { goal: "Gender Equality", progress: 85 },
    { goal: "Clean Water and Sanitation", progress: 100 },
    { goal: "Affordable and Clean Energy", progress: 92 },
    { goal: "Decent Work and Economic Growth", progress: 90 },
    { goal: "Industry, Innovation and Infrastructure", progress: 90 },
    { goal: "Reduced Inequalities", progress: 85 },
    { goal: "Sustainable Cities and Communities", progress: 88 },
    { goal: "Responsible Consumption and Production", progress: 80 },
    { goal: "Climate Action", progress: 75 },
    { goal: "Life Below Water", progress: 70 },
    { goal: "Life on Land", progress: 80 },
    { goal: "Peace, Justice and Strong Institutions", progress: 90 },
    { goal: "Partnerships for the Goals", progress: 92 }
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
