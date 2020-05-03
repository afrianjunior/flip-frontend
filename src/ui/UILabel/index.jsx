import React from 'react'
import PropTypes from 'prop-types'

import './UILabelStyles.css'

const types = ['normal', 'plain']
const colors = ['orange', 'green']

function UILabel ({ children, type, color }) {
  let selectedType = `ui-label_${types[0]}`
  let selectedColor = `ui-label_color-${colors[0]}`

  if (types.includes(type)) {
    selectedType = `ui-label_${type}`
  }

  if (colors.includes(color)) {
    selectedColor = `ui-label_color-${color}`
  }

  const classModel = ` ${selectedType} ${selectedColor}`

  return <div className={`ui-label${classModel} capitalize`}>{children}</div>
}

UILabel.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(types),
  color: PropTypes.oneOf(colors)
}

export default UILabel
