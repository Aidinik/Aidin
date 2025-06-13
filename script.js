// Reveal sections on scroll
window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach((section) => {
    const windowHeight = window.innerHeight;
    const elementTop = section.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      section.classList.add('visible');
    }
  });
});
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    console.log("Copied: " + text);
  });
}
