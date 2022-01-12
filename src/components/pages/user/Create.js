import React from 'react'
import BasicCard from '../../organisms/card/BasicCard'
import GeneralTextInput from '../../molecules/GeneralTextInput'
import FormImage from '../../molecules/FormImage'
import sampleImage from '../../../images/sample.jpg'

class CreateUser extends React.Component {
  constructor() {
    super()
    this.state = {
      username: null,
    }
  }
  header() {
    return 'ユーザー作成'
  }
  content() {
    return (
      <>
        <GeneralTextInput
          label="氏名"
          placeHolder="氏名を入力してください。"
          leftIcon="fas fa-user"
          rightIcon="fas fa-check"
          onChange={(e) => {
            this.setState(() => {
              return { username: e.target.value }
            })
          }}
          validators={[
            {
              validation: (value) => /^.+$/.test(value),
              message: '必須項目です。',
            },
          ]}
        />

        <GeneralTextInput
          label="氏名(カナ)"
          placeHolder="氏名(カナ)を入力してください。"
          leftIcon="fas fa-user"
          rightIcon="fas fa-check"
          onChange={(e) => {
            this.setState(() => {
              return { username: e.target.value }
            })
          }}
          validators={[
            {
              validation: (value) => /^.+$/.test(value),
              message: '必須項目です。',
            },
            {
              validation: (value) => /^[ァ-ヴー\u{3000}]+$/u.test(value),
              message: '全角カナ文字で入力してください。',
            },
          ]}
        />

        <GeneralTextInput
          label="E-mail"
          placeHolder="メールアドレスを入力してください。"
          leftIcon="fas fa-user"
          rightIcon="fas fa-check"
          onChange={(e) => {
            this.setState(() => {
              return { username: e.target.value }
            })
          }}
          validators={[
            {
              validation: (value) => /^.+$/.test(value),
              message: '必須項目です。',
            },
          ]}
          type="email"
        />

        <div className="columns is-flex-wrap-wrap">
          <FormImage className="column is-one-quarter" src={sampleImage} />
          <FormImage className="column is-one-quarter" src={sampleImage} />
          <FormImage className="column is-one-quarter" src={sampleImage} />
          <FormImage className="column is-one-quarter" src={sampleImage} />
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
        </div>
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

export default CreateUser
