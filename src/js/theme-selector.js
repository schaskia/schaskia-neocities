document.addEventListener('DOMContentLoaded', function() {
  const selector = document.getElementById('theme-selector');
  const themeLink = document.getElementById('theme-css');

  selector.addEventListener('change', function() {
    themeLink.href = '/css/themes/' + selector.value;
    // Optionally, save the choice in localStorage:
    localStorage.setItem('selectedTheme', selector.value);
  });

  // On page load, restore the theme if saved
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
    themeLink.href = '/css/themes/' + savedTheme;
    selector.value = savedTheme;
  }
});