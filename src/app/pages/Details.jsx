import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { UseMainContextValue } from '@/context/mainContext'
import mainAction from '@/actions/mainAction'
import { FETCH_DETAILS_TRANSACTION } from '@/actions/mainAction/types'
import { UITitle, UIContentBox, UIText, UIFlexBox, UIButton } from 'ui'
import { TransactionLabel, Field } from '@/app/components'

import { toRupiah, dateFormat } from '@/lib/utils'

const _DUMMY_DATA = {
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

function Details (props) {
  const [StateContext, dispatch] = UseMainContextValue()
  const [IDTransaction, setIDTrasaction] = useState(null)

  const { transactions, transaction } = StateContext

  function useQuery () {
    return new URLSearchParams(props.location.search)
  }

  function mounted () {
    const query = useQuery()
    mainAction[FETCH_DETAILS_TRANSACTION](query.get('id'), transactions, dispatch)
    setIDTrasaction(query.get('id'))
  }

  useEffect(mounted, [])

  const senderBank = transaction.sender_bank.toUpperCase()
  const beneficiaryBank = transaction.beneficiary_bank.toUpperCase()
  const beneficiaryName = transaction.beneficiary_name.toUpperCase()
  const accountNumber = transaction.account_number.toUpperCase()
  const amount = toRupiah(transaction.amount)
  const uniqueCode = transaction.unique_code
  const remark = transaction.remark
  const createdAt = dateFormat(transaction.created_at)

  return (
    <>
      <UITitle>Detail Transaksi</UITitle>

      <UIContentBox>
        <UIFlexBox>
          <UIText tag="p" weight="bold">ID TRANSAKSI #{IDTransaction}</UIText>
          <TransactionLabel label={transaction.status} />
        </UIFlexBox>
      </UIContentBox>

      <UIContentBox>
        <UIFlexBox justify="none" item="none">
          <UIText tag="div" size="xxl" color="orange" className="margin-left_sm margin-right_sm">
            <FontAwesomeIcon icon={faInbox} />
          </UIText>
          <div className="margin-left_lg">
            <Field title="PENGIRIM">
              <UIText tag="p">
                {senderBank}
              </UIText>
            </Field>

            <Field title="PENERIMA">
              <UIText tag="p">
                <UIText tag="p">
                  {beneficiaryBank}
                </UIText>
                <UIText tag="p">
                  {accountNumber}
                </UIText>
                <UIText tag="p">
                  {beneficiaryName}
                </UIText>
              </UIText>
            </Field>

            <Field title="NOMINAL">
              <UIText tag="p">
                <UIText tag="p">{amount}</UIText>
                <UIText tag="span" weight="bold">Kode Unik:</UIText> {uniqueCode}
              </UIText>
            </Field>

            <Field title="CATATAN">
              <UIText tag="p">
                {remark}
              </UIText>
            </Field>

            <Field title="WAKTU DIBUAT">
              <UIText tag="p">
                {createdAt}
              </UIText>
            </Field>
          </div>
        </UIFlexBox>
      </UIContentBox>

      <UIButton to="/">Kembali</UIButton>
    </>
  )
}

export default Details
