# 文档


> sync-state 是语法糖

```js
<input
    syncState(this, 'form')('name')
/>
// 等于
<input
    value={this.state.form.name}
    onChange={function(e){
        self.setState({form: {name: e.target.value}})
    }}
/>
```

````code
{
    title: '基础使用',
    desc: '',
    html: '<div id="basic-demo" ></div>',
    js: './basic.demo.js',
    source: './Basic.js',
    open: true
}
````
