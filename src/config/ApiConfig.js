const devUrl = 'http://localhost:8080/'
const productUrl = 'http://project.sumixer.com/api'
const baseUrl = process.env.NODE_ENV === 'development' ? devUrl : productUrl
export const ApiConfig = {
  baseURL: baseUrl,
  timeout: 10000
}
