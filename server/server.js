const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Add this line to enable CORS

app.get('/status', (req, res) => {
  const url = req.query.url;
  fetch(url)
    .then(response => {
      if (response.ok) {
        res.status(200).send(`${url} is up and running!`);
      } else {
        res.status(response.status).send(`${url} returned a status of ${response.status}`);
      }
    })
    .catch(error => {
      res.status(500).send(`Error: ${error.message}`);
    });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
