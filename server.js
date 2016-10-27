const http = require('http');
const PORT = process.env.PORT || 3000;

http.createServer()
    .listen(PORT)
    .on('request', handler)
    .on('listening', ()=> {
        console.log(`server start on port ${PORT}`);
    });

function handler(req, res)  {
    console.log(`req ${req}`);
    console.log(`res ${res}`);
};
