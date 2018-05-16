import xLoader from '../utils/x-loader'

let xloader = new xLoader()
let percentEl = document.getElementById('percent')

xloader.percentLoad(percent => {
  percentEl.innerHTML = `加载进度:${percent}`
})