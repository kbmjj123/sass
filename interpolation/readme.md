# 插值
> sass中几乎到处都可以使用插值，这与ES6.0中的`模版字符串`有点类似，通过插值(使用标志符：`#{变量/常量/表达式语句}`)，将插值语句的执行结果，输出到css样式中，
> 以下整理关于sass中插值可以使用的场景
>

1. 样式代码中的选择器: `.content-#{$name}{width: 20px}`
2. 样式属性名称: `.content-name{border-#{propName}: 2px;} `
3. 样式属性值: `.content-name{border-radius: #{$radius};}`
4. 艾特规则(@keyframes、@supports) `@keyframe #{$name}{...}`
5. @extend: `.content{ @extend .#{#name}-icon; }`
6. css中的import语句拼接: `font: url('..#{$name}..')`
7. 字符串: 可以这么理解，上述的所有拼接都是字符串拼接的方式！

