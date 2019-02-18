var cfx = require('../');
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

afterEach(function () {
  this.proc && this.proc.kill();
});

describe('run', function () {
  it('should run an addon', function (done) {
    var proc = this.proc = cfx.run({ pkgdir: __dirname + '/addon' });
    proc.stderr.on('data',function(data){
      if (/i am running/.test(data+'')) {
        assert.ok(data, 'addon successfully ran');
        proc.kill();
      }
    });
    proc.on('close', function (code) {
      done();
    });
  });
});

describe('docs', function () {

});

describe('test', function () {
  it('should run an addons tests', function (done) {
    var proc = this.proc = cfx.test({ pkgdir: __dirname + '/addon' });
    var didTestsRun = false;
    proc.stderr.on('data', function (data) {
      if (/2 of 2 tests passed/.test(data+''))
        didTestsRun = true;
    });
    proc.on('close', function (code) {
      expect(code).to.be.equal(0);
      expect(didTestsRun).to.be.ok;
      done();
    });
  });

  it('should run tests when failing', function (done) {
    var proc = this.proc = cfx.test({ pkgdir: __dirname + '/addonFail' });
    var didTestsRun = false;
    proc.stderr.on('data', function (data) {
      if (/1 of 2 tests passed/.test(data+''))
        didTestsRun = true;
    });
    proc.on('close', function (code) {
      expect(code).to.be.not.equal(0);
      expect(didTestsRun).to.be.ok;
      done();
    });
  });
});

describe('testall', function () {

});

describe('init', function () {

});
