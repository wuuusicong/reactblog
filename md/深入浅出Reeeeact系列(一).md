# 深入浅出Reeeeact系列(一)

## Why React?

1. React采用SPA(单页应用)原则可以构建复杂的单页应用(single-page application SPA)网站。单页应用的最大优势可以动态重写当前的页面来与用户交互，而并不需要重新加载整个页面。这样的机制使得单页应用拥有流畅的性能。单页应用采用前后端分离，后端只负责处理数据提供接口，页面逻辑和渲染由前端来操作。SPA应用使得前端代码组件化，模块化以及架构设计变得尤为重要。
2. React 采用组件式开发，使得代码更加容易得到复用。（PS:组件可以看做是构成一个页面的不同块）。
3. 采用单向响应的数据流。在React里把用户看到的网站界面定义为UI,这个UI是由一个render函数(render)接受数据(data)作为参数，输出得到用户界面。在进行交互操作的时候，要做的就是更新data，UI会根据data进行自动的响应和更新。
4. React通过虚拟DOM（virtual DOM) 高效渲染DOM元素，使得网站性能大大提升。<!--DOM是HMTL文本的抽象表达形式，HMTL中每个元素对应一个DOM节点，浏览器通过构建DOM树并渲染出UI界面，通过改变DOM树上的界面改变网页内容。使用jquery 操作dom，会引起浏览器对网页进行重新布局，重新绘制，这个过程很慢-->

## 搭建一个



