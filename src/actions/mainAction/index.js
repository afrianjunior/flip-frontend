import { transactionService } from '@/services'

import { FETCH_TRANSACTIONS, FETCH_DETAILS_TRANSACTION } from './types'

export default {
  [FETCH_TRANSACTIONS]: async (dispatch) => {
    const response = await transactionService.getTransactions()
    const transactionData = Object.entries(response).map(([_, transaction]) => transaction)
    dispatch({
      type: FETCH_TRANSACTIONS,
      data: transactionData
    })

    return transactionData
  },

  [FETCH_DETAILS_TRANSACTION]: async (id, transactions, dispatch) => {
    if (!transactions.length) {
      const response = await transactionService.getTransactions()
      const transactionData = Object.entries(response).map(([_, transaction]) => transaction)
      dispatch({
        type: FETCH_TRANSACTIONS,
        data: transactionData
      })
    }

    dispatch({
      type: FETCH_DETAILS_TRANSACTION,
      data: id
    })

    return id
  }
}
