const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
process.env.APP_NAME = "index-A";
const newrelic = require('newrelic');


// add root route to express
app.get('/', (req, res) => {
  res.send('OK');
});

app.get('/error', (req, res) => {
  res.status(500).send("Erro na api");
});

// start application server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});