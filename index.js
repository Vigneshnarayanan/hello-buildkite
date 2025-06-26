require('dotenv').config();
const express = require('express');
const app = express();
const portfinder = require('portfinder');

const DEFAULT_PORT = 3100;

// Try to use env PORT, otherwise find a free one starting from DEFAULT_PORT
const PORT = process.env.PORT || DEFAULT_PORT;

portfinder.getPort({ port: PORT }, (err, freePort) => {
  if (err) {
    console.error('❌ Could not find a free port:', err);
    process.exit(1);
  }

  const server = app.listen(freePort, () => {
    console.log(`✅ App running on port ${freePort}`);
  });

  server.on('error', (error) => {
    console.error('❌ Server error:', error);
    process.exit(1);
  });
});

app.get('/', (req, res) => {
  res.send('Hello from Buildkite!');
});
