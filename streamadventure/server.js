const through=require('through2');
const http=require('http');
const fs = require('fs');

var server = http.createServer(function(req,res) {
  if (req.method === 'POST') {
    req.pipe(through(function write(buf,_,next) {
  this.push(buf.toString().toUpperCase());
    next();
})).pipe(res);
    }
    else function end(done){
      res.end(done());
     
    }
    })
server.listen(process.argv[2]);
