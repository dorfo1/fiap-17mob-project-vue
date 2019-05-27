import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyCXW2r9PSnSI4cecckPvE-vN8QENHvu_QE",
      authDomain: "trabalho-vue.firebaseapp.com",
      databaseURL: "https://trabalho-vue.firebaseio.com",
      projectId: "trabalho-vue",
      storageBucket: "trabalho-vue.appspot.com",
      messagingSenderId: "605944002205",
      appId: "1:605944002205:web:a325b601cabc7710"
    })
  }
}).$mount('#app')
