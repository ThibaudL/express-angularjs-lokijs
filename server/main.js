#!/usr/bin/env node
const fs = require('fs');
const express = require('express'),
    app = express(),
    port = 9004;
const LokiAdapter = require('./utils/LokiAdapter');
const bodyParser = require('body-parser');
const LOGGER = require('./utils/logger');
const path = require('path');
const WebSocket = require('ws');
const http = require('http');
const server = http.createServer(app);
const MonService = require('./services/MonService').MonService;

app.use(bodyParser.json()); // for parsing application/json
app.use('/', express.static(path.join(__dirname, '../public')));


let wsServer = new WebSocket.Server({server});
LokiAdapter.init().then(() => {
    LOGGER.info("db initialized");

    new MonService(app, LokiAdapter, wsServer);

    LOGGER.info("Service started on port : " + port);
    LOGGER.info("http://localhost:" + port);
});
server.listen(port, () => console.log('server listening on', server.address().port));