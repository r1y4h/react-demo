import { Container } from 'reactstrap'
import { observer } from 'mobx-react'
import React, { useEffect, useRef } from 'react'

import Footer from 'components/Common/Footer'
import Header from 'components/Common/Header'

const MainLayout = ({ children }) => {
  const contentRef = useRef()

  useEffect(() => {
    contentRef.current.classList.remove('height-fixed')
    if (window.innerWidth === document.documentElement.clientWidth) {
      contentRef.current.classList.add('height-fixed')
    }
  })

  return (
    <React.Fragment>
      <Header />
      <div ref={contentRef} className="content-container">
        <Container>{children}</Container>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default observer(MainLayout)
