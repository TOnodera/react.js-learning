import React from 'react'
import { Logo } from '../atoms'

class PublicNavbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Logo logo={this.props.logo} />
        </div>
      </nav>
    )
  }
}

export default PublicNavbar
