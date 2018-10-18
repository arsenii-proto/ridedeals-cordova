/* global StatusBar */

export default {
  install (cordova, Vue, opts, assign) {
    cordova.on('deviceready', () => {
      if (typeof StatusBar === 'undefined') {
        return assign()
      }

      return assign(StatusBar)
    })
  }
}
