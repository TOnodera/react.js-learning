import { Label } from '../atoms'
import React from 'react'

class SimpleTextInput extends React.Component {
  constructor(props) {
    super(props)
  }
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
          <span
            className={[
              'icon',
              'is-small',
              'is-left',
              this.leftIcon ? '' : 'is-hidden',
            ].join(' ')}
          >
            <i
              className={this.props.leftIcon}
            ></i>
          </span>
          <span
            className={[
              'icon',
              'is-small',
              'is-right',
              this.rightIcon ? '' : 'is-hidden',
            ].join(' ')}
          >
            <i
              className={this.props.rightIcon}
            ></i>
          </span>
        </div>
      </div>
    )
  }
}

export default SimpleTextInput
