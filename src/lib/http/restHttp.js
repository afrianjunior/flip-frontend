import axios from 'axios'
const isTestMode = process.env.NODE_ENV === 'test'

const baseURL = !isTestMode ? process.env.BASE_URL : 'http://13.229.223.31/'

let OPTIONS = {
  baseURL,
  timeout: 20000,
  headers: {}
}

const instance = axios.create(OPTIONS)

instance.interceptors.response.use((response) => {
  if (response.status === 0) {
    const error = new Error('Request timeout')
    error.response = response

    return null
  }

  return response
})

export default instance
