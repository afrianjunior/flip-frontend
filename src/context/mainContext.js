import React, { useReducer, useContext } from 'react'
import { node } from 'prop-types'
import {
  FETCH_TRANSACTIONS,
  FETCH_DETAILS_TRANSACTION
} from '@/actions/mainAction/types'

const INITIAL_STATE = {
  transactions: [],
  transaction: {
    id: 'FT13634',
    amount: 4331285,
    unique_code: 452,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '6470264356',
    beneficiary_name: 'Hal Matthams',
    beneficiary_bank: 'bri',
    remark: 'sample remark',
    created_at: '2020-05-01 14:57:57',
    completed_at: '2020-05-01 14:57:57',
    fee: 0
  }
}

const MainContext = React.createContext()

const useMainReducer = (reducer, defaultState) => {
  return useReducer(reducer, defaultState, initState => initState)
}

const Mutations = (state, action) => {
  const { data } = action
  return {
    [FETCH_TRANSACTIONS]: () => {
      return {
        ...state,
        transactions: data
      }
    },
    [FETCH_DETAILS_TRANSACTION]: () => {
      const { transactions } = state
      const transaction = transactions.find(transaction => transaction.id === data)
      return {
        ...state,
        transaction
      }
    }
  }
}

const Reducer = (state, action) => {
  const { type } = action

  const mutation = Mutations(state, action)
  return mutation[type]()
}

export const MainProvider = props => {
  const MainStateContext = INITIAL_STATE
  return <MainContext.Provider value={useMainReducer(Reducer, MainStateContext)}>{props.children}</MainContext.Provider>
}

MainProvider.propTypes = {
  children: node.isRequired
}

export const UseMainContextValue = () => useContext(MainContext)
