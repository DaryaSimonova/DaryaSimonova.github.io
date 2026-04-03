const dots = document.querySelectorAll('.dot');

dots.forEach(dot => {
  dot.addEventListener('mouseenter', () => {
    const angle = parseFloat(getComputedStyle(dot).getPropertyValue('--r')); 
    const offset = -90; // корректировка, чтобы 0° был вверх
    const rad = (angle + offset) * (Math.PI / 180);

    const distance = Math.max(window.innerWidth, window.innerHeight) * 1;

    const x = Math.cos(rad) * distance;
    const y = Math.sin(rad) * distance;

    dot.style.setProperty('--x', `${x}px`);
    dot.style.setProperty('--y', `${y}px`);

    dot.style.animation = 'fly 10s ease-out forwards';
  });

  dot.addEventListener('animationend', () => {
    dot.style.display = 'none';
  });
});