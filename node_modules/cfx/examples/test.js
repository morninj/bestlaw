var cfx = require('../');
var fs = require('fs');

fs.mkdirSync(__dirname + '/testableAddon');
var proc = cfx.init({ dir: __dirname + '/testableAddon' });
proc.on('close', function (code) {

  var testProc = cfx.test({ pkgdir: __dirname + '/testableAddon' });
  testProc.stdout.on('data', function (data) {
    console.log('' + data);
  });
  testProc.on('close', function (code) {
    console.log('Exited with status code ' + code);
  });
});
