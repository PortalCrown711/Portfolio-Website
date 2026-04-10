// Portfolio JavaScript - Modern Interactive Features

// Hide preloader immediately on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        preloader.style.transition = 'opacity 0.5s ease';
    }
});

// Initialize AOS (Animate On Scroll) - with error handling
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
}

// Typing Animation
class TypeWriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = `<span class="typing-text">${this.txt}</span><span class="cursor">|</span>`;

        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize typing animation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        const typingElement = document.querySelector('.typing-text');
        if (typingElement) {
            const words = [
                'Aspiring AI / Software Developer',
                'MCA Candidate',
                'Hackathon Participant',
                'Research Paper Published',
                'Infosys Springboard Intern'
            ];
            new TypeWriter(typingElement, words);
        }
    } catch (error) {
        console.warn('TypeWriter initialization failed:', error);
    }
});

// Dark Mode Toggle
try {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggle) {
        function toggleTheme() {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');

            // Update toggle icon
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
            }

            // Update toggle button position for visual feedback
            themeToggle.style.transform = isDark ? 'rotate(180deg)' : 'rotate(0deg)';
            setTimeout(() => {
                themeToggle.style.transform = 'rotate(0deg)';
            }, 300);
        }

        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-sun';
            }
        }

        themeToggle.addEventListener('click', toggleTheme);
    }
} catch (error) {
    console.warn('Dark mode toggle initialization failed:', error);
}

// Sticky Navigation
try {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    if (navbar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                navbar.style.transform = 'translateY(0)';
            }

            // Add sticky class when scrolled
            if (scrollTop > 50) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }

            lastScrollTop = scrollTop;
        });
    }
} catch (error) {
    console.warn('Sticky navigation initialization failed:', error);
}

// Scroll Progress Bar
try {
    const progressBar = document.getElementById('progress-bar');

    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;

            progressBar.style.width = scrollPercent + '%';
        });
    }
} catch (error) {
    console.warn('Scroll progress bar initialization failed:', error);
}

// Smooth Scrolling for Navigation Links
try {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
} catch (error) {
    console.warn('Smooth scrolling initialization failed:', error);
}

// Mobile Menu Toggle
try {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
} catch (error) {
    console.warn('Mobile menu toggle initialization failed:', error);
}

// EmailJS Contact Form
try {
    if (typeof emailjs !== 'undefined') {
        // Initialize EmailJS with your public key
        // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
        // Get it from: https://www.emailjs.com/
        emailjs.init('YOUR_PUBLIC_KEY'); // ⚠️ IMPORTANT: Replace with your EmailJS public key

        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');

            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();

                // Show loading state
                btnText.style.display = 'none';
                btnLoading.style.display = 'inline-flex';

                // Prepare template parameters
                const templateParams = {
                    from_name: document.getElementById('name').value,
                    from_email: document.getElementById('email').value,
                    subject: document.getElementById('subject').value,
                    message: document.getElementById('message').value,
                    to_name: 'Prince Pal'
                };

                // Send email using EmailJS
                // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
                emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams) // ⚠️ IMPORTANT: Replace with your service and template IDs
                    .then(function(response) {
                        console.log('SUCCESS!', response.status, response.text);

                        // Show success message
                        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');

                        // Reset form
                        contactForm.reset();

                        // Reset button state
                        btnText.style.display = 'inline';
                        btnLoading.style.display = 'none';
                    })
                    .catch(function(error) {
                        console.error('FAILED...', error);

                        // Show error message
                        showNotification('Failed to send message. Please try again or contact me directly.', 'error');

                        // Reset button state
                        btnText.style.display = 'inline';
                        btnLoading.style.display = 'none';
                    });
            });
        }
    }
} catch (error) {
    console.warn('EmailJS contact form initialization failed:', error);
}

// Notification helper
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;

    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Project Cards Hover Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Skills Progress Animation
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');

    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';

        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

// Trigger progress animation when skills section is in view
const skillsSection = document.getElementById('skills');
let progressAnimated = false;

function checkSkillsInView() {
    if (!progressAnimated) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            animateProgressBars();
            progressAnimated = true;
        }
    }
}

window.addEventListener('scroll', checkSkillsInView);
window.addEventListener('load', checkSkillsInView);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');

    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Fallback: Ensure preloader is hidden after maximum 2 seconds
setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }
}, 2000);

// Also hide on window load event
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }
});

