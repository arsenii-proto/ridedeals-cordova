/* global StatusBar */

export default {
  facade () {
    if (typeof StatusBar === 'undefined') {
      return null
    }

    return StatusBar
  }
}
