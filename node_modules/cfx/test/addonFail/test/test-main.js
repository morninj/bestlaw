var main = require("./main");

exports["test main"] = function(assert) {
  throw new Error();
};

exports["test main async"] = function(assert, done) {
  assert.pass("async Unit test running!");
  done();
};

require("sdk/test").run(exports);
