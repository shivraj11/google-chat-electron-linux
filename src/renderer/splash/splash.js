if (window.navigator.onLine) {
  window.location = 'https://chat.google.com'
} else {
  document.getElementById('app-offline').style.display = 'block';
  document.getElementById('app-loading').style.display = 'none';
}

document.getElementById('retry-btn').addEventListener('click', () => {
  window.location.reload();
});
