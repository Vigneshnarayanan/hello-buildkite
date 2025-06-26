require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3100;

app.get('/', (req, res) => {
  res.send('Hello from Buildkite!');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
