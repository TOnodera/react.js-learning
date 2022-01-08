import React from 'react'
import BasicCard from '../../organisms/card/BasicCard'

class ListUsers extends React.Component {
  header() {
    return 'ユーザー一覧'
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
        <BasicCard
          header={this.header()}
          content={this.content()}
        />
      </>
    )
  }
}

export default ListUsers
