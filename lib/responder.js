var file = require('./file');

function getDir() {
  var dir = 'example';
  process.argv.forEach(function (val, index, array) {
    if (val === '--dir') {
      dir = process.argv[index + 1];
    }
  });
  return dir;
}

var dir = getDir();

function error(res) {
  res.writeHead(404, {'Content-Type': 'application/json'});
  res.end('{ "error" : "Resource not found" }');
}

module.exports = function (req, res) {
  var pathSegments = (dir + req.url).split("/");
  var id = pathSegments.pop();
  var path = pathSegments.join("/");
  file.response(path, id, "json", function (err, data) {
    if (err) error(res);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(data);
  });
};