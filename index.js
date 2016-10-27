const https = require('https');
const querystring = require('querystring');

const data = querystring.stringify('jljfffffffffffffffffffffffffffffffffff');
const opt = {
    hostname: '127.0.0.1',
    port: 3000,
    method: 'POST',
    path: '/add',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
    }
};

let req = https.request(opt, handler);
req.write(data);
req.end();

req.on('error', err => console.log(err));
req.on('response', handler);

function handler(response) {
    let data = '';
    response.on('data', chunk => data += chunk );
    response.on('end', function() {
        console.log(data);
    });
};
