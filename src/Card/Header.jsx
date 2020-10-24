import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Header = ({
  children,
  className,
}) => {
  const classes = cx('p-4 border-b border-gray-400', className)

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Header.propTypes = {
  children: PropTypes.node
}

export default Header