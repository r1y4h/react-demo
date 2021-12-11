import React from 'react'

import { observer } from 'mobx-react'
import { Route, Routes } from 'react-router-dom'

import { ROUTE } from 'definitions'
import Home from 'components/Home'

const App = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Home />} />
    </Routes>
  )
}

export default observer(App)
