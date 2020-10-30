import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import colorMapper from './helpers/colorMapper'

const IconButton = ({
  children,
  className,
  color,
  outline,
  disabled,
  ...restProps
}) => {
  const btnColor = colorMapper(color, outline)
  const btnState = disabled ? 'opacity-75 cursor-not-allowed' : ''

  const finalClassName = cx(
    'focus:outline-none rounded-full p-2 w-auto inline-flex cursor-pointer transition duration-200',
    btnColor,
    btnState,
    className,
  )

  return (
    <button className={finalClassName} {...restProps}>
      {children}
    </button>
  )
}

IconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /** 
   * Button color ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', all tailwindcss colors] 
  */
  color: PropTypes.string,
  /** 
   * Outlined button 
  */
  outline: PropTypes.bool,
  /** 
   * Disabled button 
  */
  disabled: PropTypes.bool,
}

IconButton.defaultProps = {
  color: 'primary',
  size: 'md',
  outline: false,
  disabled: false,
}

export default IconButton