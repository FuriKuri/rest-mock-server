var fs = require('fs');

module.exports.response = function(path, id, type, callback) {
  var regex = new RegExp("^" + id + ".*" + type + "$", "i");
  console.log(regex);
  fs.readdir(path, function (err, files) {
    var matched = files.filter(function (file, i) {
      console.log("---->" + file);
      var result = file.match(regex);
      console.log("-> ->" + result);
      return result;
    });
    console.log(files);
    console.log(matched);
    if (matched.length == 1) {
      fs.readFile(path + "/" + matched[0], function (err, data) {
        callback(err, data);
      });
    } else {
      callback(new Error("No resource found"), null);
    }
  });
};
