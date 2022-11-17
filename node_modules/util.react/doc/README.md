# 文档

## icon

> `@icon-name` use `icon.react` 

````code
{
    title: 'icon',
    desc:'',
    html:'<div id="icon-demo"></div>',
    source: './icon.demo.js',
    side: true
}
````

## ref

````code
{
    title: 'ref',
    desc:'',
    html:'<div id="ref-demo"></div>',
    source: './ref.demo.js',
    side: true
}
````

## themes

> Use themes-classname https://github.com/onface/themes-classname

````code
{
    title: 'themes',
    desc:'',
    html:'<div id="themes-demo"></div>',
    source: './themes.demo.js',
    side: true
}
````

## createClassNames



````code
{
    title: 'themes',
    desc: '',
    html: '<div id="create-classnames-demo"></div>',
    source: './createClassNames.demo.js',
    side: true
}
````

## contains

````code
{
    title: 'contains',
    desc: '',
    html: '<div id="contains-demo"></div>',
    source: './contains.demo.js',
    side: true
}
````

### childrenToArray

```js
console.info('childrenToArray')
util.childrenToArray(this.props.children)
```

### flatArray

组件可能被这样使用

```html
<Select>
    {
        data.map(function (item) {
            returm (
                <Option value={item.value} >{item.text}</Option>
            )
        })
    }
    {
        this.state.loading?
        (
            <Option disabled >loading...</Option>
        ):null
    }
</Select>
```

获取的 `this.props.children` 类似于

```js
[
    [
        (<Option value="a" >a</Option>),
        (<Option value="b" >b</Option>)
    ],
    (<Option disabled >loading</Option>)
]
```

此时就需要 `childrenToArray` + `flatArray`

```js
console.info('flatArray')
console.log(
    util.flatArray([
        'flat', 1,2,3
    ])
)
console.log(
    util.flatArray([
        'flat', 1,['a', 'b', 'c'],3
    ])
)
```

## flatElement

```js
util.flatElement(this.props.children)
// 源码
function flatElement (children) {
    return util.flatArray(util.childrenToArray(children)).filter(function (element) {
        return React.isValidElement(element)
    })
}
```
