const express = require('express');
const uuidv4 = require('uuid/v4');
var healthRouter = require('./app/health/router.js');
var exampleRouter = require('./app/example/router');

global.DOWN = false;
global.UNIQUE = uuidv4();
global.RESTART = false;

const app = express();

app.use('/health', healthRouter);
app.use('/example', exampleRouter);

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
