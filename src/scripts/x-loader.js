class xLoader {
  constructor(opts) {
    // 判断是否传入参数对象，如果没有创建一个空对象
    opts = opts ? opts : new Object()
    this.wrapper = opts.wrapper ? opts.wrapper : document.getElementById('xl-wrapper')
    this.loader = opts.loader ? opts.loader : document.getElementById('loader')
    // data-src，图片链接，为防止与其他插件命名冲突
    this.attr = opts.attr ? opts.attr : 'data-src'
    // 加载方式，默认为按序加载，配置false为同步加载
    this.async = opts.async ? opts.async : true
    // 注册图片加载完成事件
    this.imgDone = new Event('imgDone')
    this.el = document.querySelectorAll(`img[${this.attr}]`) // 获取<img>具有data-src属性的元素x
    this.priorityArray = new Array() // 预先加载图片数组
    this.othersArray = new Array() // 后续加载图片数组
    this.init()
  }
  init() {
    this.wrapper.style.display = 'none'
    // 遍历dom 为不同加载顺序的img分组 priorityArray(首批加载) othersArray(后续加载)
    this.el.forEach(element => {
      if (element.hasAttribute('data-priority')) {
        this.priorityArray.push(element)
      } else {
        this.othersArray.push(element)
      }
    });
    // 执行首次加载
    this.priorityLoad()
    console.info(this);
    return this
  }
  priorityLoad() {
    let count = 0
    let _this = this
    this.priorityArray.forEach(element => {
      element.src = element.getAttribute(this.attr)
      element.onload = () => {
        count++
        if (count >= this.priorityArray.length) {
          this.wrapper.style.display = 'block'
          if (this.loader) {
            this.loader.style.display = 'none'
          }
          window.dispatchEvent(this.imgDone)
          _this.othersLoad()
        }
      }
    })
  }
  othersLoad() {
    if (this.async) {
      let othersArray = this.othersArray
      let count = 0;
      let _this = this
      let recursion = function () {
        if (count < othersArray.length) {
          let element = othersArray[count]
          element.src = element.getAttribute(_this.attr)
          element.onload = () => {
            count++
            recursion()
          }
        }
      }
      recursion()
    } else {
      this.othersArray.forEach(element => element.src = element.getAttribute(this.attr))
    }
  }
  then(fn) {
    window.addEventListener('imgDone', () => fn(this))
  }
}
export default xLoader