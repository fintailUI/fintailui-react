import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const colors = {
  'success': 'green',
  'danger': 'red',
  'warning': 'yellow',
  'info': 'teal',
}

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

const colorMapper = (color, outline) => {
  const currentColor = colors[color] ?? color

  switch (currentColor) {
    case 'primary': 
      return outline ? `border border-indigo-600 hover:bg-indigo-600 text-indigo-600 hover:text-white` : `bg-indigo-600 hover:bg-indigo-700 text-white`
    case 'secondary': 
      return outline ? `border border-indigo-300 hover:bg-indigo-300 text-indigo-600 hover:text-indigo-700` : `bg-indigo-300 hover:bg-indigo-200 text-indigo-800`
    case 'light':
      return outline ? `border border-gray-100 hover:bg-gray-100 text-gray-100 hover:text-current` : 'bg-gray-100 hover:bg-gray-200 text-current'
    case 'dark':
      return outline ? 'border border-gray-900 hover:bg-gray-900 text-gray-900 hover:text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'
  }

  return outline ? 
  `border border-${currentColor}-600 hover:bg-${currentColor}-600 text-${currentColor}-600 hover:text-white` 
  : `bg-${currentColor}-600 hover:bg-${currentColor}-700 text-white`
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
    `font-semibold inline-flex items-center justify-center`,
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
  color: PropTypes.string,
  size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
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