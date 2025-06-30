// index.js
const express = require('express');
const app = express();

// Use dynamic port for CI
const PORT = process.env.PORT || 3100;

app.get('/', (req, res) => {
  res.send(`Hello from Buildkite on port ${PORT}!`);
});

const server = app.listen(PORT, () => {
  console.log(`✅ App running on port ${PORT}`);
});

// Graceful shutdown in CI
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('🛑 Process terminated');
  });
});
