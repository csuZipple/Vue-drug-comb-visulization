import axios from 'axios'
import {store} from '../store'
import {ApiConfig} from '../config/ApiConfig'
export class HttpRequest {
  interceptors (instance) {
    instance.interceptors.request.use(config => {
      config.cancelToken = new axios.CancelToken(cancel => {
        store.dispatch('status/saveRequestQueue', cancel)
      })
      return config
    }, error => Promise.reject(error))

    instance.interceptors.response.use(res => {
      const {data, status} = res
      if (status === 200) {
        if (data.code === 200) {
          return data.data
        } else {
          return Promise.reject(data)
        }
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject(`网络错误. ${status}`)
      }
    }, error => {
      let config = error.config
      if (!config || !config.retry) return Promise.reject(error)
      let delay
      if (config.retryDelay) { // ms
        if (config.retryDelay instanceof Array) {
          if (config.retryDelay.length === config.retry) {
            delay = config.retryDelay[config.__retryCount]
          } else {
            delay = 1000
          }
        } else {
          delay = Number(config.retryDelay)
        }
      } else {
        delay = 1000
      }
      config.__retryCount = config.__retryCount || 0
      if (config.__retryCount >= config.retry) return Promise.reject(error)
      let backOff = new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, delay)
      })
      config.__retryCount += 1
      return backOff.then(() => {
        return instance(config)
      })
    })
  }

  create (options) {
    options = Object.assign({}, options, ApiConfig)
    const instance = axios.create(options)
    this.interceptors(instance)
    return instance
  }
}
