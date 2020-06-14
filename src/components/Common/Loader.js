import React from 'react'

import { Spinner } from 'reactstrap'
import styled from 'styled-components'

export default ({ show, size = 'md', text = 'Loading...', color = 'primary', className = '' }) => {
  return (
    show && (
      <LoaderStyled className={className}>
        <Spinner size={size} color={color} />
        {text && <h5 className="ml-2 mb-0">{text}</h5>}
      </LoaderStyled>
    )
  )
}

const LoaderStyled = styled.div`
  display: inline-flex;
  align-items: center;
  h5 {
    font-size: 0.8rem;
  }
`
