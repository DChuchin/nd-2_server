const https = require('https');
const opt = {
    port
}

const req = https.request(url, handler);
req.end();

req.on('response', handler);

function handler(response) {
    let data = '';
    response.on('data', chunk => data += chunk );
    response.on('end', function() {
        console.log(data);
    });
};
