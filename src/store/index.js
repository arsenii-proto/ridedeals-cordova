import 'es6-promise/auto'

export default {
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
}
