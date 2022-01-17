import React from 'react'
import BasicCard from '../../organisms/card/BasicCard'
import GeneralTextInput from '../../molecules/GeneralTextInput'
import FormImages from '../../molecules/FormImage/FormImages'
import http from '../../../utilities/http'
import Toast from '../../../utilities/toast'

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
      files: [],
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
      try {
        // ユーザーデータ作成
        const { data } = await http.post('/users/create', {
          name: this.state.textValues.username.value,
          email: this.state.textValues.email.value,
          password: this.state.textValues.password.value,
        })
        // 画像が選択されている場合は画像登録
        if (this.state.files.length > 0) {
          const id = data.id
          for (const { index, file } of this.state.files) {
            const data = new FormData()
            data.append('file', file)
            await http.post(`/users/${id}/${index}/upload-file`, data, {
              'Content-Type': 'multipart/form-data',
            })
          }
        }
        // トースト表示
        Toast.success('ユーザーを新規作成しました。')
      } catch (err) {
        // 失敗した場合はトーストでエラー表示
        Toast.danger(err.response.data.message || err.message)
      }
    } else {
      // バリデーションチェック通らない場合はトースト表示
      Toast.danger('入力内容が間違っています。')
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
          leftIcon="fas fa-envelope-square"
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
            {
              validation: (value) => /^[\w+_.-]+[^.]@[\w-]+\.[\w]+$/.test(value),
              message: 'メールアドレスの形式が間違っています。',
            },
          ]}
          type="email"
        />

        <GeneralTextInput
          label="password"
          placeHolder="パスワードを入力してください。"
          leftIcon="fas fa-key"
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
            {
              validation: (value) => /^[\w-~]{8,32}$/.test(value),
              message: '半角英数字記号を使用して8文字以上３２文字以内で入力してください。',
            },
          ]}
          type="password"
        />

        <FormImages
          onChange={(files) => {
            this.setState(() => {
              return { files }
            })
          }}
          onDeleteButtonClicked={(files) => {
            this.setState(() => {
              return { files }
            })
          }}
        />

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
