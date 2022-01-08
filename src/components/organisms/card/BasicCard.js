import React from 'react'

class BasicCard extends React.Component {
  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            {this.props.header}
          </p>
          <button
            className="card-header-icon"
            aria-label="more options"
          >
            <span className="icon">
              <i
                className="fas fa-angle-down"
                aria-hidden="true"
              ></i>
            </span>
          </button>
        </header>
        <div className="card-content">
          <div className="content">
            {this.props.content}
          </div>
        </div>
      </div>
    )
  }
}

export default BasicCard