// Fallback: Hide preloader after 3 seconds even if page hasn't fully loaded
setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        preloader.style.transition = 'opacity 0.5s ease';
    }
}, 3000);

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .skill-item, .contact-item').forEach(el => {
    observer.observe(el);
});

// Prevent form submission on enter key for better UX
document.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
        }
    });
});

// Add loading states for external links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function() {
        this.style.opacity = '0.7';
        setTimeout(() => {
            this.style.opacity = '1';
        }, 300);
    });
});

// Custom cursor
const customCursor = document.getElementById('custom-cursor');
window.addEventListener('mousemove', e => {
    if (customCursor) {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    }
});

document.querySelectorAll('a, button').forEach(item => {
    item.addEventListener('mouseenter', () => {
        if (customCursor) {
            customCursor.style.width = '28px';
            customCursor.style.height = '28px';
            customCursor.style.background = 'rgba(37, 99, 235, 0.4)';
        }
    });
    item.addEventListener('mouseleave', () => {
        if (customCursor) {
            customCursor.style.width = '14px';
            customCursor.style.height = '14px';
            customCursor.style.background = 'rgba(37, 99, 235, 0.9)';
        }
    });
});

// Project Filters
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});



// Animated Counters
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 1700;
        const stepTime = Math.abs(Math.floor(duration / target));
        let current = 0;

        const increment = () => {
            current += 1;
            counter.innerText = current;
            if (current < target) {
                setTimeout(increment, stepTime);
            } else {
                counter.innerText = target;
            }
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    increment();
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(counter);
    });
}

animateCounters();

// Floating Chatbot
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');

function createChatbotMessage(text, role) {
    const message = document.createElement('div');
    message.className = `chatbot-message ${role}`;
    message.textContent = text;
    return message;
}

