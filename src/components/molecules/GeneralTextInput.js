import React from 'react'
import SimpleTextInput from './SimpleTextInput'

function ErrorText(props) {
  return props.isFirstView ? (
    ''
  ) : (
    <p className={['help', 'is-danger', props.isValid ? 'is-hidden' : ''].join(' ')}>
      {props.errorText}
    </p>
  )
}

class GeneralTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isValid: false,
      errorText: '',
      isFirstView: true,
    }
  }

  validate = (text) => {
    if (this.props.validators.length > 0) {
      for (const validator of this.props.validators) {
        if (!validator.validation(text)) {
          console.log('invalid: ', text)
          this.setState(() => {
            return {
              isValid: false,
              errorText: validator.message,
            }
          })
          return
        }
      }
    }
    this.setState(() => {
      return {
        isValid: true,
        errorText: '',
      }
    })
  }

  render() {
    return (
      <>
        <SimpleTextInput
          label={this.props.label}
          rightIcon="fas fa-check"
          rightIconClass={this.state.isValid ? 'has-text-primary' : ''}
          leftIcon={this.props.leftIcon}
          leftIconClass={this.state.isValid ? 'has-text-primary' : ''}
          placeHolder={this.props.placeHolder}
          onChange={(e) => {
            this.validate(e.target.value)
            this.setState(
              () => {
                return {
                  isFirstView: false,
                }
              },
              () => this.props.onChange(e, this.state.isValid)
            )
          }}
          type={this.props.type}
        />
        <ErrorText
          isValid={this.state.isValid}
          errorText={this.state.errorText}
          isFirstView={this.state.isFirstView}
        />
      </>
    )
  }
}

export default GeneralTextInput
