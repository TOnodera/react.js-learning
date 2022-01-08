import React from 'react'
import Breadcumb from './Breadcrumb'
import Dashboard from '../pages/Dashboard'
import CreateUser from '../pages/user/Create'
import { Route, Switch } from 'react-router-dom'

class MainContents extends React.Component {
  render() {
    return (
      <main className="main-contents columns is-centered">
        <div className="column is-four-fifths mt-5">
          <Breadcumb />
          <Switch>
            <Route
              exact
              path="/"
              component={Dashboard}
            />
            <Route
              exact
              path="/users/create"
              component={CreateUser}
            />
          </Switch>
        </div>
      </main>
    )
  }
}

export default MainContents
