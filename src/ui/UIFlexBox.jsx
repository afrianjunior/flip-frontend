import React from 'react'
import PropTypes from 'prop-types'

const justifies = ['between', 'center', 'none']

function UIFlexBox (props) {
  const { children, justify, className } = props
  let selectedJustify = ` flex_justify-${justifies[0]}`

  if (justifies.includes(justify)) {
    selectedJustify = ` flex_justify-${justify}`
  }

  const mutatedProps = {
    ...props,
    className: `flex flex_item-center${selectedJustify || ''} ${className || ''}`
  }
  return (
    <div {...mutatedProps}>
      {children}
    </div>
  )
}

UIFlexBox.propTypes = {
  children: PropTypes.node,
  justify: PropTypes.oneOf(justifies)
}

export default UIFlexBox
