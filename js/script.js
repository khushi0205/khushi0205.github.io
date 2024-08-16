const postDescriptions = {
    'girldata.png': `
        <h2>Multi-Label Text Classification using Bag of Words and TF-IDF</h2>
        <p>Developed a multi-label text classifier using Bag of Words (BoW) and TF-IDF, enhanced with a RandomForest-based MultiOutputClassifier. Implemented advanced preprocessing techniques with scikit-learn, achieving 98% accuracy on diverse text data and improving classification efficiency by 30%.</p>
        <h3>Skills:</h3><p><ul><li>Python</li>
<li>Scikit-Learn</li>
<li>RandomForest</li>
<li>Bag of Words</li>
<li>TF-IDF</li>
<li>Machine Learning</li>
<li>Data Analysis</li>
<li>Pipeline Construction</li></ul></p><br><br><h2>Soil Classification and Crop Prediction using Machine Learning with Django</h2>
        <p>Created a Django-based web application for soil classification and crop prediction. Utilized LSTM for market price predictions on over 100K data points, achieving 75-85% accuracy.Integrated IoT for real-time soil nutrient monitoring, leading to 99% accuracy in crop and fertilizer predictions.</p>
        <h3>Skills:</h3><p><ul>
<li>Python</li>
<li>Django</li>
<li>LSTM</li>
<li>Time Series Forecasting</li>
<li>Deep Learning</li>
<li>Machine Learning</li>
<li>Data Analysis</li>
<li>SQL</li>
<li>Data Visualization (Plotly, Matplotlib)</li></ul></p><br><br><h2>Bitcoin Buy or Sell Prediction</h2>
        <p>Applied Random Forest to predict optimal buy/sell times for Bitcoin, achieving 95% accuracy. Analyzed financial data and created visualizations with Matplotlib. Developed a Django app to send email alerts for optimal trading times based on the predictions.</p>
        <h3>Skills:</h3><p><ul>
<li>Python</li>
<li>Machine Learning</li>
<li>Random Forest</li>
<li>Data Analysis</li>
<li>Data Visualization</li>
<li>Django</li>
<li>SQL</li>
<li>Matplotlib</li><ul></p><br>
    `,
    'girlweb.png': `
       <h2> Restaurant Website using Django</h2>
<p>Developed a Django-based website for managing restaurant orders, including order placements and summary generation. Designed and implemented backend functionalities to handle and store orders in a database, integrating an order confirmation system with SMTP for email notifications. Created a user-friendly frontend using HTML and CSS, ensuring smooth interaction between frontend and backend components to enhance the overall user experience.</p>
<h3>Skills:</h3><p><ul>
<li>Python</li>
<li>Django</li>
<li>HTML</li>
<li>CSS</li>
<li>SMTP</li>
<li>SQL</li>
<li>Web Development</li>
<li>Backend Development</li>
<li>Database Management</li></ul></p><br>   `,
    'girl2.png': `
        <h2>News Summary Extraction and Storage</h2>
<p>Developed a web scraping tool to extract headlines and summaries of articles from five e-news websites. Utilized Scrapy and Requests in Python to gather and process news content. The extracted data is stored in .txt format for easy access and analysis. This project involved setting up web crawlers, handling multiple websites, and ensuring data is saved efficiently.</p>
<h3>
Skills:</h3><ul>

<li>Python</li>
<li>Scrapy</li>
<li>Requests</li>
<li>Web Scraping</li>
<li>Data Extraction</li>
<li>Text File Management</li></ul></p><br><br><h2>CBSE School Data Scraping</h2>
<p>Created a web scraping tool to collect data on CBSE schools state-wise from the CBSE School website. Utilized Scrapy to extract and organize information, storing the data in .csv format for easy analysis and accessibility. This project involved setting up Scrapy spiders, handling dynamic web content, and structuring data efficiently.</p>
<h3>

Skills:</h3><p><ul>

<li>Python</li>
<li>Scrapy</li>
<li>Web Scraping</li>
<li>Data Extraction</li>
<li>CSV File Management</li></ul></p><br>
    `
};

function openPostModal(imageSrc) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalDescription').innerHTML = postDescriptions[imageSrc] || 'Description not available.';
    document.getElementById('postModal').style.display = 'flex';
}


let currentSlide = 0;
let highlightData = {
    'highlight1.jpg': ['img/intern.png'],
    'highlight2.jpg': ['img/33.png'],
    'highlight3.jpg': ['img/11.png','img/22.png']
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