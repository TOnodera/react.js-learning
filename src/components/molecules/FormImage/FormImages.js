import React from 'react'
import FormImage from './FormImage'

class FormImages extends React.Component {
  render() {
    return (
      <div className="columns is-flex-wrap-wrap">
        <FormImage className="column is-one-quarter" />
        <FormImage className="column is-one-quarter" />
        <FormImage className="column is-one-quarter" />
        <FormImage className="column is-one-quarter" />
        <FormImage className="column is-one-quarter" />
      </div>
    )
  }
}

export default FormImages
