const path = require('path');
const Utils = require('../libs/Utils');
let structs;

Utils.scanFolder({ folder: __dirname }).then((rs) => {
  structs = rs.filter((v) => {
    return /.json$/.test(v);
  }).reduce((prev, curr) => {
    const p = path.parse(curr);
    prev[p.name] = require(curr);
    return prev;
  });
}, {});

module.exports = structs;