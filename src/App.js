import { observer } from 'mobx-react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import React from 'react'

import { ROUTE } from 'definitions'
import ScrollToTop from 'components/Common/ScrollToTop'

import Home from 'components/Home'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path={ROUTE.HOME} component={Home} />
      </Switch>
    </Router>
  )
}

export default observer(App)
