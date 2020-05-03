import React from 'react'
import PropTypes from 'prop-types'
import { UILabel } from 'ui'

import { _COLOR_DECISION, _LABEL_TYPE_DECISION } from '@/constants/common'
import lang from '@/lang/id-ID.json'

function TransactionLabel ({ label }) {
  if (!label) return null
  const lowerLabel = label.toLowerCase()
  const labelType = _LABEL_TYPE_DECISION[lowerLabel]
  const colorOriented = _COLOR_DECISION[lowerLabel]

  return (
    <UILabel type={labelType} color={colorOriented}>
      {lang[lowerLabel]}
    </UILabel>
  )
}

TransactionLabel.propTypes = {
  label: PropTypes.string
}

export default TransactionLabel
