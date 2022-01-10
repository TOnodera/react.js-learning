import React from 'react'
import SimpleTextInput from './SimpleTextInput'

function ErrorText(props) {
  return props.isFirstView ? (
    ''
  ) : (
    <p
      className={[
        'help',
        'is-danger',
        props.isValid ? 'is-hidden' : '',
      ].join(' ')}
    >
      {props.errorText}
    </p>
  )
}

class GeneralTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      isValid: false,
      isFirstView: true,
    }
  }

  validate = (text) => {
    // バリデーションの正規表現がセットされていない場合は任意の文字列を受け付ける
    if (!this.props.validateRegex) {
      this.props.validateRegex = /^.*$/
    }
    return this.props.validateRegex.test(text)
  }

  render() {
    return (
      <>
        <SimpleTextInput
          label={this.props.label}
          rightIcon="fas fa-check"
          rightIconClass={
            this.state.isValid
              ? 'has-text-primary'
              : ''
          }
          leftIcon={this.props.leftIcon}
          leftIconClass={
            this.state.isValid
              ? 'has-text-primary'
              : ''
          }
          onChange={(e) =>
            this.setState(() => {
              this.props.onChange(e)
              return {
                value: e.target.value,
                isValid: this.validate(
                  e.target.value
                ),
                isFirstView: false,
              }
            })
          }
          value={this.state.value}
        />
        <ErrorText
          isValid={this.state.isValid}
          errorText={this.props.errorText}
          isFirstView={this.state.isFirstView}
        />
      </>
    )
  }
}

export default GeneralTextInput
