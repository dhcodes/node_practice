
module.exports=function(dir,ext, function(err, data) {

	if (err) return callback(err)
 
      
   fs.readFile(dir, ext, function(err, data) { 
   
   

   for (var i = 0; i<data.length; i++) {
    if (path.extname(data[i]).indexOf(ext)!==-1) {
      console.log(data[i])+'\n';
    }
  }
  })
});


