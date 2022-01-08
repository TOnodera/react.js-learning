import { Logo, HambergerButton } from "../../atoms";
import React from "react";

class NavbarBrand extends React.Component {
  render() {
    return (
      <div className="navbar-brand">
        <Logo logo={this.props.logo} href="/" />
        <HambergerButton target={this.props.hambergerButtonTarget} />
      </div>
    );
  }
}

export default NavbarBrand;
