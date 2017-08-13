import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyATlMZPWXlRtQUs1qUNnG7GpaSrH4Xd6UE',
      authDomain: 'api-project-440315309030.firebaseapp.com',
      databaseURL: 'https://api-project-440315309030.firebaseio.com',
      projectId: 'api-project-440315309030',
      storageBucket: 'api-project-440315309030.appspot.com'
    })
  }
})
