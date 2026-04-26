// Project case studies based on actual portfolio projects

const projectData = {

'agentic-ai': {

title: 'AI Customer Support Automation System',

content: `

<h2>AI Customer Support Automation System</h2>
<p class="project-date">2026 | Salesforce (Apex,Flow) • OpenAI • Named Credentials • REST</p>
<p class="project-date">View project here: <a href="https://github.com/khushi0205/AI-Case-Copilot-for-Salesforce.git" target="_blank">GitHub Repository</a></p>

<div class="project-section">

<h3>Overview</h3>

<p>
Built an AI-powered case analysis system using Salesforce Flow and Apex callouts, enabling real-time 
summarization, priority classification, and response generation for support cases. 
</p>

</div>


<div class="architecture-image">

<img src="img/AI Copilot Demo 1.jpeg" class="inline-architecture-img">
<br>
<img src="img/AI Copilot Demo 1.jpeg" class="inline-architecture-img">

<p class="image-caption">
Demo of AI copilot in Salesforce analyzing a support case and generating a response
</p>

</div>


<div class="project-section">

<h3>Problem</h3>
<p>
Manual case handling → slow responses, inconsistent decisions.
</p>

<h3>Solution</h3>
<p>
Built an AI copilot inside Salesforce that:
<ul>
<li>Generates case summaries</li>
<li>Suggests next actions</li>
<li>Drafts responses using structured AI outputs</li>
</ul>
</p>

</div>


<div class="project-section">

<h3>Impact</h3>

<ul>

<li>⬇️ 40–60% reduction in manual effort</li>

<li>⚡ Faster response times</li>

<li>📈 Improved consistency</li>

</ul>

</div>


<div class="project-section">

<h3>Technologies Used</h3>

<div class="tech-tags">

<span>Salesforce (Apex, Flow)</span>
<span>Named Credentials</span>
<span>OpenAI</span>
<span>REST</span>

</div>

</div>


<div class="project-section">

<h3>Results</h3>

<ul>

<li>Automated complex enterprise workflows previously requiring manual execution</li>

<li>Reduced operational workload by automating repetitive system tasks</li>

<li>Enabled scalable workflow orchestration using modular AI agents</li>

</ul>

</div>

`

},



'healthcare-genai': {

title: 'SLA Breach Prevention Automation',

content: `

<h2>SLA Breach Prevention Automation</h2>

<p class="project-date">2026 | Jira • N8N</p>


<div class="project-section">

<h3>Overview</h3>

<p>
Built an automated SLA monitoring system that detects unattended tickets in real time and triggers acknowledgment actions, eliminating manual tracking and significantly reducing the risk of SLA breaches.
</p>

</div>



<div class="architecture-image">

<img src="img/Jira SLA.png" class="inline-architecture-img">

<p class="image-caption">
SLA breach prevention architecture integrating automation and event-driven messaging
</p>

</div>



<div class="project-section">
<h3>Problem</h3>
<p>Unassigned tickets were not acknowledged → SLA breaches.</p>
<br>
<h3>Solution</h3>
<p>Automated workflow that:
<ul>

<li>Monitors tickets every 10 minutes</li>

<li>Detects unattended issues</li>

<li>Auto-acknowledges via comments</li>

</ul>
</p>
</div>



<div class="project-section">

<h3>Impact</h3>

<ul>

<li>🚫 Prevented SLA breaches</li>

<li>⏱ Eliminated manual monitoring</li>

<li>📈 Improved customer satisfaction by 40%</li>

</ul>

</div>



<div class="project-section">

<h3>Technologies Used</h3>

<div class="tech-tags">

<span>JIRA</span>
<span>N8N</span>

</div>

</div>



<div class="project-section">

<h3>Results</h3>

<ul>

<li>Automated SLA breach prevention</li>

<li>Reduced manual intervention in ticket management</li>

</ul>

</div>

`

},



'financial-analysis': {

title: 'AI Decision Engine inside Salesforce',

content: `

<h2>AI Decision Engine inside Salesforce</h2>

<p class="project-date">2026 | Salesforce (Apex, LWC)• Named Credentials • Python • FastAPI • OpenAI • Microservices</p>
<p class="project-date">View project here: <a href="https://github.com/khushi0205/AI-Powered-Salesforce-Stock-Signal-System.git" target="_blank">GitHub Repository</a></p>

<div class="project-section">

<h3>Overview</h3>

<p>

Built an end-to-end AI decision system integrating Salesforce (LWC + Apex), FastAPI microservices, and 
OpenAI, enabling real-time BUY/SELL/HOLD signal generation within CRM workflows. 

</p>

</div>



<div class="architecture-image">

<img src="img/TSLA SF.jpeg" class="inline-architecture-img">
<img src="img/TSLA Analysis.jpeg" class="inline-architecture-img">
<br>
<div class="demo-btn" style="display: inline-block;
  margin-top: 10px;
  padding: 8px 14px;
  border-radius: 8px;
  background: linear-gradient(90deg, #a855f7, #ec4899);
  color: white;
  font-size: 14px;
  text-decoration: none;
  margin-top: 14px;"><a href="https://youtu.be/T_1A9EfNIDc" target="_blank">▶️ Watch Demo (1 min)</a></p></div>
<p class="image-caption">
AI pipeline processing financial data and generating insights from API to Salesforce LWC interface
</p>

</div>



<div class="project-section">

<h3>Problem</h3>

<p>Teams rely on external tools for decision-making → slow, fragmented workflows.</p>

</div>



<div class="project-section">

<h3>Solution</h3>
<p>Built a system that:
<ul>

<li>Integrates Salesforce with external data sources</li>

<li>Processes data via FastAPI microservices</li>

<li>Generates AI-driven decisions with confidence + reasoning</li>

<li>Displays results directly inside CRM</li>

</ul>
</p>
</div>



<div class="project-section">

<h3>Technologies Used</h3>

<div class="tech-tags">

<span>Salesforce (Apex, LWC)</span>
<span>Python</span>
<span>FastAPI</span>
<span>OpenAI</span>
<span>Async</span>
<span>Caching</span>
<span> Named Credentials</span>

</div>

</div>



<div class="project-section">

<h3>Impact</h3>

<ul>

<li>⚡ Real-time decision-making inside Salesforce</li>

<li>🔁 Eliminated tool switching</li>

<li>📊 Standardized outputs</li>

</ul>

</div>

`

}

};

