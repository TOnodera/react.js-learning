import React from 'react'
import HeaderContents from '../organisms/HeaderContents'
import MainContents from '../organisms/MainContents'
import FooterContents from '../organisms/FooterContents'

class BaseLayout extends React.Component {
  render() {
    return (
      <>
        <HeaderContents
          isAuthenticated={
            this.props.isAuthenticated
          }
        />
        <MainContents />
        <FooterContents />
      </>
    )
  }
}

export default BaseLayout
