var fs = require('fs');

module.exports.response = function(path, id, type, callback) {
  var regex = new RegExp("^" + id + ".*" + type + "$", "i");
  fs.readdir(path, function (err, files) {
    var matched = files.filter(function (file, i) {
      return file.match(regex);
    });
    if (matched.length == 1) {
      fs.readFile(path + "/" + matched[0], function (err, data) {
        callback(err, data);
      });
    } else {
      if (files.contains("default.json")) {
        fs.readFile(path + "/default.json", function (err, data) {
          callback(err, data);
        });
      } else {
        callback(new Error("No resource found"), null);
      }
    }
  });
};
