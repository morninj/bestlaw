var spawn = require('child_process').spawn;
var _ = require('underscore');

var SDK_PATH = __dirname + '/addon-sdk';
var CFX_PATH = SDK_PATH + '/bin/cfx';
var ENV = {
  PYTHONPATH: SDK_PATH + '/python-lib/',
  CUDDLEFISH_ROOT: SDK_PATH,
  PATH: process.env.PATH
};

var DEFAULTS = {
  pkgdir: SDK_PATH
};

process.chdir(ENV.CUDDLEFISH_ROOT);

var ARG_MAP = {
  // cfx run 
  'binary': '--binary',
  'extras': '--extra-packages',
  'config': '--use-config',
  'profile': '--profiledir',
  'pkgdir': '--pkgdir',
  'static': '--static-args',
  'addons': '--addons',
  'app': '--app',
  // cfx test
  'filter': '--filter',
  'repeat': '--times',
  // cfx xpi
  'updateUrl': '--update-url',
  'updateLink': '--update-link'
}

exports.docs = execute.bind(null, 'docs');
exports.init = execute.bind(null, 'init');
exports.run = execute.bind(null, 'run');
exports.testall = execute.bind(null, 'testall');
exports.test = execute.bind(null, 'test');
exports.xpi = execute.bind(null, 'xpi');

function execute (command, options) {
  options = options || {};
  var dir = options.dir || __dirname;
  var env = _.extend({}, ENV, options.env || {});
  var args = optionsToArgs(options);
  return spawn('python', [CFX_PATH].concat(command).concat(args), {
    cwd: dir,
    env: env
  });
}

function optionsToArgs (options) {
  return _.reduce(_.extend({}, DEFAULTS, options), function (mem, val, key) {
    if (key !== 'dir' && key !== 'env')
      mem.push(ARG_MAP[key] + '=' + val);
    return mem;
  }, []);
}
