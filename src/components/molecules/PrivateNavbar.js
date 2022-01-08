import React from "react";
import NavbarBrand from "./navbar/NavbarBrand";
import Navbar from "./navbar/Navbar";
import logo from "../../images/logo.png";

class PrivateNavbar extends React.Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <NavbarBrand logo={logo} hambergerButtonTarget="navbar" />
        <Navbar id="navbar" />
      </nav>
    );
  }
}

export default PrivateNavbar;
