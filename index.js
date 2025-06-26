require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 0; // 0 = pick a random available port

app.get('/', (req, res) => {
  res.send('Hello from Buildkite!');
});

const server = app.listen(PORT, () => {
  const actualPort = server.address().port;
  console.log(`✅ App running on dynamic port ${actualPort}`);
});
