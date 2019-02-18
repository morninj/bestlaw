node-cfx
======

Programatically use cfx in node

## methods

currently supported methods, all return child process

* docs
* init
* run
* test
* testall
* xpi

## options

Below is a list of options and their CLI equivalent
* binary: '--binary',
* extras: '--extra-packages',
* config: '--use-config',
* profile: '--profiledir',
* pkgdir: '--pkgdir',
* static: '--static-args',
* app: '--app',
* filter: '--filter',
* repeat: '--times',
* updateUr': '--update-url',
* updateLink: '--update-link'

And there are special properties, `env` and `dir`, which the child process uses to execute

## examples

Examples are in the `examples/` dir, also check out the tests

## dependencies

python, firefox

## todo

Docs, better tests, currently requires FF installation to run, should use xvfb for headless tests

## license

MIT License
