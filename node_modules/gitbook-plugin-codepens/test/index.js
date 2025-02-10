const tester = require('gitbook-tester')
tester
  .builder()
  .withContent(
    '### 项目指南\n\n#### 项目结构概览\n\n本项目分为前言，html，css，javascript，JavaScript设计模式，vue源码学习，webpack源码学习，babel源码学习，shell脚本学习等模块。\n\n#### 模块概览\n\n##### HTML\n\n主要介绍一些HTML方面的基础知识，帮助自己巩固一下html知识。\n目前还没有开始写这一块，后续会加上。\n\n##### CSS\n\n会介绍一些css的基础，以及CSS的一些效果实现以及原理部分。\n\n##### JavaScript\n\nJavaScript作为前端的重中之重，应该深入了解一下各方面的知识，包括ES5,ES6。。。等等。以及mdn等等一些知识。\n\n除了学习API使用，还得学习一下js的原理，事件循环eventloop，定时器等机制。\n\n##### JavaScript设计模式\n\n设计模式作为工程化中常用到的一种数据结构，深入了解有助于我们编写可复用，可扩展的代码，对于理解各种框架的原理也很有帮助。\n\n##### Vue源码学习\n\nVue作为现在最流行的前端框架之一，深入理解其实现机制，学习其中的优秀思想，对于晋升自己的能力水平，理解js的原理，是一个很好的途径。\n\n\n##### webpack源码学习\n\nWebpack是现在前端工程化，最常用的框架。包括Angular，Vue，React等框架都使用到了Webpack作为其打包工具。所以学习Webpack也是丰富知识技能的一部分。\n目前还没有开始写这一块，后续会加上。\n\n##### babel源码学习\n\n在ES6，甚至是ES10出现的今天，鉴于历史原因，浏览器还没有完全支持这些api，但是babel提供了完善的编译机制，去支持这些新的api，学习babel的源码，\n可以让我们知道其背后的原理。\n目前还没有开始写这一块，后续会加上。\n\n##### shell脚本学习\n\nshell是linux和mac自带的脚本语言，可以有效的加快工作中的效率。包括移动，复制，自动化等。\n\n[](codepen://halaproliu/NWKXvVW)\n'
  )
  .withBookJson({ plugins: ['codepen'] })
  .create()
  .then(function(result) {
    console.log(result[0].content)
  })
