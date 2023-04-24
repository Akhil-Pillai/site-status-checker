const form = document.getElementById('form');
const urlInput = document.getElementById('url');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const url = urlInput.value;

  // Make a request to the server to check the website status
  fetch(`/status?url=${url}`)
    .then((response) => {
      if (response.ok) {
        return response.text();
      }
      throw new Error(`Request failed with status ${response.status}`);
    })
    .then((data) => {
      resultDiv.innerHTML = `Status: ${data}`;
    })
    .catch((error) => {
      console.error(error);
      resultDiv.innerHTML = 'An error occurred while checking the website status.';
    });
});
