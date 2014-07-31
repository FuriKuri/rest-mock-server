var http = require('http');
var file = require('./file');

var dir = '.';
process.argv.forEach(function (val, index, array) {
  if (val === '--dir') {
    dir = process.argv[index + 1];
  }
});

http.createServer(function (req, res) {
  file.response("lib", "app", "js", function (err, data) {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data);
  });
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
