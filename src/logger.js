// src/logger.js

const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '..', 'logs', 'app.log');

function logError(message) {
  const logMessage = `[${new Date().toISOString()}] ERROR: ${message}\n`;
  fs.appendFileSync(logFile, logMessage, 'utf8');
}

module.exports = {
  logError
};
