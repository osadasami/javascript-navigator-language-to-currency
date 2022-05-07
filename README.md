# Locale to Currency converter

Convert `navigator.language` to currency code. `en-US` -> `USD`

```js
const jnltc = require('jnltc')
console.log(jnltc.langToCurr('en-US'))
// { code: 'USD', name: 'US Dollar', locale: 'en-US' }
```