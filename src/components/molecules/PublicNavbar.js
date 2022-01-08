import React from "react";
import NavbarBrand from "./navbar/NavbarBrand";
import logo from "../../images/logo.png";

class PublicNavbar extends React.Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <NavbarBrand logo={logo} />
      </nav>
    );
  }
}

export default PublicNavbar;
