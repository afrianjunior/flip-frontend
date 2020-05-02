import restHttp from '@/lib/http/restHttp'

import HttpService from './HttpService'
import TransactionService from './TransactionService'

export const httpService = new HttpService(restHttp)
export const transactionService = new TransactionService(httpService)