function getBotResponse(query) {
    const q = query.trim().toLowerCase();
    if (!q) return 'Please type a question about my profile, skills, projects, or experience.';

    // Education queries
    if (q.includes('education') || q.includes('degree') || q.includes('studied') || q.includes('university') || q.includes('college')) {
        return 'I have completed my Bachelor of Science in Information Technology (BScIT) from Vidyalankar School of Information Technology, Mumbai (2022-2025). I\'m currently pursuing my Master of Computer Applications (MCA) from Thakur Institute of Management Studies, Research and Development (Aug 2025 - Aug 2027). I also completed my Higher Secondary Certificate (HSC) in Science from Ramniranjan Jhunjhunwala College, Mumbai (Aug 2020 - June 2022).';
    }

    if (q.includes('mca') || q.includes('thakur institute')) {
        return 'I\'m pursuing my MCA (Aug 2025 - Aug 2027) from Thakur Institute of Management Studies, Research and Development. The program focuses on advanced software development, system design, web technologies, AI/ML, and agile methodologies, combining theoretical knowledge with practical industry experience.';
    }

    if (q.includes('bsit') || q.includes('vidyalankar') || q.includes('bachelor')) {
        return 'I completed my BScIT (2022-2025) from Vidyalankar School of Information Technology, Mumbai, with a strong foundation in software development, networking, databases, and web technologies through practical labs and project-based assignments.';
    }

    // Skills and Technologies queries
    if (q.includes('skills') || q.includes('technologies') || q.includes('tech stack') || q.includes('what do you know')) {
        return 'Frontend: JavaScript (ES6+), HTML5, CSS3, Angular, React.js, Bootstrap, Tailwind CSS. Backend: Node.js, Express.js, Python, RESTful APIs. Database: MySQL. Tools: Git, GitHub, VS Code, Postman for API testing. Emerging: Generative AI, Prompt Engineering, LLM Integration. I\'m proficient in building full-stack applications with modern, scalable architectures and testing methodologies.';
    }

    if (q.includes('angular') || q.includes('framework')) {
        return 'I have extensive expertise in Angular for building dynamic, responsive web applications. I specialize in component-based architecture, RxJS for reactive programming, TypeScript for type-safe development, and Angular Material for modern UI design.';
    }

    if (q.includes('generative ai') || q.includes('ai') || q.includes('llm') || q.includes('prompt engineering')) {
        return 'I\'m skilled in Generative AI, Prompt Engineering, and LLM Integration. I have completed Google Cloud certifications in Responsible AI, Large Language Models, and Generative AI. I\'ve also completed Infosys training in Prompt Engineering and Generative AI, and used these skills in the Google Agentic AI Hackathon (2025).';
    }

    if (q.includes('backend') || q.includes('node') || q.includes('api') || q.includes('server')) {
        return 'I work with Node.js and Express.js for backend development, building RESTful APIs for scalable applications. I have experience with MySQL databases for data persistence and optimization. I understand secure authentication, efficient data management, and deployment processes.';
    }

    // Internship queries
    if (q.includes('internship') || q.includes('infosys springboard') || q.includes('springboard')) {
        return 'I served as deputy leader for a 7-member team at Infosys Springboard (Feb 2026 - April 2026, 2 months), working on Skills Build - a full-stack volunteer-NGO matching platform. My internship was done at Infosys Springboard, and I contributed to both front-end and back-end development using React.js, Node.js, and Express.js. I used Postman to test REST APIs, coordinated development tasks, and ensured stable project increments through Agile sprints, Git workflows, and peer code reviews.';
    }

    if (q.includes('skills build')) {
        return 'Skills Build is a full-stack volunteer-NGO matching platform I worked on as deputy leader at Infosys Springboard. I partnered with a cross-functional team of 7, working on front-end with React.js, back-end with Node.js and Express.js, REST API testing with Postman, smart-matching features, responsive components, and MySQL database optimization.';
    }

    // Professional Experience queries
    if (q.includes('experience') || q.includes('background') || q.includes('career') || q.includes('work history')) {
        return 'I\'m an Angular Developer Intern at Infosys Springboard (Feb-April 2026) working on a full-stack volunteer-NGO platform. I also served as Proctor & Invigilator at AJA Assessments (2024 & 2025, 2 months each) administering secure assessments. As an aspiring Software Developer and MCA candidate with skills in Angular, Node.js, and Generative AI, I\'m passionate about building scalable, user-centric software.';
    }

    if (q.includes('proctor') || q.includes('invigilator') || q.includes('aja assessments')) {
        return 'I worked as Proctor & Invigilator at AJA Assessments (2024 & 2025, 2 months each) in Mumbai. I administered secure online and offline assessments, ensured compliance with assessment protocols, verified candidate identity, maintained exam integrity, resolved technical issues, and managed candidate coordination and documentation.';
    }

    // Projects queries
    if (q.includes('project') || q.includes('portfolio') || q.includes('work') || q.includes('built') || q.includes('created')) {
        return 'My projects include: 1) Full-Stack Pizza Ordering Web App - HTML5, CSS3, JavaScript, Node.js, MySQL with persistent order storage. 2) MobiMouse - Remote desktop cursor control with published research. 3) Clipnugget - Published browser extension for clipboard management (Edge, Firefox, Microsoft Store). 4) Angular E-Commerce Platform, Invoice Generator, Tic Tac Toe, Text to Voice, BuildHome, and Personal Portfolio Website. All showcasing modern web development practices.';
    }

    if (q.includes('pizza ordering') || q.includes('pizza app')) {
        return 'Full-Stack Pizza Ordering Web Application (2025): An end-to-end web app for online pizza ordering with customer menu, shopping cart, and admin dashboard. Built with HTML5, CSS3, JavaScript, Node.js, and MySQL. Features persistent order storage, custom menu management, and secure checkout flow.';
    }

    if (q.includes('mobimouse')) {
        return 'MobiMouse - Remote Desktop Cursor Control via Mobile Device (2024): A mobile application enabling users to control their laptop touchpad remotely via smartphone with gesture recognition and customizable sensitivity. It includes published peer-reviewed research on cross-platform mobile-to-desktop input control and accessibility innovation, demonstrating hands-on expertise.';
    }

    if (q.includes('clipnugget')) {
        return 'Clipnugget - Smart Clipboard Manager: A powerful published browser extension for clipboard management, enhancing productivity by storing multiple clipboard items and organizing them by categories. Available on Microsoft Edge, Firefox, and as a Microsoft Store application with intuitive keyboard shortcuts.';
    }

    // Hackathons queries
    if (q.includes('hackathon') || q.includes('google agentic') || q.includes('nasa space apps') || q.includes('competition')) {
        return 'I\'ve participated in 10+ hackathons, including NASA Space Apps Challenge (2024) and Google Agentic AI Hackathon (2025). These global competitions helped me learn to prototype quickly, solve problems under pressure, and deliver polished solutions within tight timeframes. While my focus was on learning and execution rather than winning, these experiences strengthened my teamwork, rapid ideation, and delivery capabilities significantly.';
    }

    // Certifications queries
    if (q.includes('certification') || q.includes('certified') || q.includes('courses') || q.includes('training')) {
        return 'I have a comprehensive portfolio of 30+ certifications across multiple domains: (1) Google Cloud AI Suite (Aug 2024): Responsible AI, Large Language Models, Generative AI, and Generative AI Studio. (2) IBM & Generative AI: Prompt Engineering, Create Voice Assistant with GPT-3 and IBM Watson, and Generative AI foundations. (3) Software Engineering: Introduction to Software Engineering (IBM), Career Essentials in Software Development (Microsoft & LinkedIn), and Diploma in Software Engineering (Infosys). (4) Programming: Python, C, C++, Linux, Arduino, Django, Angular JS, and Web Programming (Oct 2022). (5) Design & Tools: 5 Canva certifications for design and web creation. (6) Domain Expertise: AI/ML for GeoData Analytics (IIRS, ISRO). (7) Hackathons & Events: Quasar 3.0 National Hackathon, Web Development Job Simulation, and Guinness World Record for online programming lessons. (8) Professional Skills: Soft Skills (TCS iON), Placement Preparation (Internshala), and MS Office Diploma. All certifications demonstrate continuous learning across AI, development, design, and professional growth areas.';
    }

    if (q.includes('google cloud') || q.includes('ai certification')) {
        return 'Google Cloud Certifications (Aug 2024): Introduction to Responsible AI, Introduction to Large Language Models, Introduction to Generative AI, and Introduction to Generative AI Studio. These cover foundational concepts in ethical AI deployment, LLM fundamentals, and practical Generative AI applications, aligning with my focus on emerging AI technologies.';
    }

    if (q.includes('ibm') || q.includes('prompt engineering') || q.includes('gpt') || q.includes('watson')) {
        return 'IBM Certifications (Aug-Sep 2024): Prompt Engineering for LLM optimization, and Create a Voice Assistant with OpenAI\'s GPT-3 and IBM Watson. These hands-on certifications demonstrate practical expertise in building AI-powered applications and mastering prompt-based interactions with modern LLMs.';
    }

    if (q.includes('software engineering') || q.includes('microsoft')) {
        return 'Software Engineering & Development: Introduction to Software Engineering (IBM, Nov 2025), Career Essentials in Software Development (Microsoft & LinkedIn, Jun 2024), Diploma in Software Engineering (Infosys), and specialized programming training in Python, C, C++, Linux, Django, and Angular JS. These provide a strong theoretical and practical foundation in modern development practices.';
    }

    if (q.includes('publication') || q.includes('research') || q.includes('paper')) {
        return 'I have published peer-reviewed research paper on MobiMouse: Remote Desktop Cursor Control via Mobile Device. Recently, I won 3rd prize in the Research Poster Presentation competition during my MCA program, showcasing my ability to communicate technical work effectively. This research explores cross-platform mobile-to-desktop input control, accessibility innovations, and UI methodologies.';
    }

    // NSS and Community Service queries
    if (q.includes('nss') || q.includes('national service') || q.includes('community') || q.includes('social')) {
        return 'I was an active member of the NSS (National Service Scheme) during my BScIT studies for 1 year 2 months, participating in community service activities and social outreach programs. This experience helped me develop a sense of social responsibility and understanding of community-driven development.';
    }

    // Contact and Personal info queries
    if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('hire') || q.includes('message')) {
        return 'You can reach me at princevpal11@gmail.com or use the contact form on this website. I\'m open to discussing opportunities, collaborations, and interesting projects. I\'m based in Mumbai, Maharashtra, India, and open to remote work.';
    }

    if (q.includes('location') || q.includes('where') || q.includes('live') || q.includes('mumbai')) {
        return 'I\'m based in Mumbai, Maharashtra, India. I\'m open to remote work opportunities, freelance projects, and occasional travel for interesting projects or interviews.';
    }

    if (q.includes('linkedin') || q.includes('github') || q.includes('social')) {
        return 'You can connect with me on: GitHub: github.com/portalcrown711, LinkedIn: linkedin.com/in/princepal11. Check out my projects and contributions on these platforms!';
    }

    // Professional Summary queries
    if (q.includes('who are you') || q.includes('about you') || q.includes('tell me about') || q.includes('summary') || q.includes('professional')) {
        return 'I\'m an early-career Software Developer and MCA candidate skilled in Angular, React.js, Node.js, and Generative AI. Deputy leader during my Infosys Springboard internship, published researcher, and participant in 10+ hackathons (including NASA Space Apps and Google Agentic AI). I hold 30+ professional certifications across AI, software engineering, design, and data analytics. Winner of 3rd prize in Research Poster Presentation (MCA) and NSS member for 1 year 2 months during BScIT. Passionate about building scalable, user-centric software with modern technologies.';
    }

    // Duration/Timeline queries
    if (q.includes('duration') || q.includes('long') || q.includes('months') || q.includes('how much time')) {
        return 'My Infosys Springboard internship is 2 months (Feb 2026 - April 2026). I have worked as Proctor & Invigilator for 2 months each in 2024 and 2025. I\'m pursuing my MCA over 2 years (Aug 2025 - Aug 2027) and completed my BScIT over 3 years (2022-2025).';
    }

    // Offer/Opportunity queries
    if (q.includes('open to') || q.includes('looking for') || q.includes('opportunity') || q.includes('position') || q.includes('role')) {
        return 'I\'m open to Software Developer, Angular Developer, and AI/ML integration roles. I\'m eager to contribute to innovative projects, startups, and product-based companies. I can engage in freelance projects, internships, and permanent positions. Feel free to contact me at princevpal11@gmail.com to discuss opportunities!';
    }

    // Default response
    return 'That\'s a great question! I\'m an early-career Software Developer, MCA student, and Infosys Springboard deputy leader. My expertise spans Angular, React.js, Node.js, Generative AI, and full-stack development. I hold 30+ professional certifications including Google Cloud AI suite, IBM Generative AI training, and specialized software engineering courses. I\'ve participated in 10+ hackathons, won 3rd prize in Research Poster Presentation, and served as an NSS member for 1 year 2 months. Feel free to ask me about my education, projects, experience, skills, certifications, hackathon participation, research, NSS involvement, or how to connect with me!';
}

