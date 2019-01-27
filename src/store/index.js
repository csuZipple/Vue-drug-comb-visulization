import Vue from 'vue'
import Vuex from 'vuex'
import {data, status} from './state'
import {dataMutations, statusMutations} from './mutation'
import {dataActions, statusActions} from './action'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    data: {
      namespaced: true,
      state: data,
      mutations: dataMutations,
      actions: dataActions,
      getters: {

      }
    },
    status: {
      namespaced: true,
      state: status,
      mutations: statusMutations,
      actions: statusActions,
      getters: {
        showErrMsg: state => state.request.showErrorMsg
      }
    }
  }
})
store.subscribe((mutation, state) => {
  let oldState = JSON.parse(localStorage.getItem('store'))
  let store = oldState && oldState !== '' ? Object.assign(oldState, state) : state
  localStorage.setItem('store', JSON.stringify(store))
})
export {
  store
}
