const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/status', async (req, res) => {
  try {
    const url = req.query.url;
    const response = await fetch(url);

    if (response.ok) {
      res.status(200).send(`${url} is up and running!`);
    } else {
      res.status(400).send(`${url} is down!`);
    }
  } catch (error) {
    res.status(400).send(`Error: ${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
