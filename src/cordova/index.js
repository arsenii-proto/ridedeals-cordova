import device from './plugins/device'
import statusBar from './plugins/statusBar'

const pluginsList = {
  device,
  statusBar
}

const plugins = {}
const events = {}

const cordova = {
  ready: false,
  on (event, callback) {
    if (!(event in events)) {
      document.addEventListener(event, () => {
        events[event].forEach(callback => callback())
      }, false)

      events[event] = []
    }
    events[event].push(callback)
  }
}

export default {
  install: (Vue, opts) => {
    Vue.prototype.$cordova = Vue.cordova = cordova

    document.addEventListener('deviceready', () => {
      cordova.ready = true
    }, false)

    Object.keys(pluginsList).forEach(plugin => {
      pluginsList[plugin].install(cordova, Vue, opts, bridge => {
        if (bridge) {
          plugins[plugin] = cordova[plugin] = bridge
        }
      })
    })
  }
}
