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

    // Leer el contador guardado en localStorage
    let likesCount = parseInt(localStorage.getItem(`likes-${postId}`)) || 0;
    button.textContent = `Me gusta (${likesCount})`;

    button.addEventListener('click', () => {
      likesCount++;
      localStorage.setItem(`likes-${postId}`, likesCount);
      button.textContent = `Me gusta (${likesCount})`;

      // Actualizar publicación con más "me gusta"
      updateMostLiked(postId, likesCount);
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

  // 🌟 Mostrar la publicación más votada (si existe)
  showMostLiked();
});


// =============================
// FUNCIONES AUXILIARES
// =============================

// Guarda la publicación con más likes
function updateMostLiked(postId, likesCount) {
  const currentBest = JSON.parse(localStorage.getItem('mostLiked')) || { id: null, likes: 0 };

  if (likesCount > currentBest.likes) {
    localStorage.setItem('mostLiked', JSON.stringify({ id: postId, likes: likesCount }));
  }
}

// Muestra visualmente cuál es la más votada
function showMostLiked() {
  const mostLiked = JSON.parse(localStorage.getItem('mostLiked'));
  if (mostLiked && mostLiked.id) {
    const topPost = document.querySelector(`.post[data-id="${mostLiked.id}"]`);
    if (topPost) {
      topPost.classList.add('top-post'); // Podés estilizarla con CSS
    }
  }
}