// // Carousel data
// let highlightData = {
//     'highlight1.jpg': ['img/intern.png'],
//     'highlight2.jpg': ['img/33.png'],
//     'highlight3.jpg': ['img/11.png', 'img/22.png']
// };

let currentSlide = 0;

// Function to open project modal
function openProjectModal(projectId) {
    console.log('Opening project modal:', projectId);
    const modal = document.getElementById(projectId + '-modal');
    const contentDiv = document.getElementById(projectId + '-content');
    
    if (modal && contentDiv && projectData[projectId]) {
        contentDiv.innerHTML = projectData[projectId].content;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    } else {
        console.error('Modal not found for:', projectId);
    }
}

// Function to open post modal (backward compatibility)
function openPostModal(imageSrc) {
    console.log('Opening post modal:', imageSrc);
    const modal = document.getElementById('postModal');
    const descriptionDiv = document.getElementById('modalDescription');
    
    if (modal && descriptionDiv) {
        descriptionDiv.innerHTML = postDescriptions[imageSrc] || 'Description not available.';
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Function to open highlight modal
function openHighlightModal(imageSrc) {
    console.log('Opening highlight modal:', imageSrc);
    const images = highlightData[imageSrc];
    if (!images || images.length === 0) return;
    
    const modal = document.getElementById('highlightModal');
    const carouselContainer = modal.querySelector('.highlight-modal-content');
    
    carouselContainer.innerHTML = `
        <button class="carousel-btn prev" onclick="prevSlide()" aria-label="Previous image">
            <i class="fas fa-chevron-left"></i>
        </button>
        <div class="carousel-container">
            <div class="carousel-images">
                ${images.map(img => `
                    <div class="carousel-slide">
                        <img src="${img}" alt="Highlight Image" loading="lazy">
                    </div>
                `).join('')}
            </div>
            <div class="carousel-indicators">
                ${images.map((_, index) => `
                    <span class="indicator ${index === 0 ? 'active' : ''}" 
                          onclick="goToSlide(${index})"></span>
                `).join('')}
            </div>
        </div>
        <button class="carousel-btn next" onclick="nextSlide()" aria-label="Next image">
            <i class="fas fa-chevron-right"></i>
        </button>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    currentSlide = 0;
    showSlide(currentSlide);
}

// Function to close modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Carousel functions
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const carouselImages = document.querySelector('.carousel-images');
    
    if (!slides.length || !carouselImages) return;
    
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    indicators.forEach((indicator, i) => {
        if (i === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function goToSlide(index) {
    showSlide(index);
}

// Window click handler
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            if (modal.style.display === 'flex') {
                closeModal(modal.id);
            }
        });
    }
    
    if (event.key === 'ArrowLeft') {
        const highlightModal = document.getElementById('highlightModal');
        if (highlightModal?.style.display === 'flex') {
            prevSlide();
        }
    } else if (event.key === 'ArrowRight') {
        const highlightModal = document.getElementById('highlightModal');
        if (highlightModal?.style.display === 'flex') {
            nextSlide();
        }
    }
});

// Touch support for carousel
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(event) {
    const highlightModal = document.getElementById('highlightModal');
    if (highlightModal?.style.display === 'flex') {
        touchStartX = event.changedTouches[0].screenX;
    }
}, { passive: true });

document.addEventListener('touchend', function(event) {
    const highlightModal = document.getElementById('highlightModal');
    if (highlightModal?.style.display === 'flex') {
        touchEndX = event.changedTouches[0].screenX;
        const difference = touchStartX - touchEndX;
        
        if (Math.abs(difference) > 50) {
            if (difference > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
}, { passive: true });

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio initialized');
    
    // Add click handlers to post cards
    document.querySelectorAll('.post-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.tagName === 'A' || e.target.closest('a')) return;
            
            const onclickAttr = this.getAttribute('onclick');
            if (onclickAttr) {
                const match = onclickAttr.match(/openProjectModal\('([^']+)'\)/);
                if (match && match[1]) {
                    openProjectModal(match[1]);
                }
            }
        });
    });
    
    // Add click handlers to highlights
    document.querySelectorAll('.highlight').forEach(highlight => {
        highlight.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img?.src) {
                const filename = img.src.split('/').pop();
                openHighlightModal(filename);
            }
        });
    });
});

// Preload images
function preloadImages(imageArray) {
    imageArray.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// preloadImages([
//     'img/AgenticAi.png',
//     'img/WorkflowAutomation.png',
//     'img/GenAi.png',
//     'img/girldata.png',
//     'img/girlweb.png',
//     'img/girl2.png',
//     'img/intern.png',
//     'img/33.png',
//     'img/11.png',
//     'img/22.png'
// ]);
