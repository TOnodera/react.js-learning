import { Label } from '../atoms'
import React from 'react'
import ApplicationException from '../../exception/ApplicationException'
import BasicTextInput from './BasicTextInput'

function ErrorText(props) {
  if (!props.isInputed) {
    return ''
  }
  return props.isValid ? (
    ''
  ) : (
    <p className="help is-danger">
      入力が不正です。
    </p>
  )
}

class GeneralTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isInputed: false,
      isValid: false,
    }
  }

  _onChange = (e) => {
    // バリデーションの正規表現がセットされていない場合は任意の文字列を受け付ける
    if (!this.props.validateRegex) {
      this.props.validateRegex = /^.*$/
    }
    if (!this.props.onChange) {
      throw new ApplicationException(
        'onChange属性に関数をセットしてください。'
      )
    }
    this.setState(() => {
      return {
        isInputed: e.target.value,
        isValid: this.props.validateRegex.test(
          e.target.value
        ),
      }
    })
    this.props.onChange(e)
  }

  render() {
    return (
      <div className="field">
        {this.state.isInputed ? (
          <>
            <Label content={this.props.label} />
            <div className="control has-icons-left has-icons-right">
              <input
                className={[
                  'input',
                  this.state.isValid
                    ? 'is-success'
                    : 'is-danger',
                ].join(' ')}
                type="text"
                placeholder={
                  this.props.placeHolder
                }
                onChange={this._onChange}
              />
              <span className="icon is-small is-left">
                <i
                  className={this.props.leftIcon}
                ></i>
              </span>
              <span
                className={[
                  'icon',
                  'is-small',
                  'is-right',
                  this.state.isValid
                    ? 'has-text-primary'
                    : '',
                ].join(' ')}
              >
                <i className="fas fa-check"></i>
              </span>
            </div>
          </>
        ) : (
          <BasicTextInput
            label={this.props.label}
            leftIcon={this.props.leftIcon}
            onChange={(e) => {
              this.setState(() => {
                return {
                  isInputed: e.target.value,
                }
              })
            }}
          />
        )}
        <ErrorText
          isValid={this.state.isValid}
          isInputed={this.state.isInputed}
        />
      </div>
    )
  }
}

export default GeneralTextInput
