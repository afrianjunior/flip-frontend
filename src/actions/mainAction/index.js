import { transactionService } from '@/services'

import { FETCH_TRANSACTIONS, FETCH_DETAILS_TRANSACTION } from './types'

export default {

  [FETCH_TRANSACTIONS]: async () => {
    const { data } = await transactionService.getTransactions()

    dispatch({
      type: FETCH_TRANSACTIONS,
      data: data
    })

    return data
  },

  [FETCH_DETAILS_TRANSACTION]: async (payload, dispatch) => {
    const response = await transactionService.getDetailsTransaction(payload)

    dispatch({
      type: FETCH_DETAILS_TRANSACTION,
      data: response
    })
    return response
  }
}
