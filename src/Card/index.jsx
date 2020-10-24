import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const Card = ({
  children,
  className,
  col,
}) => {
  const classes = cx(
    'border rounded-lg border-gray-400 bg-white overflow-hidden', 
    `w-${col}/12`,
    className
  )

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  col: PropTypes.number,
}

Card.defaultProps = {
  col: 3,
}

Card.Header = Header
Card.Body = Body
Card.Footer = Footer

export default Card