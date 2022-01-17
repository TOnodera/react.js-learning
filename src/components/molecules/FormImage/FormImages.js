import React from 'react'
import FormImage from './FormImage'
class FormImages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileImageComponents: [this.createFormImage(0)],
      files: [],
    }
  }
  createFormImage = (index) => {
    return {
      index: index,
      component: (
        <FormImage
          key={index}
          index={index}
          onDeleteButtonClicked={this.onDeleteButtonClicked}
          className="column is-one-quarter"
          onChange={(file) => {
            this.setState(
              () => {
                if (file) {
                  const files = this.state.files.slice()
                  files.push({
                    index,
                    file,
                  })
                  return { files }
                } else {
                  const files = this.state.files.filter((value) => value.index != index)
                  return { files }
                }
              },
              () => this.props.onChange(this.state.files)
            )
          }}
        />
      ),
    }
  }
  addFormImage = () => {
    this.setState((state) => {
      const fileImageComponents = state.fileImageComponents.slice()
      fileImageComponents.push(this.createFormImage(fileImageComponents.length + 1))
      return { fileImageComponents: fileImageComponents }
    })
  }
  onDeleteButtonClicked = (e, index) => {
    this.setState(
      (state) => {
        const fileImageComponents = state.fileImageComponents.filter((value) => {
          return value.index != index
        })
        const files = state.files.filter((value) => {
          return value.index != index
        })
        return {
          fileImageComponents,
          files,
        }
      },
      () => this.props.onDeleteButtonClicked(this.state.files)
    )
  }
  showComponents() {
    return this.state.fileImageComponents.map((value) => {
      return value.component
    })
  }
  render() {
    return (
      <>
        <div className="buttons is-pulled-right">
          <button className="button is-primary" onClick={this.addFormImage}>
            <i className="fas fa-plus-square"></i>
          </button>
        </div>
        <div className="columns is-flex-wrap-wrap">{this.showComponents()}</div>
      </>
    )
  }
}

export default FormImages
