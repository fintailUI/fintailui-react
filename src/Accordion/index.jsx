import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './styles.scss'

const Accordion = ({
  open,
  children
}) => {

  const finalClassName = cx(
    'ft-accordion',
    { 'open': open },
  )

  return (
    <div className={finalClassName}>
      {children}
    </div>
  )
}

Accordion.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node
}

export default Accordion