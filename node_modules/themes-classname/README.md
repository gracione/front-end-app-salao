# themes-classname

```shell
npm i themes-classname --save
```

```js
var themesClassName = require('themes-classname')
themesClassName({
    themes: 'dark',
    prefixClassName: 'm-modal'
})
// "m-modal--themes-dark"
themesClassName({
    themes: 'dark big',
    prefixClassName: 'm-modal'
})
// "m-modal--themes-dark m-modal--themes-big"
themesClassName({
    themes: 'dark big',
    prefixClassName: 'm-select'
}, 'menu')
// "m-select-menu--themes-dark m-select-menu--themes-big"
```
