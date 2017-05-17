import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { syncHistoryWithStore } from 'react-router-redux'
import {
  Pages,
  ShowPage,
  NewPage,
  LoginForm,
  POSPages,
  CallPages
} from './containers'
import {
  App,
  Home
} from './components'

export default (store, history) => {
  return (
    <Router
      history={syncHistoryWithStore(history, store)}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <route path='pages'>
          <IndexRoute component={Pages} />
          <route path='new'
            component={NewPage} />
          <route path=':id'
            component={ShowPage} />
        </route>
        <route path='newpos' component={POSPages} />
        <route path='call'>
          <route path=':id' component={CallPages} />
        </route>
      </Route>
      <Route path='login' component={LoginForm}>
      </Route>
    </Router>
  )
}
