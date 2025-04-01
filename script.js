// Add animation to sections when they come into view
const sections = document.querySelectorAll('section');
sections.forEach(section => {
section.style.opacity = '0';
section.style.transition = 'opacity 0.5s ease-in';
});

function checkVisibility() {
sections.forEach(section => {
const rect = section.getBoundingClientRect();
const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
if (isVisible) {
section.style.opacity = '1';
}
});
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();

});