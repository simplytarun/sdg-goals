const sdgData = [
    { goal: "No Poverty", progress: 90 },
    { goal: "Zero Hunger", progress: 88 },
    { goal: "Good Health and Well-being", progress: 92 },
    { goal: "Quality Education", progress: 95 },
    { goal: "Gender Equality", progress: 85 },
    { goal: "Clean Water and Sanitation", progress: 98 },
    { goal: "Affordable and Clean Energy", progress: 90 },
    { goal: "Decent Work and Economic Growth", progress: 88 },
    { goal: "Industry, Innovation and Infrastructure", progress: 80 },
    { goal: "Reduced Inequalities", progress: 82 },
    { goal: "Sustainable Cities and Communities", progress: 85 },
    { goal: "Responsible Consumption and Production", progress: 75 },
    { goal: "Climate Action", progress: 78 },
    { goal: "Life Below Water", progress: 80 },
    { goal: "Life on Land", progress: 82 },
    { goal: "Peace, Justice and Strong Institutions", progress: 88 },
    { goal: "Partnerships for the Goals", progress: 90 }
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
