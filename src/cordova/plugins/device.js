/* global device */

export default {
  facade () {
    if (typeof device === 'undefined' || typeof device.cordova === 'undefined') {
      return null
    }

    return device
  }
}
