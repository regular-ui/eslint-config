const index = require('./.eslintrc.js');
const loose = require('./loose.js');

Object.assign(index.rules, loose.rules);

module.exports = index;
