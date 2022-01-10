import { Label } from '../atoms'
import React from 'react'
import ApplicationException from '../../exception/ApplicationException'

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

class BasicTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isInputed: false,
      isValid: false,
    }
  }

  _onChange = (e) => {
    if (!this.props.validateRegex) {
      throw new ApplicationException(
        'validateRegex属性に正規表現をセットしてください。'
      )
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

  _addSuccessOrDangerClass() {
    return this.state.isInputed &&
      !this.state.isValid
      ? 'is-danger'
      : this.state.isInputed && this.state.isValid
      ? 'is-success'
      : ''
  }

  render() {
    return (
      <div className="field">
        <Label content={this.props.label} />
        <div className="control has-icons-left has-icons-right">
          <input
            className={[
              'input',
              this._addSuccessOrDangerClass(),
            ].join(' ')}
            type="text"
            placeholder={this.props.placeHolder}
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
              this.state.isInputed &&
              this.state.isValid
                ? 'has-text-primary'
                : '',
            ].join(' ')}
          >
            <i className="fas fa-check"></i>
          </span>
        </div>
        <ErrorText
          isValid={this.state.isValid}
          isInputed={this.state.isInputed}
        />
      </div>
    )
  }
}

export default BasicTextInput
