document.querySelectorAll('.category-row button').forEach((button) => {
  button.addEventListener('click', () => {
    const row = button.closest('.category-row');
    const wasOpen = row.classList.contains('open');

    document.querySelectorAll('.category-row').forEach((item) => {
      item.classList.remove('open');
      item.querySelector('button').setAttribute('aria-expanded', 'false');
      item.querySelector('.toggle').textContent = '+';
    });

    if (!wasOpen) {
      row.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
      row.querySelector('.toggle').textContent = '−';
    }
  });
});
