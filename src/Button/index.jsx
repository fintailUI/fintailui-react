import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import colorMapper from './helpers/colorMapper'

const sizes = {
  'xl': 'px-4 py-4 text-xl',
  'xl_rounded': 'px-5 py-4 text-xl',
  'lg': 'px-4 py-3 text-lg',
  'lg_rounded': 'px-5 py-3 text-lg',
  'md': 'px-3 py-2',
  'md_rounded': 'px-4 py-2',
  'sm': 'px-2 py-2 text-sm',
  'sm_rounded': 'px-3 py-2 text-sm',
  'xs': 'px-2 py-2 text-xs',
  'xs_rounded': 'px-3 py-2 text-xs',
}

const Button = ({
  color,
  size,
  outline,
  rounded,
  disabled,
  className,
  children,
  ...restProps
}) => {
  const Comp = restProps.href ? 'a' : 'button'

  const btnColor = colorMapper(color, outline)
  const btnSize = sizes[`${size}${rounded ? '_rounded' : ''}`]
  const btnAnimation = 'transition duration-200'
  const btnState = disabled ? 'opacity-75 cursor-not-allowed' : ''
  const btnRounded = rounded ? 'rounded-full' : 'rounded'

  const classes = cx(
    `focus:outline-none font-semibold inline-flex items-center justify-center`,
    btnRounded,
    btnColor,
    btnSize,
    btnAnimation,
    btnState,
    className,
  )

  return (
    <Comp className={classes} {...restProps}>
      {children}
    </Comp>
  )
}

Button.propTypes = {
  /** 
   * Button color ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', all tailwindcss colors] 
  */
  color: PropTypes.string,
  /** 
   * Button size 
  */
  size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
  /** 
   * Outline button 
  */
  outline: PropTypes.bool,
  /** 
   * Rounded button 
  */
  rounded: PropTypes.bool,
  /** 
   * Disabled button 
  */
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  /** 
   * Link button 
  */
  href: PropTypes.string,
}

Button.defaultProps = {
  color: 'primary',
  size: 'md',
  outline: false,
  rounded: false,
  disabled: false,
}

export default Button