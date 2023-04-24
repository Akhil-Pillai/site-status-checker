const statusForm = document.querySelector('#status-form');
const urlInput = document.querySelector('#url-input');
const statusResult = document.querySelector('#status-result');

statusForm.addEventListener('submit', e => {
  e.preventDefault();
  const url = urlInput.value;
  checkStatus(url);
});

const checkStatus = url => {
  statusResult.innerHTML = 'Checking status...';
  fetch(url)
    .then(response => {
      if (response.ok) {
        statusResult.innerHTML = `${url} is up and running!`;
      } else {
        statusResult.innerHTML = `${url} returned a status of ${response.status}`;
      }
    })
    .catch(error => {
      statusResult.innerHTML = `Error: ${error.message}`;
    });
};
