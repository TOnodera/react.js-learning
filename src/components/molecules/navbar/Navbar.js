import React from 'react'
import {
  NavbarItem,
  NavbarLoginButtons,
} from '../../atoms'

class Navbar extends React.Component {
  render() {
    return (
      <div
        id={this.props.id}
        className="navbar-menu"
      >
        <NavbarItem />
        <NavbarLoginButtons />
      </div>
    )
  }
}

export default Navbar
