const http = require('http');

const options = {
  hostname: 'localhost',
  port: process.env.PORT || 3333,
  path: '/',
  method: 'GET'
};

const req = http.request(options, res => {
  res.setEncoding('utf8');
  res.on('data', chunk => {
    console.log(`✅ Test output: ${chunk}`);
  });
});

req.on('error', error => {
  console.error(`❌ Test failed: ${error}`);
  process.exit(1);
});

req.end();
