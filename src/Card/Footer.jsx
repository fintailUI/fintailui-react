import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Footer = ({
  children,
  className,
}) => {
  const classes = cx('p-4 border-t border-gray-400', className)

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Footer.propTypes = {
  children: PropTypes.node
}

export default Footer