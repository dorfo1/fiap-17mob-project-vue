import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: {
      id: '',
      nome: '',
      endereco: ''
    }
  },
  mutations: {
    setUsuarioId(state, payload) {
      state.usuario.id = payload
    }
  },
  actions: {
    cadastrarUsuario({ commit }, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.senha)
        .then(usuario => commit('setUsuarioId', usuario.user.uid))
        .catch(error => console.log(error))
    },
    logarUsuario({ commit }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.senha)
        .then(usuario => commit('setUsuarioId', usuario.user.uid))
        .catch(error => console.log(error))
    }
  },
  getters: {
    usuario(state) {
      return state.usuario
    }
  }
})
