import {HttpRequest} from './axios'
import {store} from '../store'

const loading = {
  show (msg) {
    console.log('show loading')
    store.dispatch('status/setRequestLoading', true)
    store.dispatch('status/setRequestLoadingText', msg || '加载中')
  },
  hide (msg) {
    console.log('hide loading')
    store.dispatch('status/setRequestLoading', false)
    store.dispatch('status/setRequestLoadingText', msg || '')
  }
}
const errorHandler = (error) => {
  store.dispatch('status/setRequestError', !store.state.status.request.showErrorMsg)
  if (error.response) {
    store.dispatch('status/setRequestErrorMsg', `${error.response.status}: ${error.response.statusText}`)
  } else if (error.request) {
    store.dispatch('status/setRequestErrorMsg', error.message)
  } else if (error.code) {
    store.dispatch('status/setRequestErrorMsg', error.msg)
  } else {
    store.dispatch('status/setRequestErrorMsg', error.message)
  }
}

const instance = new HttpRequest().create()
export const axios = {
  fn (f, ...args) {
    return new Promise(resolve => {
      loading.show()
      f(...args).then(data => {
        loading.hide()
        resolve(data)
      }).catch(err => {
        loading.hide()
        errorHandler(err)
      })
    })
  },
  request (...args) {
    return this.fn(instance.request, ...args)
  },
  get (...args) {
    return this.fn(instance.get, ...args)
  },
  post (...args) {
    return this.fn(instance.post, ...args)
  },
  put (...args) {
    return this.fn(instance.put, ...args)
  },
  delete (...args) {
    return this.fn(instance.delete, ...args)
  }
}
