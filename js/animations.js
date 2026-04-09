document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Once it's visible, we don't need to observe it anymore
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const hiddenElements = document.querySelectorAll('.hidden-on-scroll');
  hiddenElements.forEach(el => observer.observe(el));
});
