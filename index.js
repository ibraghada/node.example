var http = require('http');
var fs = require('fs');

var result = fs.readFileSync(__dirname + '/index.html','utf8')
http.createServer(function(req,res){
	res.end(result)
  

}).listen(8080,function(){
  console.log('Listening on 8080');
});