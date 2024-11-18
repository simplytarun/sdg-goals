document.addEventListener('DOMContentLoaded', function() {
    const sdgList = document.getElementById('sdg-list');

    const sdgs = [
        { number: 1, title: "No Poverty", progress: "Significant progress in reducing poverty, but challenges remain." },
        { number: 2, title: "Zero Hunger", progress: "Improvement in food security, but malnutrition persists." },
        { number: 3, title: "Good Health and Well-being", progress: "Challenges remain in maternal and child health." },
        { number: 4, title: "Quality Education", progress: "Access to education has improved, but quality remains a concern." },
        { number: 5, title: "Gender Equality", progress: "Progress in women's rights, but gender-based violence is still an issue." },
        { number: 6, title: "Clean Water and Sanitation", progress: "Access to clean water has improved, but sanitation facilities are lacking." },
        { number: 7, title: "Affordable and Clean Energy", progress: "Efforts to increase access to electricity are ongoing." },
        { number: 8, title: "Decent Work and Economic Growth", progress: "Economic growth is steady, but job creation is insufficient." },
        { number: 9, title: "Industry, Innovation and Infrastructure", progress: "Investment in infrastructure is needed to support industrial growth." },
        { number: 10, title: "Reduced Inequalities", progress: "Inequality remains a challenge, particularly in rural areas." },
        { number: 11, title: "Sustainable Cities and Communities", progress: "Urbanization is increasing, but sustainable planning is needed." },
        { number: 12, title: "Responsible Consumption and Production", progress: "Awareness of sustainable practices is growing." },
        { number: 13, title: "Climate Action", progress: "Climate change impacts are being felt, and adaptation strategies are needed." },
        { number: 14, title: "Life Below Water", progress: "Marine resources are under threat, and conservation efforts are required." },
        { number: 15, title: "Life on Land", progress: "Deforestation and land degradation are significant challenges." },
        { number: 16, title: "Peace, Justice and Strong Institutions", progress: "Efforts to strengthen institutions are ongoing, but challenges remain." },
        { number: 17, title: "Partnerships for the Goals", progress: "International cooperation is essential for achieving the SDGs." }
    ];

    sdgs.forEach(sdg => {
        const sdgItem = document.createElement('div');
        sdgItem.innerHTML = `<h3>SDG ${sdg.number}: ${sdg.title}</h3><p>${sdg.progress}</p>`;
        sdgList.appendChild(sdgItem);
    });
});