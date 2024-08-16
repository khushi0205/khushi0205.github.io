const ctx = document.getElementById('skillsChart').getContext('2d');

// Create a gradient for the bars
function createGradient(ctx, chartArea) {
  const gradient = ctx.createLinearGradient(
    0,
    chartArea.top,
    0,
    chartArea.bottom
  );
  gradient.addColorStop(0, 'rgba(55, 20, 255, 0.7)');
  gradient.addColorStop(0.5, 'rgba(255, 0, 200, 0.7)');
  gradient.addColorStop(1, 'rgba(255, 255, 0, 0.7)');
  return gradient;
}

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Python', 'Excel', 'Machine Learning', 'SQL', 'Data Analysis/Visualisation'],
    datasets: [{
      label: 'Skill Level (out of 10)',
      data: [8, 7.5, 9, 7, 8], // Replace with your skill levels
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      backgroundColor: (context) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) return 'rgba(255, 255, 255, 0)'; // Default color if chartArea is not defined

        // Create gradient and apply it to bars
        return createGradient(ctx, chartArea);
      }
    }]
  },
  options: {
    indexAxis: 'y', // Makes the chart horizontal
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}`
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 10 // Adjust based on your scale
      },
      y: {
        beginAtZero: true
      }
    },
    responsive: true,
    maintainAspectRatio: false
  }
});
  let currentSlide = 0;
let highlightData = {
    'highlight1.jpg': ['../img/intern.png'],
    'highlight2.jpg': ['../img/33.png'],
    'highlight3.jpg': ['../img/11.png','../img/22.png']
};

function openHighlightModal(imageSrc) {
    const images = highlightData[imageSrc];
    const carouselContainer = document.querySelector('.highlight-modal-content');
    
    // Clear previous carousel content
    carouselContainer.innerHTML = `
        <button class="prev" onclick="prevSlide()">&#10094;</button>
        <div class="carousel-images">
            ${images.map(img => `<img class="carousel-slide" src="${img}" alt="Highlight Image">`).join('')}
        </div>
        <button class="next" onclick="nextSlide()">&#10095;</button>
    `;

    // Show the modal
    document.getElementById('highlightModal').style.display = 'flex';
    
    // Initialize the carousel
    showSlide(currentSlide);
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}


        // Close modal if the user clicks outside of it
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
            }
        }