const fs = require('node:fs');

//middleware to log requests
exports.loggermiddleware=function (req,res,next){
    const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
    fs.appendFileSync('log.txt', log, 'utf-8');
    next();
}