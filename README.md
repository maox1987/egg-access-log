# egg-access-log

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-access-log.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-access-log
[travis-image]: https://img.shields.io/travis/eggjs/egg-access-log.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-access-log
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-access-log.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-access-log?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-access-log.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-access-log
[snyk-image]: https://snyk.io/test/npm/egg-access-log/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-access-log
[download-image]: https://img.shields.io/npm/dm/egg-access-log.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-access-log

<!--
Description here.
-->

## Install

```bash
$ npm i egg-access-log --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.accessLog = {
  enable: true,
  package: 'egg-access-log',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.accessLog = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
