import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Options ({ collections, changeHandler }) {
  // return collections.map(({ value, label }) => <option key={value} value={value}>{label}</option>)
  const optionsNode = collections.map(collection => {
    return (
      <button
        className="ui-option"
        key={collection.value}
        onClick={changeHandler}
        value={collection.value}>
        {collection.label}
      </button>
    )
  })

  return (
    <div className="ui-options">
      {optionsNode}
    </div>
  )
}

function UISelect (props) {
  const { value, collections } = props
  const [opened, setOpened] = useState(false)
  const selectedCollection = collections.find((collection) => collection.value === value)

  function openSelectHandler () {
    setOpened(!opened)
  }

  return (
    <div className="ui-select-wrapper" onClick={openSelectHandler}>
      {/* <select {...props}>
        <Options {...props} />
      </select> */}
      <div className={`ui-select ${opened ? 'opened' : ''}`}>
        <div className="ui-select-body">
          {selectedCollection.label}
        </div>
        <Options {...props} />
      </div>
    </div>
  )
}

UISelect.propTypes = {
  children: PropTypes.node,
  collections: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
      ]),
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
      ])
    })
  )
}

export default UISelect
