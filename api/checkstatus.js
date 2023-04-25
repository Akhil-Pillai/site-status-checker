const https = require('https');

const checkStatus = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      resolve(res.statusCode);
    }).on('error', (err) => {
      reject(err);
    });
  });
};

module.exports = async (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send('Missing URL parameter');
  }
  try {
    const statusCode = await checkStatus(url);
    res.status(200).send({ status: statusCode });
  } catch (err) {
    res.status(500).send('Error checking status');
  }
};
