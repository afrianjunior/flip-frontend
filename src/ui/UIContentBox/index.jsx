import React from 'react'
import PropTypes from 'prop-types'

import './UIContentBoxStyles.css'

function UIContextBox ({ children }) {
  return (
    <div className="ui-content-box margin-bottom_lg">
      {children}
    </div>
  )
}

UIContextBox.propTypes = {
  children: PropTypes.node
}

export default UIContextBox
