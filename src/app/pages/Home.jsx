import React, { useState, useEffect } from 'react'
import { UITitle, UISubTitle, UIText, UIInput, UISelect, UIFlexBox } from 'ui'
import { toRupiah } from '@/lib/utils'

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

const _DUMMY_DATA = {
  FT13634: {
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
  },
  FT25988: {
    id: 'FT25988',
    amount: 4562794,
    unique_code: 583,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '9217820691',
    beneficiary_name: 'Beck Glover',
    beneficiary_bank: 'bsm',
    remark: 'sample remark',
    created_at: '2020-05-01 14:56:57',
    completed_at: '2020-05-01 14:57:57',
    fee: 0
  },
  FT20515: {
    id: 'FT20515',
    amount: 4742511,
    unique_code: 647,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '6976202189',
    beneficiary_name: 'Jake Castillo',
    beneficiary_bank: 'muamalat',
    remark: 'sample remark',
    created_at: '2020-05-01 14:55:57',
    completed_at: '2020-05-01 14:57:57',
    fee: 0
  },
  FT25579: {
    id: 'FT25579',
    amount: 2278335,
    unique_code: 137,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '3747431606',
    beneficiary_name: 'Sufyan Kramer',
    beneficiary_bank: 'bca',
    remark: 'sample remark',
    created_at: '2020-05-01 14:54:57',
    completed_at: '2020-05-01 14:57:57',
    fee: 0
  },
  FT41441: {
    id: 'FT41441',
    amount: 4221600,
    unique_code: 481,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '2578015813',
    beneficiary_name: 'Sufyan Kramer',
    beneficiary_bank: 'muamalat',
    remark: 'sample remark',
    created_at: '2020-05-01 14:53:57',
    completed_at: '2020-05-01 14:57:57',
    fee: 0
  },
  FT68887: {
    id: 'FT68887',
    amount: 1006301,
    unique_code: 285,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '1349888728',
    beneficiary_name: 'Jake Castillo',
    beneficiary_bank: 'mandiri',
    remark: 'sample remark',
    created_at: '2020-05-01 14:52:57',
    completed_at: '2020-05-01 14:57:57',
    fee: 0
  },
  FT78506: {
    id: 'FT78506',
    amount: 2805107,
    unique_code: 360,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '3108348444',
    beneficiary_name: 'Jethro Cox',
    beneficiary_bank: 'bsm',
    remark: 'sample remark',
    created_at: '2020-05-01 14:51:57',
    completed_at: '2020-05-01 14:57:57',
    fee: 0
  },
  FT70112: {
    id: 'FT70112',
    amount: 2844809,
    unique_code: 423,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '7692772265',
    beneficiary_name: 'Selin Dawe',
    beneficiary_bank: 'bca',
    remark: 'sample remark',
    created_at: '2020-05-01 14:50:57',
    completed_at: '2020-05-01 14:57:57',
    fee: 0
  },
  FT44939: {
    id: 'FT44939',
    amount: 3227434,
    unique_code: 717,
    status: 'PENDING',
    sender_bank: 'bni',
    account_number: '5647061857',
    beneficiary_name: 'Shanice Harwood',
    beneficiary_bank: 'mandiri',
    remark: 'sample remark',
    created_at: '2020-05-01 14:49:57',
    completed_at: '2020-05-01 14:57:57',
    fee: 0
  },
  FT14079: {
    id: 'FT14079',
    amount: 1168700,
    unique_code: 228,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '9089195438',
    beneficiary_name: 'Hal Matthams',
    beneficiary_bank: 'bsm',
    remark: 'sample remark',
    created_at: '2020-05-01 14:48:57',
    completed_at: '2020-05-01 14:57:57',
    fee: 0
  }
}

function Home () {
  const [sort, setSort] = useState(_SORT_TYPES[0].value)
  const [transactions, setTransactions] = useState([])
  const totalTransaction = 5000000

  function mounted () {
    const transactionData = Object.entries(_DUMMY_DATA).map(([_, data]) => data)
    setTransactions(transactionData)
  }

  useEffect(mounted, [])

  function sortChangeHandler (event) {
    setSort(event.target.value)
  }

  function TransactionCards () {
    return transactions.map((transaction, key) => <TransactionCard key={`transaction-${key}`} transaction={transaction} />)
  }

  return (
    <>
      <UITitle>Daftar Transaksi</UITitle>
      <UISubTitle>Halo kak!</UISubTitle>

      <UIText tag="p">
        Kamu telah melakukan transaksi sebesar
        <UIText tag="span" weight="bold" className="ui-text_primary"> {toRupiah(totalTransaction)} </UIText>
        sejak menggunakan Flip.
      </UIText>

      <UIFlexBox className="margin-top_lg">
        <UIInput placeholder="Cari nama atau bank" />
        <UISelect value={sort} changeHandler={sortChangeHandler} collections={_SORT_TYPES} />
      </UIFlexBox>

      <div className="margin-top_lg">
        <TransactionCards />
      </div>
    </>
  )
}

export default Home
