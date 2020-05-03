import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons'
import { UIText, UIFlexBox, UICard, UILabel } from 'ui'

import TransactionLabel from './TransactionLabel'
import { toRupiah, dateFormat } from '@/lib/utils'
import { _COLOR_DECISION, _LABEL_TYPE_DECISION } from '@/constants/common'

function TransactionCard ({ transaction }) {
  const senderBank = transaction.sender_bank.toUpperCase()
  const beneficiaryBank = transaction.beneficiary_bank.toUpperCase()
  const beneficiaryName = transaction.beneficiary_name.toUpperCase()
  const amount = toRupiah(transaction.amount)
  const status = transaction.status.toLowerCase()
  const completedDate = dateFormat(transaction.completed_at)

  const colorOriented = _COLOR_DECISION[status]

  return (
    <UICard color={colorOriented}>
      <UIFlexBox justify="between">
        <div>
          <UIText tag="div" weight="bold" className="margin-bottom_sm">
            <UIFlexBox justify="none">
              {senderBank} <UIText tag="span" size="sm" className="margin-left_sm margin-right_sm"><FontAwesomeIcon icon={faArrowRight} /></UIText> {beneficiaryBank}
            </UIFlexBox>
          </UIText>
          <UIText tag="div" className="margin-bottom_sm">
            {beneficiaryName}
          </UIText>
          <UIText tag="div" className="margin-bottom_sm">
            <UIFlexBox justify="none">
              {amount} <UIText tag="span" size="xs" className="margin-left_lg margin-right_lg"><FontAwesomeIcon icon={faCircle} /></UIText> {completedDate}
            </UIFlexBox>
          </UIText>
        </div>
        <div>
          <TransactionLabel label={status} />
        </div>
      </UIFlexBox>
    </UICard>
  )
}

TransactionCard.propTypes = {
  transaction: PropTypes.object
}

export default TransactionCard
