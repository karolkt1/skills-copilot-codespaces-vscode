// Create web server
var express = require('express');
var app = express();
var fs = require('fs');
var https = require('https');
var http = require('http');

// Configure web server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create HTTP server
http.createServer(app).listen(8080);

// Create HTTPS server
var options = {
    key: fs.readFileSync('server-key.pem'),
    cert: fs.readFileSync('server-cert.pem'),
    passphrase: 'password'
};
https.createServer(options, app).listen(8443);