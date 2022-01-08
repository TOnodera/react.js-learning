import React from 'react'
import Breadcumb from './Breadcrumb'
import BasicCard from './card/BasicCard'

class MainContents extends React.Component {
  render() {
    return (
      <main className="main-contents columns is-centered">
        <div className="column is-four-fifths mt-5">
          <Breadcumb />
          <BasicCard />
        </div>
      </main>
    )
  }
}

export default MainContents
