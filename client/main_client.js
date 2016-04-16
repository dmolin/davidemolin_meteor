import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory, Route, Routes, IndexRoute} from 'react-router'
import MainLayout from './components/MainLayout'
import Home from './components/Home'
import NotFound from './components/NotFound'
import configureStore from './store'
import { syncHistoryWithStore } from 'react-router-redux'

const routes = [{
  component: MainLayout,
  path: '/',
  indexRoute: { component: Home },
  onEnter: ({location}) => GAnalytics.pageview(location.path),
  childRoutes: []
}, {
  path:'*', component: NotFound
}]

function onRouteEnter(location) {
  GAnalytics.pageview(location.path)
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