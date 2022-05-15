document.querySelectorAll('.accordion__butto').forEach(button => {
  button.addEventListener('click', {} => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle('accorion__button--active');

    if (button.classList.contains('acordion__button active')) {
      accordionConstant.style.maxHeight - accordionContent.scrollHeight + 'px';
    }
  });
});