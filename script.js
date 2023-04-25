const checkButton = document.getElementById('checkButton');
const urlInput = document.getElementById('urlInput');
const statusResult = document.getElementById('statusResult');

checkButton.addEventListener('click', () => {
  const url = urlInput.value;
  if (url === '') {
    return;
  }
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
