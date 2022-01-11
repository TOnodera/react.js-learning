import React from 'react'
import BasicCard from '../organisms/card/BasicCard'

class Dashboard extends React.Component {
  header() {
    return 'アプリケーション情報'
  }
  content() {
    return (
      <>
        <p>ほにゃほにゃ....</p>
      </>
    )
  }
  render() {
    return (
      <>
        <BasicCard header={this.header()} content={this.content()} />
      </>
    )
  }
}

export default Dashboard
