import React from 'react'
import { Label } from '../atoms'

class BasicTextInput extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Label content={this.props.label} />
        <div className="control has-icons-left has-icons-right">
          <input
            className={['input', this.state.isValid ? 'is-success' : 'is-danger'].join(' ')}
            type="text"
            placeholder={this.props.placeHolder}
            onChange={this._onChange}
          />
          <span className="icon is-small is-left">
            <i className={this.props.leftIcon}></i>
          </span>
          <span
            className={[
              'icon',
              'is-small',
              'is-right',
              this.state.isValid ? 'has-text-primary' : '',
            ].join(' ')}
          >
            <i className="fas fa-check"></i>
          </span>
        </div>
      </>
    )
  }
}

export default BasicTextInput
