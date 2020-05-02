import React from 'react'
import PropTypes from 'prop-types'
import { UIText } from 'ui'

function UISubTitle ({ children }) {
  return (
    <UIText tag="h4" weight="bold" size="sub-title" className="ui-sub-title">
      { children }
    </UIText>
  )
}

UISubTitle.propTypes = {
  children: PropTypes.node
}

export default UISubTitle
