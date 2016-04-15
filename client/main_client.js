import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import MainLayout from './components/MainLayout'
import Home from './components/Home'
import configureStore from './store'
import { syncHistoryWithStore } from 'react-router-redux'

const routes = {
  component: MainLayout,
  path: '/',
  indexRoute: { component: Home },
  onEnter: ({location}) => GAnalytics.pageview(location.path)
}

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})