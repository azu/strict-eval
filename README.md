# strict-eval [![Build Status](https://travis-ci.org/azu/strict-eval.svg?branch=master)](https://travis-ci.org/azu/strict-eval)

eval code in vm module, but always strict mode.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install strict-eval

## Usage

```js
const strictEval = require("strict-eval");
strictEval("var a = 1");
```

## Security disclaimer

Please note that `strict-eval` has no security features and untrusted user input can lead to code injection vulnerabilities. 

## Changelog

See [Releases page](https://github.com/azu/strict-eval/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/strict-eval/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
