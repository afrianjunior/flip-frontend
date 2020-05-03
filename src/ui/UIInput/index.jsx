import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './UIInputStyles.css'

const icons = ['search']
const iconElements = {
  search: faSearch
}

function UIInput (props) {
  const { icon } = props
  let iconElement = null

  function Icon () {
    if (!icon) return null
    iconElement = iconElements[icon]

    return (
      <div className="ui-input-icon">
        <FontAwesomeIcon icon={iconElement} />
      </div>
    )
  }
  return (
    <div className="ui-input-wrapper">
      <input className="ui-input" {...props} />
      <Icon />
    </div>
  )
}

UIInput.propTypes = {
  icon: PropTypes.oneOf(icons)
}

export default UIInput
