var fs = require('fs');

module.exports.response = function(path, id, type, callback) {
  fs.readdir(path, function (err, files) {
    console.log(files);
  });
  var possibleFilePath = path + "/" + id + "." + type;
  fs.exists(possibleFilePath, function(exists) {
    if (exists) {
      fs.readFile(possibleFilePath, function (err, data) {
        callback(err, data);
      });
    }
  });
};
