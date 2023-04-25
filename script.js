const checkStatusBtn = document.getElementById('check-status-btn');
const urlInput = document.getElementById('site-url');
const statusResult = document.getElementById('status-message');

checkStatusBtn.addEventListener('click', () => {
  const url = urlInput.value;
  if (url === '') {
    return;
  }
  console.log(`/api/checkstatus?url=${url}`);
  fetch(`/api/checkstatus?url=${url}`)
    .then(response => response.json())
    .then(data => {
      const statusText = data.status ? 'up' : 'down';
      const message = `Site is ${statusText}, response time: ${data.responseTime}ms`;
      statusResult.textContent = message;
      statusResult.classList.add(data.status ? 'is-success' : 'is-danger');
      statusResult.classList.remove('is-hidden');
    })
    .catch(error => console.error(error));
});
