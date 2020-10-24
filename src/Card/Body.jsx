import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Body = ({
  children,
  className,
}) => {
  const classes = cx('bg-white p-4', className)

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Body.propTypes = {
  children: PropTypes.node
}

export default Body