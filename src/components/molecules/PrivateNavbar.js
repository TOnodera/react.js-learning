import React from "react";
import NavbarBrand from "./navbar/NavbarBrand";
import Navbar from "./navbar/Navbar";

class PrivateNavbar extends React.Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <NavbarBrand hambergerButtonTarget="navbar" />
        <Navbar id="navbar" />
      </nav>
    );
  }
}

export default PrivateNavbar;
