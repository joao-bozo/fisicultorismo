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

document.querySelectorAll('.loss-card').forEach((card) => {
  const front = card.querySelector('.loss-card-flip');
  const back = card.querySelector('.loss-card-back');
  const backButton = card.querySelector('.loss-card-return');

  const setFlipped = (flipped) => {
    card.classList.toggle('is-flipped', flipped);
    front.setAttribute('aria-expanded', String(flipped));
    front.parentElement.setAttribute('aria-hidden', String(flipped));
    front.parentElement.inert = flipped;
    back.setAttribute('aria-hidden', String(!flipped));
    back.inert = !flipped;
  };

  card.addEventListener('pointerenter', () => setFlipped(true));
  card.addEventListener('pointerleave', () => setFlipped(false));

  front.addEventListener('click', (event) => {
    event.preventDefault();
    setFlipped(true);
  });

  front.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    setFlipped(true);
  });

  backButton.addEventListener('click', (event) => {
    event.preventDefault();
    setFlipped(false);
  });

  card.addEventListener('touchstart', (event) => {
    if (event.target.closest('.loss-card-return')) return;
    event.preventDefault();
    setFlipped(true);
  }, { passive: false });

  card.addEventListener('touchend', () => setFlipped(false));
});
