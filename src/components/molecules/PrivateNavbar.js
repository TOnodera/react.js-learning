import React from 'react'
import { Logo, HambergerButton } from '../atoms'
import Navbar from './navbar/Navbar'

class PrivateNavbar extends React.Component {
  constructor() {
    super()
    this.state = {
      isActive: false,
    }
  }
  toggleMenu = () =>
    this.setState((state) => {
      return {
        isActive: !state.isActive,
      }
    })

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Logo logo={this.props.logo} />
          <HambergerButton
            onClick={this.toggleMenu}
            isActive={this.state.isActive}
          />
        </div>
        <Navbar
          id="navbar"
          isActive={this.state.isActive}
        />
      </nav>
    )
  }
}

export default PrivateNavbar
