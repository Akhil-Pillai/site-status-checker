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
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `http://localhost:3000/status?url=${url}`);
  xhr.onload = () => {
    if (xhr.status === 200) {
      statusResult.innerHTML = xhr.responseText;
    } else {
      statusResult.innerHTML = `${url} returned a status of ${xhr.status}`;
    }
  };
  xhr.onerror = () => {
    statusResult.innerHTML = `Error: ${xhr.statusText}`;
  };
  xhr.send();
};
