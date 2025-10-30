// Project data
const projects = [
    {
        id: 11,
        title: "Encryption Tool",
        description: "CLI-based encryption/decryption tool built on top of the cryptography.fernet module. It is designed for personal or application-level encryption — not for full-disk or system-wide use.",
        image: "img/projects/duckling.png",
        tags: ["Python", "Cryptography", "2025"],
        githubLink: "https://github.com/vemacitrind/ugly-duckling",
        liveLink: null,
        year: 2025,
        tech: ["Python"]
    },
    {
        id: 1,
        title: "MediLink",
        description: "Medical management system connecting patients and healthcare providers with appointment scheduling and medical records",
        image: "img/projects/medilink.png",
        tags: ["Django", "React.js", "SQLite", "2025"],
        githubLink: "https://github.com/vemacitrind/medilink",
        liveLink: null,
        year: 2025,
        tech: ["Django", "React.js", "SQLite"]
    },
    {
        id: 2,
        title: "Roadmap",
        description: "Interactive learning roadmap platform for developers with progress tracking and resource management",
        image: "img/projects/roadmap.png",
        tags: ["Django", "React.js", "Vite", "TailwindCSS", "Firebase", "2025"],
        githubLink: "https://github.com/vemacitrind/roadmap",
        liveLink: null,
        year: 2025,
        tech: ["Django", "React.js", "Vite", "TailwindCSS", "Firebase"]
    },
    {
        id: 3,
        title: "ContactHub",
        description: "Comprehensive contact management system with advanced search and organization features",
        image: "img/projects/contacthub.png",
        tags: ["Streamlit", "MySQL", "2024"],
        githubLink: "https://github.com/vemacitrind/contacthub-streamlit-python",
        liveLink: null, // No live link for this project
        year: 2024,
        tech: ["Streamlit", "MySQL"]
    },
    {
        id: 4,
        title: "BurgerFarm",
        description: "Modern restaurant website with online ordering system and responsive design",
        image: "img/projects/burger-farm.png",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap5", "2024"],
        githubLink: "https://github.com/vemacitrind/Burger_Farm",
        liveLink: "https://burger-farm-psi.vercel.app/",
        year: 2024,
        tech: ["HTML", "CSS", "JavaScript", "Bootstrap5"]
    },
    {
        id: 5,
        title: "Web Hosting Site",
        description: "Web Hosting Site with responsive design",
        image: "img/projects/webhosting.png",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap5", "2024"],
        githubLink: "https://github.com/vemacitrind/web-hosting-site",
        liveLink: "https://vemacitrind.github.io/web-hosting-site/", 
        year: 2024,
        tech: ["HTML", "CSS", "JavaScript", "Bootstrap5"]
    },
    {
        id: 6,
        title: "Bus Booking",
        description: "Bus ticket booking system with seat selection, payment processing, and booking management",
        image: "img/projects/bus.png",
        tags: ["Java", "MySQL", "2023"],
        githubLink: "https://github.com/vemacitrind/BRTS_PROJECT_JAVA",
        liveLink: null, // No live link for this project
        year: 2023,
        tech: ["Java", "MySQL"]
    },
    {
        id: 7,
        title: "Arch-portfolio",
        description: "A sleek and minimal portfolio template tailored for developers and designers to showcase their work effectively.",
        image: "img/projects/arch-portfolio.png",
        tags: ["React.js", "2024"],
        githubLink: "https://github.com/vemacitrind/arch-portfolio",
        liveLink: "https://joshivedant-portfolio.vercel.app/",
        year: 2024,
        tech: ["React.js"]
    },
    {
        id: 8,
        title: "PyScapper",
        description: "Python-based web scraping tool using BeautifulSoup and Requests, designed for extracting structured data efficiently.",
        image: "img/projects/pyscapper.png",
        tags: ["Python", "2024"],
        githubLink: "https://github.com/vemacitrind/PyScraper",
        liveLink: null,
        year: 2024,
        tech: ["Python", "Instaloader"]
    }, {
        id: 9,
        title: "Movie ticket booking system",
        description: "A CLI-based movie ticket booking system using Python, featuring MySQL integration, colorful terminal UI, and secure password inputs.",
        image: "img/projects/movie-ticket-booking-system-python.png",
        tags: ["Python", "MySQL", "Rich", "2024"],
        githubLink: "https://github.com/vemacitrind/movie-ticket-booking-system-python",
        liveLink: null,
        year: 2024,
        tech: ["Python", "MySQL", "Rich", "termcolor", "pwinput"]
    },
    {
        id: 10,
        title: "ecommerce_db",
        description: "A fully structured PostgreSQL database schema for a modern e-commerce platform with tables for products, users, orders, and payments.",
        image: "img/projects/ecommerce_db.png",
        tags: ["PostgreSQL", "Database Design", "2023"],
        githubLink: "https://github.com/vemacitrind/ecommerce_db",
        liveLink: null,
        year: 2023,
        tech: ["PostgreSQL"]
    }

];

