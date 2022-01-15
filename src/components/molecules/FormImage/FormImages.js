import React from 'react'

class FormImages extends React.Component {
  render() {
    return <div className="columns is-flex-wrap-wrap">{this.props.children}</div>
  }
}

export default FormImages
