var cfx = require('../');
var fs = require('fs');

fs.mkdirSync(__dirname + '/newAddon');
var proc = cfx.init({ dir: __dirname + '/newAddon' });
proc.stdout.on('data', function (data) { console.log(''+data); });
proc.on('close', function (code) {
  if (!code)
    console.log(__dirname + '/newAddon has been created');
});
