
const colors = {
  'success': 'green',
  'danger': 'red',
  'warning': 'yellow',
  'info': 'teal',
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

export default colorMapper