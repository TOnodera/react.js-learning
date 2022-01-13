import React from 'react'
import noImage from '../../../images/noimage.png'

class SimpleImage extends React.Component {
  constructor(props) {
    super(props)
    this.fileRef = React.createRef()
    this.state = {
      src: props.src,
    }
  }
  onDeleteButtonClicked = (e) => {
    this.fileRef.current.value = null
    this.setState(() => {
      return {
        src: '',
      }
    })
    this.props.onDeleteButtonClicked(e)
  }
  fileHasChanged = (e) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      this.setState(() => {
        return {
          src: e.target.result,
        }
      })
    }
    reader.readAsDataURL(e.target.files[0])
  }
  render() {
    return (
      <>
        <div className={this.props.className}>
          <div className="card">
            <div className="card-content">
              <button
                className="delete is-pulled-right"
                onClick={this.onDeleteButtonClicked}
              ></button>
              <div className="is-centered columns">
                <div className={['column', this.state.src ? '' : 'is-hidden'].join(' ')}>
                  <img src={this.state.src} />
                </div>
                <div className={['column', this.state.src ? 'is-hidden' : ''].join(' ')}>
                  <img src={noImage} />
                </div>
              </div>
              <div className="file is-primary is-centered">
                <label className="file-label">
                  <input
                    className="file-input"
                    type="file"
                    ref={this.fileRef}
                    name="resume"
                    onChange={this.fileHasChanged}
                  />
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">画像追加</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default SimpleImage
