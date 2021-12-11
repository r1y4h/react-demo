import React from 'react'

import { Spinner } from 'reactstrap'
import cx from 'classnames'

export default ({ show, size = 'md', text = 'Loading...', color = 'primary', className = '' }) => {
  return (
    show && (
      <div className={cx('loader d-inline-flex align-items-center', className)}>
        <Spinner size={size} color={color} />
        {text && <h5 className="ms-2 mb-0">{text}</h5>}
      </div>
    )
  )
}
