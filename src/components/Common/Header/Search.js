import { Button, Container } from 'reactstrap'
import { observer } from 'mobx-react'
import cx from 'classnames'
import React, { useEffect, useState } from 'react'

import { useStores } from 'stores'

const Search = ({ show, onClose }) => {
  const [criteria, setCriteria] = useState('')
  const { recipeStore } = useStores()

  const handleSearch = () => {
    recipeStore.SearchCriteria = {
      search: criteria,
      page: 0,
    }
    setCriteria('')
    onClose && onClose()
  }

  const handleKeyUp = event => {
    if (event.keyCode === 13) {
      handleSearch()
    }
  }

  const handleMouseClick = event => {
    if (!event.target.closest('#searchContainer') && show) {
      onClose && onClose()
      document.removeEventListener('click', handleMouseClick)
    }
  }

  const handleSearchCriteriaChanged = value => {
    setCriteria(value)
  }

  useEffect(() => {
    document.addEventListener('click', handleMouseClick)
    return () => document.removeEventListener('click', handleMouseClick)
  })

  return (
    <div id="searchContainer" className={cx('search-bar  hidden-xs hidden-sm', show && 'reveal')}>
      <Container>
        <div className="relative-wrapper">
          <input
            autoFocus
            tabIndex="-1"
            placeholder="Search Recipes"
            ref={input => input && input.focus()}
            value={criteria}
            onChange={event => handleSearchCriteriaChanged(event.target.value)}
            onKeyUp={handleKeyUp}
          />
          <Button
            color="white"
            onClick={event => {
              event.preventDefault()
              handleSearch()
            }}
          >
            <div className="input-group-append">
              <i className="material-icons-outlined md-48">search</i>
            </div>
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default observer(Search)
