svrx-plugin-eruda
---

[![svrx](https://img.shields.io/badge/svrx-plugin-%23ff69b4?style=flat-square)](https://svrx.io/)
[![npm](https://img.shields.io/npm/v/svrx-plugin-eruda.svg?style=flat-square)](https://www.npmjs.com/package/svrx-plugin-eruda)

The svrx plugin for eruda

## Usage

> Please make sure that you have installed [svrx](https://svrx.io/) already.

### Via CLI

```bash
svrx -p eruda
```

### Via API

```js
const svrx = require('@svrx/svrx');

svrx({ plugins: [ 'eruda' ] }).start();
```

## Options

| Arguments | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| container | string |  | container element |
| tool | array or string |  | choose which default tools you want |
| autoScale | boolean | true | auto scale eruda for different viewport settings |
| useShadowDom | boolean | true | use shadow dom for css encapsulation |

[Click here](https://github.com/liriliri/eruda) for more informations

## License

MIT