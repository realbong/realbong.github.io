(function() {
  const randomButton = document.getElementById('random-button');
  const searchInput = document.querySelector('.searchInput');
  const posts = [
    '/spring-batch-deepdive/',
    '/alacritty-windows-wsl-tmux/'
  ];

  if (randomButton) {
    randomButton.addEventListener('click', function(event) {
      event.preventDefault();
      if (!posts.length) {
        return;
      }
      const index = Math.floor(Math.random() * posts.length);
      window.location.href = posts[index];
    });
  }

  window.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'h' && searchInput) {
      event.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
  });
})();
