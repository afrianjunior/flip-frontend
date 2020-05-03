import React from 'react'
import PropTypes from 'prop-types'

function Field ({ children, title }) {
  return (
    <div className="margin-bottom_xl">
      <div className="font-weight_bold margin-bottom_md">
        {title}
      </div>
      {children}
    </div>
  )
}

Field.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}

export default Field
