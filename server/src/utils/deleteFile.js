const CONSTANTS = require('../constants');
const fs = require('fs');
const path = require('path');
const devFilePath = path.resolve(CONSTANTS.FILES_PATH, 'images');


module.exports.deleteFiles = (fileName) => {
if (fileName) {
  fs.readdir(devFilePath, (err, files) => {
    if (err) throw err;
    foundFiles = files.filter((file) => file === fileName);
    if (foundFiles[0]) {
      fs.unlink(path.join(devFilePath, foundFiles[0]), (err) => {
        if (err) throw err;
      });
    }
  });
}}


