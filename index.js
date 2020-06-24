var express = require("express");
var app = express();
var log4js = require("log4js");

// log to console and append to file
log4js.configure({
    appenders: { 
    stdout: { type: 'stdout' },
    stderr: { type: 'stderr' },
    fileAppender: { type: 'file', maxLogSize: 10000, backups: 3, filename: "logs/file.log" },
    
    fileFilter: { type: 'logLevelFilter', appender: 'fileAppender', level: 'INFO' },
    stderrFilter: { type: 'logLevelFilter', appender: 'stderr', level: 'ERROR' }
    },

    categories: { 
        default: { appenders: [ 'fileFilter', 'stderrFilter', 'stdout' ], level: 'DEBUG' }
    }
  });

var logger = log4js.getLogger();

app.listen(3000, () => {
 logger.info("Server running on port 3000...");
 logger.debug("Debug: server running");

});

app.get("/", (req, res, next) => {
    res.json({name: 'Dummy'});
   });