# Debug your Javascript with Ray to fix problems faster

This package can be installed in any JS application to send messages to [the Ray app](https://myray.app).

## Installation

```bash
npm install js-ray 
```
or
```bash
yarn install js-ray 
```

## Usage

Using ESM import

```js 
import { ray } from 'js-ray';
```

Using CommonJS require

```js 
const { ray } = require('js-ray');
```

Quick examples

```js 
ray('a string')

ray(['an array'])

ray({ text: 'an object' })

ray('as' 'many' , 'arguments', 'as', 'you', 'like')

ray('this is blue').color('blue')

ray().newScreen('My debug screen')
```

## Documentation

You can find the full documentation on [our documentation site](https://spatie.be/docs/ray/v1/usage/javascript).

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Miguel Piedrafita](https://github.com/m1guelpf)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