// Certificates data
const certificates = [
    {
        id: 1,
        title: "Data Analysis for Machine Learning",
        provider: "IBM • Coursera",
        year: 2025,
        skill: "Python",
        certificateLink: "https://coursera.org/share/608ef3585a823ce6e74d7cbd4f95daaf"
    },
    {
        id: 2,
        title: "Ethical Hacking Principles",
        provider: "SkillUp • Coursera",
        year: 2025,
        skill: "Cybersecurity",
        certificateLink: "https://coursera.org/share/b4583b522d23c2bf04c7ae3f15c91e78"
    },
    {
        id: 3,
        title: "HTML, CSS & JavaScript",
        provider: "IBM • Coursera",
        year: 2024,
        skill: "webdev",
        certificateLink: "https://coursera.org/share/34e9d7377075e7158a035798e88ecf3a"
    },
    {
        id: 4,
        title: "Data Structures in Java",
        provider: "University of Pennsylvania • Coursera",
        year: 2024,
        skill: "DSA",
        certificateLink: "https://coursera.org/share/b87e30cca365c4183984a9741d4492d9"
    },
    {

        id: 6,
        title: "Python Project: Email spam detector",
        provider: "Lets Upgrade",
        year: 2024,
        skill: "Python",
        certificateLink: "img/certificate/python.pdf"
    },
    {
        id: 5,
        title: "Introduction to Java",
        provider: "LearnQuest • Coursera",
        year: 2024,
        skill: "Java",
        certificateLink: "https://coursera.org/share/6e16f1116908e8d55d15997e024978dd"
    }
];

// DOM elements
const projectsGrid = document.getElementById('projectsGrid');
const certificatesGrid = document.getElementById('certificatesGrid');
const certificateGrid = document.getElementById('certificateGrid');
const filterInput = document.querySelector('.filter-input');
const themeToggle = document.querySelector('.theme-toggle');
const refreshBtn = document.querySelector('.refresh-btn');

// State
let filteredProjects = [...projects];
let filteredCertificates = [...certificates];
let currentTheme = localStorage.getItem('theme') || 'light';

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    initializeTheme();
    // Wait for Iconify to load before rendering
    setTimeout(() => {
        renderProjects();
        renderCertificates();
    }, 100);
    setupEventListeners();
    createFloatingDots();
    setupDropdowns();
    setupResumeButton();
    setupContactForm();
});

function initializeTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
    // Recreate floating dots with new theme
    createFloatingDots();

}

document.documentElement.setAttribute('data-theme', currentTheme);

