const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

function getRandom(min = 0, max = 1) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get('/', (req, res) => {
  const value = getRandom();

  if (value === 1) {
    console.log('Sucesso api A');
    res.send('OK');
  } else {
    console.log('Erro api A');
    res.status(500).send('Something broke!');
  }
});

// start application server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});