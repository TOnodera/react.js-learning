import React from 'react'
import BasicCard from '../../organisms/card/BasicCard'

class CreateUser extends React.Component {
  header() {
    return 'ユーザー作成'
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

export default CreateUser
