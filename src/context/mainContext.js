import React, { useReducer, useContext } from 'react'
import { node } from 'prop-types'
// import {
//   NEXT_STEP,
//   PREV_STEP
// } from '@/actions/createJobAction/types'

const INITIAL_STATE = {}

const MainContext = React.createContext()

const useMainReducer = (reducer, defaultState) => {
  return useReducer(reducer, defaultState, initState => initState)
}

const Mutations = (state, action) => {
  const { data } = action
  return {
    // [NEXT_STEP]: () => {
    //   const { currentStep } = state
    //   const nextStep = currentStep + 1
    //   return {
    //     ...state,
    //     currentStep: nextStep,
    //     step: STEPS[nextStep]
    //   }
    // },
    // [PREV_STEP]: () => {
    //   const { currentStep } = state
    //   const prevStep = currentStep - 1
    //   return {
    //     ...state,
    //     currentStep: prevStep,
    //     step: STEPS[prevStep]
    //   }
    // }
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
