import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Header = ({
  children,
  className,
  ...restProps
}) => {
  const classes = cx('p-4 border-b last:border-b-0 border-gray-400', className)

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  )
}

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Header