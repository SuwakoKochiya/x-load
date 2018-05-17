import xLoad from '../utils/x-load.js'

let xload = new xLoad()
let percentEl = document.getElementById('percent')

xload.percentLoad(percent => {
  percentEl.innerHTML = `加载进度:${percent * 100 + '%'}`
})