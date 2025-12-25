// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Highlight active menu item on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Modal functionality for First Time cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.classList.add('show');
    });
});

// Close modals
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        closeBtn.closest('.modal').classList.remove('show');
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('show');
    }
});

// Gallery modal
const galleryImages = document.querySelectorAll('.gallery-img');
const galleryModal = document.getElementById('gallery-modal');
const galleryFullImg = document.getElementById('gallery-full-img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentImageIndex = 0;

galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentImageIndex = index;
        galleryFullImg.src = img.getAttribute('data-full');
        galleryModal.classList.add('show');
    });
});

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    galleryFullImg.src = galleryImages[currentImageIndex].getAttribute('data-full');
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    galleryFullImg.src = galleryImages[currentImageIndex].getAttribute('data-full');
});

// Message envelope animation
const openMessageBtn = document.getElementById('open-message');
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');

openMessageBtn.addEventListener('click', () => {
    envelope.classList.add('open');
    setTimeout(() => {
        letter.classList.remove('hidden');
    }, 500);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe elements for animations
document.querySelectorAll('.day-card, .timeline-item').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});

// Scroll animations
window.addEventListener('scroll', () => {
    const timelineLine = document.querySelector('.timeline::before');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const scrollTop = window.pageYOffset;
    const timelineTop = document.getElementById('timeline').offsetTop;
    const timelineHeight = document.getElementById('timeline').offsetHeight;

    if (scrollTop > timelineTop - window.innerHeight && scrollTop < timelineTop + timelineHeight) {
        const progress = (scrollTop - timelineTop + window.innerHeight) / (timelineHeight + window.innerHeight);
        timelineLine.style.height = `${progress * 100}%`;
    }
});
