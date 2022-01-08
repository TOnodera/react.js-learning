import React from "react";
import HeaderContents from "../organisms/HeaderContents";
import FooterContents from "../organisms/FooterContents";
import logo from "../../images/logo.png";

class BaseLayout extends React.Component {
  render() {
    return (
      <>
        <HeaderContents
          logo={logo}
          isAuthenticated={this.props.isAuthenticated}
        />
        <main className="main-contents">main</main>
        <FooterContents />
      </>
    );
  }
}

export default BaseLayout;
