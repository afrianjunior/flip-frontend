export default class Http {
  constructor (httpClient) {
    this._httpClient = httpClient
  }

  get (url, params = {}, responseType = 'json') {
    try {
      return this._httpClient.request({
        method: 'get',
        url,
        params,
        responseType
      })
    } catch (err) {
      throw err
    }
  }

  post (url, data, config = {}) {
    try {
      return this._httpClient.request({
        method: 'post',
        url,
        data,
        ...config
      })
    } catch (err) {
      throw err
    }
  }

  patch (url, data) {
    try {
      return this._httpClient.request({
        method: 'patch',
        url,
        data
      })
    } catch (err) {
      throw err
    }
  }

  put (url, data) {
    try {
      return this._httpClient.request({
        method: 'put',
        url,
        data
      })
    } catch (err) {
      throw err
    }
  }

  delete (url, data = null) {
    try {
      return this._httpClient.request({
        method: 'delete',
        url,
        data
      })
    } catch (err) {
      throw err
    }
  }
}
