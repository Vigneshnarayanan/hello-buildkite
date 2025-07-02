require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3333;

app.get('/', (req, res) => {
  res.send('Hello from Buildkite!');
});

const server = app.listen(PORT, () => {
  console.log(`✅ App running on port ${PORT}`);
});

server.on('error', (err) => {
  console.error(`❌ Server error: ${err}`);
  process.exit(1);
});
