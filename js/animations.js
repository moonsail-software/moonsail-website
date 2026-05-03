document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add a slight stagger to the entrance
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const hiddenElements = document.querySelectorAll('.hidden-on-scroll');
  hiddenElements.forEach(el => observer.observe(el));

  // Scroll-responsive background blobs
  const updateScroll = () => {
    const scrollY = window.scrollY;
    document.documentElement.style.setProperty('--scroll-y', scrollY);
  };
  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll(); // Initialize on load

  // Mouse-tracking glow for app cards
  const cards = document.querySelectorAll('.app-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    });
  });
});
