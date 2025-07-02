require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3100;

app.get('/', (req, res) => {
  res.send('Hello from Buildkite!');
});

// ✅ Only run the server locally, NOT in CI/CD
if (process.env.CI !== 'true') {
  app.listen(PORT, () => {
    console.log(`✅ App running on port ${PORT}`);
  });
}

module.exports = app;
