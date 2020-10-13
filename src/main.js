// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyBLbcCIDChT1K2ikeIA7n22eur0A1_BstI',
  projectId: 'vue-go-25c00'
}
firebase.initializeApp(config)

let app
firebase.auth().onAuthStateChanged(user => {
  /* eslint-disable no-new */
  if (!app) {
    // Todo: これだけで変えせているの？
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
