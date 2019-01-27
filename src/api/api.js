import {axios} from '../axios/api.request'

export const getOriginName = (tableIndex) => {
  return axios.get(`/convert/origin/${tableIndex}`)
}

export const getDrugCombPagination = (tableIndex, page, size) => {
  return axios.get(`/convert/origin/${tableIndex}/page`, {
    params: {
      page: page,
      size: size
    },
    retry: 1, // 设置超时重发
    retryDelay: 1000
  })
}
