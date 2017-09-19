var split = require('split');
var through2 = require('through2');
var counter = 1;


process.stdin
	.pipe(split())
	.pipe(through2(function (line, _, next) {
	  if (counter % 2===0) {
  		this.push(line.toString().toUpperCase()+'\n')
		counter++;	
	  }

	  else {
		this.push(line.toString().toLowerCase()+'\n')
		counter++;
	  }
	  next();
	})).pipe(process.stdout);
	
	
