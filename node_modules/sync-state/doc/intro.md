# 指引

> 使用一个组件或模块之前，应当知道它能解决的问题是什么，不能解决的问题是什么。使用的最佳实践是什么？

<!--
示例：

`button.react` 实现了按钮常见的视觉风格，实心、空心、虚线、禁用、加载中、按钮组、图标按钮。默认提供了三种尺寸。

但是不同项目的按钮视觉风格都不一样，不可能项目中直接使用 `button.react` 提供的样式。所以 `button.react` 提供了自定义样式的方式。通过修改格式清晰的 `less` 文件改变视觉风格。只需要修改几个变量，就可以与使用者项目中的按钮样式一致。

并且提供了优雅的 API，使用者不需要重新设计调用按钮的 API。常见的按钮类型 `button.react` 都已考虑到。

-->


某些场景下，我们会使用 `defaultValue`，但有些组件没有提供 `defaultValue` 或者某些组件的输入输出接口设计的不好。

> 输入（value） 输出 （onChange）

比如有些组件：

```js
<Date
    value={new Date().getTime()} // 1521444641396
    onChange={function(date) {
        console.log(date) // Mon Mar 19 2018 15:30:13 GMT+0800 (CST)
    }}
/>
```

这种情况下可以用 `sync-state` 无副作用的实现 defaultValue
