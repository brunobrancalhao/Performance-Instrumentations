const express = require('express');
const requestPromise = require('request-promise');
const app = express();
const port = process.env.PORT || 3001;

async function requestApi(retryCount = 0, maxRetryCount = 1) {

  const url = `http://localhost:${3000}/`;
  retryCount++;

  try {
    await requestPromise(url);
  } catch (err) {
    if (retryCount <= maxRetryCount) {
      return await requestApi(retryCount, maxRetryCount);
    } else {
      throw err;
    }
  }
}

app.get('/retry', async (req, res) => {

  try {
    await requestApi();
    res.send('OK');
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

// start application server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});