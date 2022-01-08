import React from 'react'
import HeaderContents from '../organisms/HeaderContents'
import Breadcumb from '../organisms/Breadcrumb'
import Dashboard from '../pages/Dashboard'
import ListUsers from '../pages/user/List'
import CreateUser from '../pages/user/Create'
import FooterContents from '../organisms/FooterContents'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'

class BaseLayout extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <HeaderContents
            isAuthenticated={
              this.props.isAuthenticated
            }
          />
          <main className="main-contents columns is-centered">
            <div className="column is-four-fifths mt-5">
              <Breadcumb />
              <>
                <Route
                  exact
                  path="/"
                  component={Dashboard}
                />
                <Route
                  exact
                  path="/users"
                  component={ListUsers}
                />
                <Route
                  exact
                  path="/users/create"
                  component={CreateUser}
                />
              </>
            </div>
          </main>
          <FooterContents />
        </BrowserRouter>
      </>
    )
  }
}

export default BaseLayout
