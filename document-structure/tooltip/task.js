const tooltips = document.querySelectorAll('.has-tooltip');
const tooltipElement = document.querySelector('.tooltip');

tooltips.forEach(tooltip => {
  tooltip.addEventListener('click', (event) => {
    event.preventDefault();
    const tooltipText = tooltip.getAttribute('title');
    
    tooltipElement.textContent = tooltipText;
    
    const tooltipPosition = tooltip.getBoundingClientRect();
    tooltipElement.style.top = `${tooltipPosition.bottom}px`;
    tooltipElement.style.left = `${tooltipPosition.left}px`;

    tooltipElement.classList.toggle('tooltip_active');
  });
});

// Скрытие подсказки при клике вне элемента
document.addEventListener('click', (event) => {
  if (!event.target.classList.contains('has-tooltip')) {
    tooltipElement.classList.remove('tooltip_active');
  }
});