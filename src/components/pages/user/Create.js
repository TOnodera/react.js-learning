import React from 'react'
import BasicCard from '../../organisms/card/BasicCard'
import GeneralTextInput from '../../molecules/GeneralTextInput'
import FormImages from '../../molecules/FormImage/FormImages'
import http from '../../../utilities/http'

class CreateUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textValues: {
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
      },
    }
  }
  changeTextValuesState = (key, value) => {
    const textValues = this.state.textValues
    textValues[key] = value
    return textValues
  }
  submit = async () => {
    if (
      this.state.textValues.username.isValid &&
      this.state.textValues.usernameKana.isValid &&
      this.state.textValues.email.isValid &&
      this.state.textValues.password.isValid
    ) {
      // ユーザー新規作成
      const response = await http.post('/users/create', {
        name: this.state.textValues.username.value,
        email: this.state.textValues.email.value,
        password: this.state.textValues.password.value,
      })
      // レスポンスチェック
      if (response.status == 201) {
      } else {
      }
    } else {
      console.log('inValid')
      console.log(this.state.textValues)
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
            const textValue = this.changeTextValuesState('username', {
              value: e.target.value,
              isValid: isValid,
            })
            this.setState(() => {
              return textValue
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
            const textValue = this.changeTextValuesState('usernameKana', {
              value: e.target.value,
              isValid: isValid,
            })
            this.setState(() => {
              return textValue
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
            const textValue = this.changeTextValuesState('email', {
              value: e.target.value,
              isValid: isValid,
            })
            this.setState(() => {
              return textValue
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
            const textValue = this.changeTextValuesState('password', {
              value: e.target.value,
              isValid: isValid,
            })
            this.setState(() => {
              return textValue
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
