import React from 'react'
import PropTypes from 'prop-types'

import './UICardStyles.css'

const colors = ['orange', 'green']

function UICard ({ children, color }) {
  let selectedColor = ''
  if (color) selectedColor = ` ui-card_${color}`

  return (
    <div className={`ui-card cursor-pointer margin-bottom_md${selectedColor}`}>
      {children}
    </div>
  )
}

UICard.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(colors)
}

export default UICard
