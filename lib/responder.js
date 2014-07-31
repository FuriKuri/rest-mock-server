var file = require('./file');

function getDir() {
  var dir = '.';
  process.argv.forEach(function (val, index, array) {
    if (val === '--dir') {
      dir = process.argv[index + 1];
    }
  });
  return dir;
}

module.exports = function (req, res) {
  file.response("lib", "app", "js", function (err, data) {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data + getDir());
  });
};