const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');
// Create Express Server
const app = express();

// Configuration
const PORT = 3000;
const HOST = "localhost";
const API_SERVICE_URL = "https://reviti-int-02.underwriteme.co.uk/api";
// Logging
app.use(morgan('dev'));

 // Proxy endpoints
app.use(createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true
 }));

 // Start the Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
 });