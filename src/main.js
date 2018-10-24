// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import Cordova from './cordova'
import router from './router'
import store from './store'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(Cordova)

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'file:///android_asset/www/cordova.js')
  document.body.appendChild(cordovaScript)
}

firebase.initializeApp({
  apiKey: 'AIzaSyAQb8NpWhD0S6GOO9V2XdbgaDNNVdLNWQ4',
  authDomain: 'arsenii-ride-deals.firebaseapp.com',
  databaseURL: 'https://arsenii-ride-deals.firebaseio.com',
  projectId: 'arsenii-ride-deals',
  storageBucket: 'arsenii-ride-deals.appspot.com',
  messagingSenderId: '414909120149'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

window.Vue = Vue
window.fire = firebase
