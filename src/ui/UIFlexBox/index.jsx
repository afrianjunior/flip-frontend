import React from 'react'
import PropTypes from 'prop-types'

const justifies = ['between', 'center', 'none']
const items = ['center', 'none']

function UIFlexBox (props) {
  const { children, justify, item, className } = props
  let selectedJustify = ` flex_justify-${justifies[0]}`
  let selectedItem = ` flex_item-${items[0]}`

  if (justifies.includes(justify)) {
    selectedJustify = ` flex_justify-${justify}`
  }

  if (items.includes(item)) {
    selectedItem = ` flex_item-${item}`
  }

  const mutatedProps = {
    ...props,
    className: `flex ${selectedItem || ''}${selectedJustify || ''} ${className || ''}`
  }
  return (
    <div {...mutatedProps}>
      {children}
    </div>
  )
}

UIFlexBox.propTypes = {
  children: PropTypes.node,
  justify: PropTypes.oneOf(justifies),
  item: PropTypes.oneOf(items)
}

export default UIFlexBox
