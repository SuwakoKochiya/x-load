###### x-loader v1.0.0

## x-loader.js 是什么

x-loader是用于H5页面加载时，通过图片的加载的进度控制loading效果的ES6插件。

## 起步

- 第一步。

  通过import引入x-loader，通过`new`操作符创建一个新的xLoader对象。

  ```javascript
  // javascript
  import xLoader from './scripts/x-loader'
  new xLoader()
  ```

- 第二步。

  创建一个`id="xl-loader"`制作loading效果，为正文的包裹层增加`id="xl-wrapper"`(可配置:其他HTMLElement)。

  `<img>`标签摒弃传统src属性，使用`data-src`传入图片链接。

  具有`prior`属性的图片会在loading效果关闭前加载完成，不具有`prior`属性的会在loading效果结束后，默认按顺序加载(可配置:同时加载)。

  ```html
  <!-- html -->
  <div id="xl-loader"></div>
  <div id="xl-wrapper">
    <img data-src="./abc.jpg" prior>
  </div>
  ```

## 参数配置

- 自定义配置事例：

  ```javascript
  new xLoader({
    wrapper: document.getElementById('自定义'),
    loader: document.getElementById('自定义'),
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
| loader | HTMLElement | document.getElementById('xl-loader') | 控制loading元素，使其在文档加载时显示，在具有prior属性的图片加载完成后自动隐藏，同时触发.then() |
| attr | string | 'data-src' | `<img data-src>`代替src，如果与其他插件参数冲突可以修改此项。 |
| prior | string | 'prior' | `<img prior>`在loding效果时要加载的图片，如果与其他插件参数冲突可以修改此项。 |
| async | boolean | 'true' | 控制loading结束后图片加载的方式，默认为按序加载，false可以设置为同时加载。 |

- API

  `then()`

  在创建的xLoader对象，通过`.then(fn())`方法，传入函数,可以在具有prior属性的图片加载完成后触发。