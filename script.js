// Fade-in cards as they scroll into view
const cards = document.querySelectorAll('.video-card, .audio-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = entry.target.classList.contains('video-card')
          ? 'translateY(0)'
          : 'translateX(0)';
      }, i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  if (card.classList.contains('video-card')) {
    card.style.transform = 'translateY(20px)';
  } else {
    card.style.transform = 'translateX(-10px)';
  }
  observer.observe(card);
});
