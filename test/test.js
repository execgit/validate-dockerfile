'use strict';

var validateDockerfile = require('../')
  , find = require('find')
  , fs = require('fs')
  , path = require('path');

find.eachfile(/./, path.join(__dirname, 'Dockerfiles'), function (file) {
  console.log(file);
  fs.readFile(file, 'UTF-8', function (err, data) {
    if (err) {
      throw err;
    }
    console.log(validateDockerfile(data));
  });
});