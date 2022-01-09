import { Label } from '../atoms'
import React from 'react'
class BasicTextInput extends React.Component {
  render() {
    return (
      <div className="field">
        <Label content={this.props.label} />
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-success"
            type="text"
            placeholder={this.props.placeHolder}
            onChange={this.props.onValueChange}
          />
          <span className="icon is-small is-left">
            <i
              className={this.props.leftIcon}
            ></i>
          </span>
          <span className="icon is-small is-right">
            <i
              className={this.props.rightIcon}
            ></i>
          </span>
        </div>
        <p className="help is-success">
          This username is available
        </p>
      </div>
    )
  }
}

export default BasicTextInput
