import axios from 'axios'
import { checkCredentials } from '@/lib/cookie/cookieSpa'
const isTestMode = process.env.NODE_ENV === 'test'

const baseURL = !isTestMode ? process.env.BASE_URL : 'http://13.229.223.31/'
const credentials = checkCredentials()

let OPTIONS = {
  baseURL,
  timeout: 20000,
  headers: {}
}

if (credentials.access_token) OPTIONS.headers['Authorization'] = `Bearer ${credentials.access_token}`

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
