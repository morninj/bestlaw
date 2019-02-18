var cfx = require('../');
var fs = require('fs');

fs.mkdirSync(__dirname + '/packageAddon');
var proc = cfx.init({ dir: __dirname + '/packageAddon' });
proc.stdout.on('data', function (data) { console.log(''+data); });
proc.on('close', function (code) {
  if (!code){
    console.log(__dirname + '/packageAddon has been created');

    var buildProc = cfx.xpi({
      pkgdir: __dirname + '/packageAddon',
      // not required, but determines where the *.xpi will be created
      dir: __dirname + '/packageAddon'
    });
    buildProc.stdout.on('data', function (data) {
      console.log('' + data);
    });
    buildProc.on('close', function(code){
      if(!code){
        console.log( __dirname + '/packageAddon packaged' );
      }
    });

  }
});