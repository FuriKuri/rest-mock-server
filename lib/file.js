var fs = require('fs');

module.exports.response = function(path, id, type, callback) {
  fs.readFile(path + "/" + id + "." + type, function (err, data) {
    callback(err, data);
  });
}
