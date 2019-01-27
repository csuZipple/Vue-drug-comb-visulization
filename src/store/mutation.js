import {dataConstant, statusConstant} from './constant'

export const dataMutations = {
  [dataConstant.INIT_STORE] (state) {
    if (localStorage.getItem('store')) {
      let old = JSON.parse(localStorage.getItem('store'))
      if (old.data.version && old.data.version < state.version) {
        old.data = Object.assign({}, old.data, state)
      } else {
        old.data = Object.assign({}, state, old.data) // Todo: status的重置应该放在statusMutations中
      }
      old.status.request.errMsg = '' // 不初始化为''的话，会在恢复缓存的时候触发App.vue中的watch
      this.replaceState(old)
    }
  }
}

export const statusMutations = {
  [statusConstant.SET_REQUEST_LOADING] (state, flag) {
    state.request.showLoading = flag
  },
  [statusConstant.SET_REQUEST_LOADING_TEXT] (state, text) {
    state.request.loadingMsg = text
  },
  [statusConstant.SET_REQUEST_ERROR] (state, flag) {
    state.request.showErrorMsg = flag
  },
  [statusConstant.SET_REQUEST_ERROR_MSG] (state, errMsg) {
    state.request.errMsg = errMsg
  },
  [statusConstant.SAVE_REQUEST_QUEUE] (state, cancel) {
    state.request.queue.push(cancel)
  },
  [statusConstant.CLEAR_REQUEST_QUEUE] (state) {
    state.request.queue = []
  }
}
