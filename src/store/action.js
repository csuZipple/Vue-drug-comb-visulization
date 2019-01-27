import {dataConstant, statusConstant} from './constant'
export const dataActions = {
  initStore ({commit}) {
    commit(dataConstant.INIT_STORE)
  }
}
export const statusActions = {
  setRequestLoading ({commit}, flag) {
    commit(statusConstant.SET_REQUEST_LOADING, flag)
  },
  setRequestLoadingText ({commit}, text) {
    commit(statusConstant.SET_REQUEST_LOADING_TEXT, text)
  },
  setRequestError ({commit}, flag) {
    commit(statusConstant.SET_REQUEST_ERROR, flag)
  },
  setRequestErrorMsg ({commit}, errMsg) {
    commit(statusConstant.SET_REQUEST_ERROR_MSG, errMsg)
  },
  saveRequestQueue ({commit}, c) {
    commit(statusConstant.SAVE_REQUEST_QUEUE, c)
  },
  clearRequestQueue ({commit}) {
    commit(statusConstant.CLEAR_REQUEST_QUEUE)
  }
}