function updateThemeIcon() {
    const icon = themeToggle.querySelector('svg path');
    if (currentTheme === 'dark') {
        icon.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z');
    } else {
        icon.setAttribute('d', 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z');
    }
}

// Project rendering
function renderProjects() {
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';

    if (filteredProjects.length === 0) {
        projectsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
                <p>No projects found matching your criteria.</p>
            </div>
        `;
        return;
    }

    // Check if we're on the index page (limit to 4 projects)
    const isIndexPage = window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '';
    const sortedProjects = filteredProjects.sort((a,b) => b.year - a.year || b.id - a.id);
    const projectsToShow = isIndexPage ? sortedProjects.slice(0, 4) : sortedProjects;

    projectsToShow.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });

    // Add "View All Projects" button on index page if there are more than 4 projects
    if (isIndexPage && filteredProjects.length > 4) {
        const viewAllButton = document.createElement('div');
        viewAllButton.className = 'view-all-projects';
        viewAllButton.innerHTML = `
            <a href="projects.html" class="view-all-btn">
                <span>View All Projects</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                </svg>
            </a>
        `;
        projectsGrid.appendChild(viewAllButton);
    }
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';

    const liveLinkIcon = project.liveLink ?
        `| <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="live-link">
            <iconify-icon icon="mdi:open-in-new" width="20" style="color: var(--text-primary) "};"></iconify-icon>
        </a>` : '';

    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}" class="project-img"/>
        </div>
        <div class="project-content">
            <div class="project-header">
                <h3 class="project-title">
                    ${project.title} 
                    ${liveLinkIcon}
                </h3>
                <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="github-link">
                    <iconify-icon icon="mdi:github" width="22"></iconify-icon>
                </a>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    // Add hover animation
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-4px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });

    return card;
}

// Certificate rendering
function renderCertificates() {
    if (!certificatesGrid && !certificateGrid) return;
    
    const targetGrid = certificatesGrid || certificateGrid;
    targetGrid.innerHTML = '';

    if (filteredCertificates.length === 0) {
        targetGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
                <p>No certificates found matching your criteria.</p>
            </div>
        `;
        return;
    }

    // Check if we're on the index page (limit to 4 certificates)
    const isIndexPage = window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '';
    const certificatesToShow = isIndexPage ? filteredCertificates.slice(0, 4) : filteredCertificates.sort((a,b)=>b.year-a.year);

    certificatesToShow.forEach(certificate => {
        const certificateCard = createCertificateCard(certificate);
        targetGrid.appendChild(certificateCard);
    });

    // Add "View All Certificates" button on index page if there are more than 4 certificates
    if (isIndexPage && filteredCertificates.length > 4) {
        const viewAllButton = document.createElement('div');
        viewAllButton.className = 'view-all-projects';
        viewAllButton.innerHTML = `
            <a href="certificates.html" class="view-all-btn">
                <span>View All Certificates</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                </svg>
            </a>
        `;
        targetGrid.appendChild(viewAllButton);
    }
}

function createCertificateCard(certificate) {
    const card = document.createElement('div');
    card.className = 'certificate-card';

    // Map certificate providers to Iconify icons
    const providerIcons = {
        'Coursera': 'simple-icons:coursera',
        'edX': 'simple-icons:edx',
        'Udemy': 'simple-icons:udemy',
        'LinkedIn': 'simple-icons:linkedin',
        'Google': 'simple-icons:google',
        'Microsoft': 'simple-icons:microsoft',
        'Amazon': 'simple-icons:amazon',
        'IBM': 'simple-icons:ibm'
    };

    // Map skills to Iconify icons
    const skillIcons = {
        'Python': 'simple-icons:python',
        'Java': 'la:java',
        'Machine Learning': 'simple-icons:tensorflow',
        'DSA': 'hugeicons:structure-04',
        'Cybersecurity': 'mingcute:safe-lock-fill',
        'webdev':'si:json-duotone'
    };

    const providerIcon = providerIcons[certificate.provider] || 'mdi:certificate';
    const skillIcon = skillIcons[certificate.skill] || 'mdi:code-tags';

    card.innerHTML = `
        <div class="certificate-content">
            <div class="certificate-left">
                <div class="certificate-logo">
                    <iconify-icon icon="${skillIcon}" width="40" style="color: var(--bg-primary);"></iconify-icon>
                </div>
                <div class="certificate-info">
                    <h3 class="certificate-title">${certificate.title}</h3>
                    <p class="certificate-provider">${certificate.provider}</p>
                </div>
            </div>
            <div class="certificate-right">
                <a href="${certificate.certificateLink}" target="_blank" rel="noopener noreferrer" class="certificate-link">
                    <iconify-icon icon="mdi:open-in-new" width="20"></iconify-icon>
                </a>
            </div>
        </div>
    `;

    return card;
}