function addChatbotEntry() {
    const userMessage = chatbotInput.value.trim();
    if (!userMessage) return;

    // Add user message
    chatbotMessages.appendChild(createChatbotMessage(userMessage, 'user'));
    chatbotInput.value = '';

    // Scroll to bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // Show typing indicator
    const typingIndicator = createChatbotMessage('Typing...', 'bot');
    chatbotMessages.appendChild(typingIndicator);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // Simulate bot response delay
    setTimeout(() => {
        // Remove typing indicator
        chatbotMessages.removeChild(typingIndicator);

        // Add bot response
        const botResponse = getBotResponse(userMessage);
        chatbotMessages.appendChild(createChatbotMessage(botResponse, 'bot'));

        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
}

// Toggle chatbot window
chatbotToggle.addEventListener('click', () => {
    chatbotWindow.classList.toggle('active');
});

// Close chatbot window
chatbotClose.addEventListener('click', () => {
    chatbotWindow.classList.remove('active');
});

// Send message on button click
chatbotSend.addEventListener('click', addChatbotEntry);

// Send message on Enter key
chatbotInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addChatbotEntry();
    }
});

// Close chatbot when clicking outside
document.addEventListener('click', (event) => {
    if (!chatbotWindow.contains(event.target) && !chatbotToggle.contains(event.target)) {
        chatbotWindow.classList.remove('active');
    }
});
    // Resume preview modal
    const resumePreviewBtn = document.getElementById('preview-resume-btn');
    const resumePreviewModal = document.getElementById('resume-preview-modal');
    const closeResumePreview = document.getElementById('close-resume-preview');

    function toggleResumePreview(show) {
        if (!resumePreviewModal) return;
        resumePreviewModal.classList.toggle('hidden', !show);
        document.body.classList.toggle('no-scroll', show);
    }

    if (resumePreviewBtn && resumePreviewModal && closeResumePreview) {
        resumePreviewBtn.addEventListener('click', () => toggleResumePreview(true));
        closeResumePreview.addEventListener('click', () => toggleResumePreview(false));
        resumePreviewModal.addEventListener('click', (event) => {
            if (event.target === resumePreviewModal) {
                toggleResumePreview(false);
            }
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !resumePreviewModal.classList.contains('hidden')) {
                toggleResumePreview(false);
            }
        });
    }