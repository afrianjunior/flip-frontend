import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons'
import { UIText, UIFlexBox, UICard, UILabel } from 'ui'
import { toRupiah, dateFormat } from '@/lib/utils'

import lang from '@/lang/id-ID.json'

const _COLOR_DECISION = {
  success: 'green',
  pending: 'orange'
}

const _LABEL_TYPE_DECISION = {
  success: 'normal',
  pending: 'plain'
}

function TransactionCard ({ transaction }) {
  const senderBank = transaction.sender_bank.toUpperCase()
  const beneficiaryBank = transaction.beneficiary_bank.toUpperCase()
  const beneficiaryName = transaction.beneficiary_name.toUpperCase()
  const amount = toRupiah(transaction.amount)
  const status = transaction.status.toLowerCase()
  const createdDate = transaction.created_at
  const completedDate = transaction.completed_at
  const date = status === 'success' ? dateFormat(completedDate) : dateFormat(createdDate)

  const labelType = _LABEL_TYPE_DECISION[status]
  const colorOriented = _COLOR_DECISION[status]

  return (
    <UICard color={colorOriented}>
      <UIFlexBox justify="between">
        <div>
          <UIText tag="p" weight="bold">
            <UIFlexBox justify="none">
              {senderBank} <UIText tag="span" size="sm" className="margin-left_sm margin-right_sm"><FontAwesomeIcon icon={faArrowRight} /></UIText> {beneficiaryBank}
            </UIFlexBox>
          </UIText>
          <UIText tag="p">
            {beneficiaryName}
          </UIText>
          <UIText tag="p">
            <UIFlexBox justify="none">
              {amount} <UIText tag="div" size="xs" className="margin-left_lg margin-right_lg"><FontAwesomeIcon icon={faCircle} /></UIText> {date}
            </UIFlexBox>
          </UIText>
        </div>
        <div>
          <UILabel type={labelType} color={colorOriented}>
            {lang[status]}
          </UILabel>
        </div>
      </UIFlexBox>
    </UICard>
  )
}

TransactionCard.propTypes = {
  transaction: PropTypes.object
}

export default TransactionCard
