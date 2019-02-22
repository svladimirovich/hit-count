const express = require('express');
const app = express();
const port = 3000;

let pageHits = [];

app.get('/', (request, response) => {
    const currentDate = new Date();
    // register hit
    pageHits.push(currentDate);
    // filter out hits that are older than 1 minute
    pageHits = pageHits.filter(hit => hit > (currentDate - 60000))
    response.send(`This page was visited ${pageHits.length} times for the last minute!`)
})

app.listen(port, () => {
    console.log(`NodeJS server started on port ${port}`);
})
