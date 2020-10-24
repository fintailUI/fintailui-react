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
      return 'bg-indigo-600 text-white'
    case 'secondary': 
      return 'bg-indigo-300 text-indigo-600'
    case 'light':
      return `bg-gray-100 text-gray-600`
    case 'dark':
      return `bg-gray-800 text-gray-100`
  }

  return `bg-${currentColor}-300 text-${currentColor}-800`
}

const Badge = ({
  children,
  color,
  rounded,
}) => {
  const badgeColor = colorMapper(color)

  const finalClassName = cx(
    'px-2 text-sm font-semibold inline-block w-auto',
    rounded ? 'rounded-full' : 'rounded',
    badgeColor,
  )

  return (
    <div className={finalClassName}>
      {children}
    </div>
  )
}

Badge.propTypes = {
  children: PropTypes.node,
  /** Badge color ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', all tailwindcss colors] */
  color: PropTypes.string,
  /** Rounded badge */
  rounded: PropTypes.bool,
}

Badge.defaultProps = {
  color: 'primary',
  rounded: false,
}

export default Badge