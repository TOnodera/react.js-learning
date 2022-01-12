import React from 'react'
import noImage from '../../images/noimage.png'

class SimpleImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      src: props.src,
    }
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
