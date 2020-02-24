/* eslint-disable strict */

'use strict';


module.exports = exports = {};



exports.readFile = (file, cb) => {
  if (file.match(/bad/i)) {
    cb('Invalid File');
  }
};



exports.writeFile = (file, buffer, cb) => {
  if (file.match(/bad/i)) {
    cb('Invalid file');
    return Buffer.from('File Contents');
  }
};