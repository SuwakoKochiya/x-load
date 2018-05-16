<p align="center"><img width="160" src="https://github.com/codexu/_images/blob/master/x-logo/x-load.png?raw=true" alt="x-load"></p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.1.3-blue.svg">
</p>

<h1 align="center">x-load</h1>

x-load是用于H5页面加载时，通过图片的加载的进度控制loading效果的ES6插件。

## 起步

- 通过npm安装

  ```
  npm install x-load --save
  ```

- 通过import引入x-load，通过`new`操作符创建一个新的xLoad对象。

  ```javascript
  // javascript
  import xLoad from 'x-load'
  new xLoad()
  ```

- 创建一个`id="xl-load"`制作loading效果，为正文的包裹层增加`id="xl-wrapper"`(可配置:其他HTMLElement)。

  `<img>`标签摒弃传统src属性，使用`data-src`传入图片链接。

  具有`prior`属性的图片会在loading效果关闭前加载完成，不具有`prior`属性的会在loading效果结束后，默认按顺序加载(可配置:同时加载)。

  ```html
  <!-- html -->
  <div id="xl-load"></div>
  <div id="xl-wrapper">
    <img data-src="./abc.jpg" prior>
  </div>
  ```

## 参数配置

- 自定义配置事例：

  ```javascript
  new xLoad({
    wrapper: document.getElementById('自定义'),
    loader: document.getElementById('自定义'),
    attr: '自定义', // 可代替data-src属性
    prior: '自定义', // 可代替prior属性
    async: 'true or false' // loading结束后是否按序加载剩余图片
  }).then(() => {
    // 当具有prior属性的图片加载全部完成时触发此函数
  })
  ```

- 参数表

  | 参数 | 类型 | 默认值 | 说明 |
  | - | - | - | - | 
  | wrapper | HTMLElement | document.getElementById('xl-wrapper') | 控制正文的包裹层增，使其在文档加载时隐藏，在具有prior属性的图片加载完成后自动显示。 |
  | loader | HTMLElement | document.getElementById('xl-load') | 控制loading元素，使其在文档加载时显示，在具有prior属性的图片加载完成后自动隐藏，同时触发.then() |
  | attr | string | 'data-src' | `<img data-src>`代替src，如果与其他插件参数冲突可以修改此项。 |
  | prior | string | 'prior' | `<img prior>`在loding效果时要加载的图片，如果与其他插件参数冲突可以修改此项。 |
  | async | boolean | 'true' | 控制loading结束后图片加载的方式，默认为按序加载，false可以设置为同时加载。 |

- API

  `then()`

  在创建的xLoad对象，通过`.then(fn())`方法，传入函数,可以在具有prior属性的图片加载完成后触发。

  `percentLoad()` 此项用于显示当前加载百分比

  在创建的xLoad对象，通过`.percentLoad(fn(percent))`方法，传入函数,每一张具有prior属性的图片加载完成时触发，函数传递一个参数`percent`获取当前图片加载的百分比。


  
github：[https://github.com/codexu/x-load](https://github.com/codexu/x-load)
  
源码下载：[https://github.com/codexu/x-load/blob/master/src/utils/x-load.js](https://github.com/codexu/x-load/blob/master/src/utils/x-load.js)

## update

`v1.1.2` `18.05.16` : npm命名冲突，故改名x-load，现已上传npm。

`v1.1.0` `18.05.16` : 新加 api`percentLoad`用于显示当前加载百分比，整个项目已更新为x-build4.2.3版本。

`v1.0.2` `18.05.09` : 解决优先加载的图片报错时卡住的bug。

`v1.0.1` `18.05.08` : 解决按序加载时，图片加载报错时卡住的bug。