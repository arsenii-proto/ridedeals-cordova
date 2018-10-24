import Vue from 'vue'
import device from './plugins/device'
import statusBar from './plugins/statusBar'

const plugins = {
  device,
  statusBar
}

const cordova = () => {}

var ready = new Promise((resolve, reject) => {
  cordova.__resolve = resolve
})

export default {
  install: () => {
    Vue.prototype.$cordova = Vue.cordova = new Proxy(cordova, {
      apply (target, thisArg, args) {
        return ready
      }
    })

    Vue.prototype.$cordova().then(() => {
      Object.keys(plugins).forEach(it => {
        if (plugins[ it ].facade instanceof Function) {
          cordova[ it ] = plugins[ it ].facade(cordova, Vue)
        }
      })
    })

    document.addEventListener('deviceready', () => {
      cordova.__resolve()
    }, false)
  }
}
