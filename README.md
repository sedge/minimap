# minimap

Simple data mapping and string templating without the bells and whistles.

## Require it

`var minimap = require('minimap');`

## Use it

```JavaScript
var template = 'Welcome to {siteTitle}, {name}!';
var str = minimap.map({
  siteTitle: 'NPM',
  name: 'John'
}, template);

console.log(str) // Welcome to NPM, John!
```

### Always replace

`minimap.always({'token' : 'value'});`

### Never replace

`minimap.never('token');`
