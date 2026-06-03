document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const storedTheme = localStorage.getItem('preferredTheme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

    const setTheme = (theme) => {
        root.dataset.theme = theme;
        if (themeToggle) {
            themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
            themeToggle.classList.toggle('theme-active', theme === 'dark');
            themeToggle.querySelector('.theme-toggle-icon').textContent = theme === 'dark' ? '☀️' : '🌙';
            themeToggle.querySelector('.theme-toggle-label').textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
        }
        localStorage.setItem('preferredTheme', theme);
    };

    if (themeToggle) {
        setTheme(initialTheme);
        themeToggle.addEventListener('click', () => {
            const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
            setTheme(nextTheme);
        });
    }

    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        navLinks.querySelectorAll('a').forEach((item) => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 70}ms`;
    });

    const submitForms = document.querySelectorAll('form');
    submitForms.forEach((form) => {
        form.addEventListener('submit', (event) => {
            const submitButton = form.querySelector('button[type="submit"]');
            if (!submitButton) return;
            submitButton.classList.add('btn-loading');
            submitButton.disabled = true;
            const originalText = submitButton.dataset.originalText || submitButton.innerHTML;
            if (!submitButton.dataset.originalText) {
                submitButton.dataset.originalText = originalText;
            }
            submitButton.innerHTML = '<span class="loading-dot"></span> Loading...';
        });
    });

    document.querySelectorAll('input, textarea, select').forEach((input) => {
        const errorElement = input.parentElement?.querySelector('.form-error-message');
        if (errorElement) {
            input.classList.add('form-error');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (event) {
            const href = this.getAttribute('href');
            if (href === '#' || href.startsWith('#') && href.length === 1) return;
            const target = document.querySelector(href);
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    document.querySelectorAll('.alert-close').forEach((button) => {
        button.addEventListener('click', () => {
            const alert = button.closest('.alert');
            if (alert) {
                alert.style.animation = 'slideDown 0.3s ease-out reverse';
                setTimeout(() => alert.remove(), 300);
            }
        });
    });
});

