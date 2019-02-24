import http from 'http';

const port = 3000;
let pageHits = [];

http.createServer((request, response) => {
    if(request.url == "/favicon.ico") {
        response.writeHead(404);
        response.end();
    } else {
        const currentDate = new Date();
        // register hit
        pageHits.push(currentDate);
        // filter out hits that are older than 1 minute
        pageHits = pageHits.filter(hit => hit > (currentDate - 60000));
        response.writeHead(200, { 'Content-Type' : 'text/plain' });
        response.end(`This page was requested ${pageHits.length} times for the last minute!`);    
    }
}).listen(port, '127.0.0.1');

console.log(`NodeJS server running on port ${port}`);