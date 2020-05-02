import { TRANSACTION } from '@/constants/endpoints'

export default class JobService {
  constructor (httpService) {
    this._http = httpService
  }

  async getTransactions () {
    try {
      const { data } = await this._http.get(TRANSACTION)

      return data
    } catch (error) {
      throw error.response.data
    }
  }
}
