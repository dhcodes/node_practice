const trumpet = require('trumpet')
const fs = require('fs')
var tr = trumpet();

fs.createReadStream('process.stdin').pipe(tr);
var stream = tr.select('.loud').toUpperCase().createStream();
stream.pipe(process.stdout)
