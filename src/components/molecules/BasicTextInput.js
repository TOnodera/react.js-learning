import { Label } from '../atoms'
import React from 'react'

class BasicTextInput extends React.Component {
  render() {
    return (
      <div className="field">
        <Label content={this.props.label} />
        <div className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="text"
            placeholder={this.props.placeHolder}
            onChange={this.props.onChange}
          />
          <span className="icon is-small is-left">
            <i
              className={this.props.leftIcon}
            ></i>
          </span>
        </div>
      </div>
    )
  }
}

export default BasicTextInput
