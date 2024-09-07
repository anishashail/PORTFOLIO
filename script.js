// Smooth Scroll for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark/Light Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
});

// Modal Popup for project details
const projects = document.querySelectorAll('.project');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close-btn');

// Open modal on project click
projects.forEach(project => {
    project.addEventListener('click', function () {
        const modalId = project.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

// Close modal when clicking the close button
closeBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        this.parentElement.parentElement.style.display = 'none';
    });
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', function (e) {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
