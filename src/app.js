/* 自适应布局解决方案 */
import './scripts/hotcss.js'

/* 模版及样式文件。 */
import './index.pug'
import './styles/app.styl'

import xLoader from './scripts/x-loader'

new xLoader().then(() => {
  // alert('loading结束，点击确定开始加载剩余图片')
})