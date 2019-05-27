import Vue from 'vue'
import Router from 'vue-router'
import Perfil from './views/Main/Perfil.vue'
import Cadastro from './views/Usuario/Cadastro.vue'
import Login from './views/Usuario/Login.vue'
import Endereco from './views/Main/Endereco.vue'
import Main from './views/Main/Main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: Perfil
    },
    {
      path: '/endereco',
      name: 'endereco',
      component: Endereco
    }
  ]
})
