document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Dynamic slot timer for "Limited Appointments"
    const createTimer = () => {
        const slotsEl = document.createElement('div');
        slotsEl.style.cssText = 'background: rgba(197, 160, 89, 0.1); color: var(--gold); padding: 0.8rem 1.5rem; border-radius: 4px; font-weight: 700; font-size: 0.9rem; margin-top: 1.5rem; text-align: center; border: 1px solid var(--gold); text-transform: uppercase; letter-spacing: 1px;';
        slotsEl.innerHTML = '⚡ LIMITED SAME-DAY APPOINTMENTS REMAINING';
        document.querySelector('.hero-content')?.appendChild(slotsEl);
    };
    
    createTimer();

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple interaction for call buttons
    const callButtons = document.querySelectorAll('.btn-header-call, .btn-book-now');
    callButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const href = btn.getAttribute('href');
            if (href === 'tel:7136319371') {
                console.log('Initiating call to We Are 1 Barber Shop...');
            }
        });
    });
});
