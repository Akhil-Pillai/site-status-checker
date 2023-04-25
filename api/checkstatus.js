const axios = require("axios");

module.exports = async (req, res) => {
  const { url } = req.query;

  try {
    const response = await axios.get(url);
    const status = response.status;
    res.json({ status });
  } catch (error) {
    res.json({ error: error.message });
  }
};
