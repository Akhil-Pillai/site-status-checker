const form = document.querySelector("#site-status-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const url = document.querySelector("#site-url").value;
  const res = await fetch("/api/checkstatus?url=" + url);
  const data = await res.json();
  const statusMessage = document.querySelector("#status-message");
  if (data.error) {
    statusMessage.innerHTML = `<p class="error">${data.error}</p>`;
  } else {
    statusMessage.innerHTML = `<p>${data.status}</p>`;
  }
});
