/* global device */

export default {
  install (cordova, Vue, opts, assign) {
    cordova.on('deviceready', () => {
      if (typeof device === 'undefined' || typeof device.cordova === 'undefined') {
        return assign()
      }

      return assign(device)
    })
  }
}
