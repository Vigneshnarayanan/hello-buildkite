require('dotenv').config();
const express = require('express');
const app = express();

// Use PORT from env, or 3333, or if that's busy, use a random port:
const PORT = process.env.PORT || 3333;

app.get('/', (req, res) => {
  res.send(`Hello from Buildkite on port ${PORT}!`);
});

const server = app.listen(PORT, () => {
  console.log(`✅ App running on port ${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`⚠️  Port ${PORT} in use, trying random port...`);
    server.listen(0); // 0 lets Node pick any open port
  } else {
    console.error(`❌ Server error: ${err}`);
    process.exit(1);
  }
});
