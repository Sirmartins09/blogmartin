document.addEventListener('DOMContentLoaded', () => {
  // 🍔 Menú hamburguesa
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // ❤️ Botones "Me gusta" con contador por artículo
  const likeButtons = document.querySelectorAll('.like-button');

  likeButtons.forEach(button => {
    const post = button.closest('.post');
    const postId = post.getAttribute('data-id');

    let likesCount = parseInt(localStorage.getItem(`likes-${postId}`)) || 0;
    button.textContent = `Me gusta (${likesCount})`;

    button.addEventListener('click', () => {
      likesCount++;
      localStorage.setItem(`likes-${postId}`, likesCount);
      button.textContent = `Me gusta (${likesCount})`;
    });
  });

  // 💖 Íconos de corazón con FontAwesome
  const heartButtons = document.querySelectorAll('.like-btn');

  heartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const heartIcon = button.querySelector('i');
      heartIcon.classList.toggle('fa-regular');
      heartIcon.classList.toggle('fa-solid');
      button.classList.toggle('liked');
    });
  });
});