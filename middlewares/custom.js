const fs = require('node:fs');

exports.custommiddleware=function custommiddleware(req,res,next){
    console.log("i am middleware b");
    next();
}