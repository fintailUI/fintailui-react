import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'


const colors = {
  'success': 'green',
  'danger': 'red',
  'warning': 'yellow',
  'info': 'teal',
}

const colorMapper = (color) => {
  const currentColor = colors[color] ?? color

  switch (currentColor) {
    case 'primary': 
      return `bg-indigo-300 text-indigo-800`
    case 'secondary': 
      return `bg-indigo-100 text-indigo-600`
    case 'light':
      return `bg-gray-100 text-gray-600`
    case 'dark':
      return `bg-gray-800 text-gray-100`
  }

  return `bg-${currentColor}-300 text-${currentColor}-800`
}

const Alert = ({
  children,
  className,
  color,
}) => {
  const alertColor = colorMapper(color)

  const finalClassName = cx(
    'rounded-lg p-4 mb-4',
    alertColor,
    className
  )

  return (
    <div className={finalClassName}>
      {children}
    </div>
  )
}

Alert.propTypes = {
  children: PropTypes.node,
  classnames: PropTypes.string,
  color: PropTypes.string,
}

Alert.defaultProps= {
  color: 'primary'
}

export default Alert