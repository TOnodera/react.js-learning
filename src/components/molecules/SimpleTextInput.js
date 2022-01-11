import { Label } from '../atoms'
import React from 'react'

class SimpleTextInput extends React.Component {
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
            value={this.props.value}
          />
          <span
            className={['icon', 'is-small', 'is-left', this.props.leftIcon ? '' : 'is-hidden']
              .concat(this.props.leftIconClass || [])
              .join(' ')}
          >
            <i className={this.props.leftIcon}></i>
          </span>
          <span
            className={['icon', 'is-small', 'is-right', this.props.rightIcon ? '' : 'is-hidden']
              .concat(this.props.rightIconClass || [])
              .join(' ')}
          >
            <i className={this.props.rightIcon}></i>
          </span>
        </div>
      </div>
    )
  }
}

export default SimpleTextInput
