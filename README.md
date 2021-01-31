# opinionated-duration-format

Convert a duration in seconds to `m:ss`, `mm:ss`, or `h:mm:ss`.

### 1. Installation

https://www.npmjs.com/package/@percuss.io/opinionated-duration-format

```shell
$ npm install @percuss.io/opinionated-duration-format
```

### 2. Usage

```javascript
const format = require('@percuss.io/opinionated-duration-format');

format(37) // '0:37'
format(55.5) // '0:55'
format(178) // '2:58'
format(817) // '13:37'
format(2138.167) // '35:38'
format(5859) // '1:37:39'
```
