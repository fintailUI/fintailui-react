import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Footer = ({
  children,
  className,
  ...restProps
}) => {
  const classes = cx('p-4 border-t first:border-t-0 border-gray-400', className)

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  )
}

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Footer