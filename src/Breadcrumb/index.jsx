import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Breadcrumb = ({
  separator,
  className,
  children
}) => {

  const finalClassName = cx(
    'px-4 py-2 bg-gray-300 rounded border',
    className,
  )

  return (
    <nav className={finalClassName}>
      <ol className="list-reset flex text-gray-600">
        {children && children.map((child, index) => (
          <Fragment>
            <li key={index}>{child}</li>
            {index !== children.length - 1 && <li className="mx-2">{separator}</li>}
          </Fragment>
        ))}
      </ol>
    </nav>
  )
}

Breadcrumb.propTypes = {
  separator: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node)
}

Breadcrumb.defaultProps = {
  separator: '/'
}

export default Breadcrumb