// Filtering
function filterProjects(query) {
    const searchTerm = query.toLowerCase().trim();

    if (!searchTerm) {
        filteredProjects = [...projects];
    } else {
        filteredProjects = projects.filter(project =>
            project.title.toLowerCase().includes(searchTerm) ||
            project.description.toLowerCase().includes(searchTerm) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }

    renderProjects();
}

// Event listeners
function setupEventListeners() {
    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Filter input (only on projects page)
    if (filterInput) {
        filterInput.addEventListener('input', function (e) {
            filterProjects(e.target.value);
        });
    }

    // Refresh button (only on projects page)
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function (e) {
            const svg = this.querySelector('svg');
            svg.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                svg.style.transform = 'rotate(0deg)';
            }, 500);

            // Create rainbow dot
            const dot = document.createElement('div');
            dot.className = 'rainbow-dot';
            dot.style.left = e.clientX - 10 + 'px';
            dot.style.top = e.clientY - 10 + 'px';
            document.body.appendChild(dot);
            setTimeout(() => dot.remove(), 3000);

            // Reset filters
            if (filterInput) {
                filterInput.value = '';
            }
            filteredProjects = [...projects];
            renderProjects();

            // Recreate floating dots
            createFloatingDots();
        });
    }
}

// Dropdown functionality
function setupDropdowns() {
    const techDropdown = document.getElementById('techDropdown');
    const yearDropdown = document.getElementById('yearDropdown');
    const techMenu = document.getElementById('techDropdownMenu');
    const yearMenu = document.getElementById('yearDropdownMenu');

    // Check if dropdown elements exist (only on projects page)
    if (!techDropdown || !yearDropdown || !techMenu || !yearMenu) {
        return;
    }

    // Tech dropdown
    techDropdown.addEventListener('click', function (e) {
        e.stopPropagation();
        techMenu.classList.toggle('show');
        techDropdown.classList.toggle('active');
        yearMenu.classList.remove('show');
        yearDropdown.classList.remove('active');
    });

    // Year dropdown
    yearDropdown.addEventListener('click', function (e) {
        e.stopPropagation();
        yearMenu.classList.toggle('show');
        yearDropdown.classList.toggle('active');
        techMenu.classList.remove('show');
        techDropdown.classList.remove('active');
    });

    // Tech dropdown items
    techMenu.addEventListener('click', function (e) {
        if (e.target.classList.contains('dropdown-item')) {
            const tech = e.target.getAttribute('data-tech');
            if (tech === 'All') {
                filteredProjects = [...projects];
                filterInput.value = '';
            } else {
                filteredProjects = projects.filter(project =>
                    project.tech.some(t => t.toLowerCase().includes(tech.toLowerCase()))
                );
                filterInput.value = tech;
            }
            renderProjects();
            techMenu.classList.remove('show');
            techDropdown.classList.remove('active');
        }
    });

    yearMenu.addEventListener('click', function (e) {
        if (e.target.classList.contains('dropdown-item')) {
            const year = e.target.getAttribute('data-year');
            if (year === 'All') {
                filteredProjects = [...projects];
                filterInput.value = '';
            } else {
                filteredProjects = projects.filter(project =>
                    project.year.toString() === year
                );
                filterInput.value = year;
            }
            renderProjects();
            yearMenu.classList.remove('show');
            yearDropdown.classList.remove('active');
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function () {
        techMenu.classList.remove('show');
        yearMenu.classList.remove('show');
        techDropdown.classList.remove('active');
        yearDropdown.classList.remove('active');
    });
}

// Certificate filtering
function filterCertificates(query) {
    const searchTerm = query.toLowerCase().trim();

    if (!searchTerm) {
        filteredCertificates = [...certificates];
    } else {
        filteredCertificates = certificates.filter(certificate =>
            certificate.title.toLowerCase().includes(searchTerm) ||
            certificate.provider.toLowerCase().includes(searchTerm) ||
            certificate.skill.toLowerCase().includes(searchTerm)
        );
    }

    renderCertificates();
}

// Enhanced floating dots animation
function createFloatingDots() {
    const background = document.querySelector('.floating-dots');

    background.innerHTML = '';

    for (let i = 0; i < 50; i++) {
        const dot = document.createElement('div');
        dot.className = 'floating-dot';

        const size = Math.random() * 6 + 2;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 10 + 5; // Faster movement
        const delay = Math.random() * 10;

        dot.style.width = size + 'px';
        dot.style.height = size + 'px';
        dot.style.left = left + '%';
        dot.style.animationDuration = animationDuration + 's';
        dot.style.animationDelay = delay + 's';

        if (currentTheme === 'dark') {
            dot.style.background = 'rgba(255, 255, 255, 1)';
        } else {
            dot.style.background = 'rgba(0, 0, 0, 1)';
        }

        background.appendChild(dot);
    }
}

// Smooth scrolling for internal links
document.addEventListener('click', function (e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add loading animation
function showLoading() {
    projectsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
            <div style="display: inline-block; width: 40px; height: 40px; border: 3px solid var(--border-color); border-radius: 50%; border-top-color: var(--accent-color); animation: spin 1s ease-in-out infinite;"></div>
        </div>
    `;
}

// Add spin animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
    
    .filter-btn.active {
        background: var(--accent-color) !important;
        color: var(--bg-primary) !important;
        border-color: var(--accent-color) !important;
    }
    
    .refresh-btn svg {
        transition: transform 0.5s ease !important;
    }
    
    .refresh-btn:hover svg {
        transform: rotate(180deg) !important;
    }
`;
document.head.appendChild(style);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.profile-section, .currently-section, .projects-section, .technologies-section');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add some interactive features
document.addEventListener('mousemove', function (e) {
    const cursor = document.querySelector('.cursor');
    if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'cursor';
        newCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: var(--accent-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s ease;
            mix-blend-mode: difference;
        `;
        document.body.appendChild(newCursor);
    }

    const cursorElement = document.querySelector('.cursor');
    cursorElement.style.left = e.clientX - 10 + 'px';
    cursorElement.style.top = e.clientY - 10 + 'px';
    cursorElement.style.opacity = '0.5';
});

// Hide cursor when not moving
let cursorTimeout;
document.addEventListener('mousemove', function () {
    clearTimeout(cursorTimeout);
    cursorTimeout = setTimeout(() => {
        const cursor = document.querySelector('.cursor');
        if (cursor) cursor.style.opacity = '0';
    }, 1000);
});

// Resume button functionality
function setupResumeButton() {
    const resumeBtn = document.querySelector('.resume-btn-small');

    resumeBtn.addEventListener('click', function () {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'translateY(-1px)';
        }, 150);

        window.open('cv-vedant.pdf', '_blank');
    });
}

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = contactForm.querySelector('.submit-btn');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Add loading state
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            // Success state
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = '#4CAF50';

            // Reset form
            contactForm.reset();

            // Reset button after delay
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);

            // In a real application, you would send the data to your server
            console.log('Form submitted:', { name, email, subject, message });
        }, 2000);
    });

    // Add real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '';
            }
        });

        input.addEventListener('input', function () {
            if (this.style.borderColor === 'rgb(239, 68, 68)') {
                this.style.borderColor = '';
            }
        });
    });
}

