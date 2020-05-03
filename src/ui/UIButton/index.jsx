import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './UIButtonStyles.css'

const colors = ['orange', 'green']

function UIButton (props) {
  const { children, color, to } = props
  let selectedColor = ` ui-button_${colors[0]}`

  if (colors.includes(color)) {
    selectedColor = ` ui-button_${color}`
  }

  const mutatedProps = {
    ...props,
    className: `ui-button${selectedColor || ''}`
  }

  const SimpleButton = <button {...mutatedProps}>{children}</button>
  const RedirectButton = <Link to={to}><button {...mutatedProps}>{children}</button></Link>

  return to ? RedirectButton : SimpleButton
}

UIButton.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(colors),
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default UIButton
