import React from 'react'
import BasicCard from '../../organisms/card/BasicCard'
import GeneralTextInput from '../../molecules/GeneralTextInput'
import FormImages from '../../molecules/FormImage/FormImages'

class CreateUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: {
        value: null,
        isValid: false,
      },
      usernameKana: {
        value: null,
        isValid: false,
      },
      email: {
        value: null,
        isValid: false,
      },
      password: {
        value: null,
        isValid: false,
      },
    }
  }
  submit = () => {
    if (
      this.state.username.isValid &&
      this.state.usernameKana.isValid &&
      this.state.email.isValid &&
      this.state.password.isValid
    ) {
      console.log('isValid')
    } else {
      console.log(
        this.state.username.isValid,
        this.state.usernameKana.isValid,
        this.state.email.isValid,
        this.state.password.isValid
      )
      console.log('inValid')
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
          onChange={(e, isValid) => {
            this.setState(() => {
              return {
                username: {
                  value: e.target.value,
                  isValid: isValid,
                },
              }
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
          onChange={(e, isValid) => {
            this.setState(() => {
              return {
                usernameKana: {
                  value: e.target.value,
                  isValid: isValid,
                },
              }
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
          onChange={(e, isValid) => {
            this.setState(() => {
              return {
                email: {
                  value: e.target.value,
                  isValid: isValid,
                },
              }
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

        <GeneralTextInput
          label="password"
          placeHolder="パスワードを入力してください。"
          leftIcon="fas fa-user"
          rightIcon="fas fa-check"
          onChange={(e, isValid) => {
            this.setState(() => {
              return {
                password: {
                  value: e.target.value,
                  isValid: isValid,
                },
              }
            })
          }}
          validators={[
            {
              validation: (value) => /^.+$/.test(value),
              message: '必須項目です。',
            },
          ]}
          type="password"
        />

        <FormImages />

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={this.submit}>
              送信
            </button>
          </div>
          <div className="control">
            <button className="button is-link is-light">キャンセル</button>
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
