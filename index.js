require('dotenv').config();
const express = require('express');
const app = express();

// Change the default port from 3000 to 3100
const PORT = process.env.PORT || 3100;

app.get('/', (req, res) => {
  res.send('Hello from Buildkite!');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
