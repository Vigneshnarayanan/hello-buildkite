require('dotenv').config();
const express = require('express');
const app = express();

// PORT = 0 lets the system assign a random available port
const PORT = process.env.PORT || 0;

app.get('/', (req, res) => {
  res.send('Hello from Buildkite!');
});

const server = app.listen(PORT, () => {
  const actualPort = server.address().port;
  console.log(`✅ App running on dynamic port ${actualPort}`);
});
