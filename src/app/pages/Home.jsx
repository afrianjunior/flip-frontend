import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UseMainContextValue } from '@/context/mainContext'
import mainAction from '@/actions/mainAction'
import { FETCH_TRANSACTIONS } from '@/actions/mainAction/types'
import { UITitle, UISubTitle, UIText, UIInput, UISelect, UIFlexBox } from 'ui'
import { toRupiah, sortAlphabeticallyByKey } from '@/lib/utils'
import debounce from '@/lib/debounce'

import { TransactionCard } from '@/app/components'

const _SORT_TYPES = [
  {
    value: 'A-Z',
    label: 'Nama A-Z'
  },
  {
    value: 'Z-A',
    label: 'Nama Z-A'
  },
  {
    value: 'newest date',
    label: 'Tanggal terbaru'
  },
  {
    value: 'oldest date',
    label: 'Tanggal terlama'
  }
]

const debounceSearch = debounce(600)

function Home () {
  const [StateContext, dispatch] = UseMainContextValue()
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(_SORT_TYPES[0].value)
  const [transactionsDisplay, setTransactionsDisplay] = useState([])

  const { transactions } = StateContext

  const totalTransaction = 5000000

  async function mounted () {
    const transactionData = await mainAction[FETCH_TRANSACTIONS](dispatch)
    setTransactionsDisplay(transactionData)
  }

  useEffect(() => {
    mounted()
  }, [])
  useEffect(() => {
    sortChangeHandler()
  }, [search])

  function searchHandler (event) {
    const value = event.target.value
    debounceSearch.exec(function () {
      filterSearch(value.toLowerCase())
    })
  }

  async function filterSearch (value) {
    const result = transactions.filter(transaction => {
      const beneficiaryName = transaction.beneficiary_name.toLowerCase()
      const senderBank = transaction.sender_bank.toLowerCase()
      const beneficiaryBank = transaction.beneficiary_bank.toLowerCase()
      return beneficiaryName.includes(value) || senderBank.includes(value) || beneficiaryBank.includes(value)
    })

    setTransactionsDisplay(result)
    setSearch(value)
  }

  function sortAtoZ () {
    const result = sortAlphabeticallyByKey(transactionsDisplay, 1, 'beneficiary_name')
    setTransactionsDisplay(result)
  }

  function sortZToA () {
    const result = sortAlphabeticallyByKey(transactionsDisplay, -1, 'beneficiary_name')
    setTransactionsDisplay(result)
  }

  function sortNewestDate () {
    const result = sortAlphabeticallyByKey(transactionsDisplay, -1, 'completed_at')
    setTransactionsDisplay(result)
  }

  function sortOldestDate () {
    const result = sortAlphabeticallyByKey(transactionsDisplay, 1, 'completed_at')
    setTransactionsDisplay(result)
  }

  function sortChangeHandler (event) {
    if (!transactionsDisplay.length) return

    let value = sort
    if (event) {
      value = event.target.value
    }
    if (value === _SORT_TYPES[0].value) sortAtoZ()
    if (value === _SORT_TYPES[1].value) sortZToA()
    if (value === _SORT_TYPES[2].value) sortNewestDate()
    if (value === _SORT_TYPES[3].value) sortOldestDate()

    setSort(value)
  }

  function TransactionCards () {
    return transactionsDisplay.map((transaction) => (
      <Link key={`transaction-${transaction.id}`} to={`/details?id=${transaction.id}`}>
        <TransactionCard transaction={transaction} />
      </Link>
    ))
  }

  return (
    <>
      <UITitle>Daftar Transaksi</UITitle>
      <UISubTitle>Halo kak!</UISubTitle>

      <UIText tag="p">
        Kamu telah melakukan transaksi sebesar
        <UIText tag="span" weight="bold" color="orange"> {toRupiah(totalTransaction)} </UIText>
        sejak menggunakan Flip.
      </UIText>

      <UIFlexBox className="margin-top_lg">
        <UIInput icon="search" onChange={searchHandler} placeholder="Cari nama atau bank" />
        <UISelect value={sort} changeHandler={sortChangeHandler} collections={_SORT_TYPES} />
      </UIFlexBox>

      <div className="margin-top_lg">
        <TransactionCards />
      </div>
    </>
  )
}

export default Home
