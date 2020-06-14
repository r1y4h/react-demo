import cx from 'classnames'
import React, { useEffect, useState } from 'react'

export default () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  const onDocumentScroll = () => {
    if (document.documentElement.scrollTop > 100) {
      setShowScrollToTop(true)
    } else {
      setShowScrollToTop(false)
    }
  }

  const handleScrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', onDocumentScroll)
    return () => {
      window.removeEventListener('scroll', onDocumentScroll)
    }
  })

  return (
    <footer className="p-2">
      <span id="edamam-badge" data-color="transparent" />
      <span className="text-white">
        <small>Inspired by </small>
        <a
          href="https://www.behance.net/gallery/91619935/Monja-Wallet-App-Design-Dark-Mode"
          target="_blank"
          rel="noopener noreferrer"
        >
          Monja
        </a>
      </span>
      <button
        className={cx('btn btn-white button-scroll-to-top', !showScrollToTop && 'fade')}
        onClick={handleScrollToTop}
      >
        <i className="material-icons-outlined md-28">arrow_upward</i>
      </button>
    </footer>
  )
}
