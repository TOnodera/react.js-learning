import React from 'react'

class BasicCard extends React.Component {
  render() {
    return (
      <div className="card">
        <header className={['card-header', this.props.header ? '' : 'is-hidden']}>
          <p className="card-header-title">{this.props.header}</p>
        </header>
        <div className="card-content">
          <div className="content">{this.props.content}</div>
        </div>
        <div className={['card-footer', this.props.footer ? '' : 'is-hidden']}>
          <div className="card-footer-item">{this.props.footer}</div>
        </div>
      </div>
    )
  }
}

export default BasicCard
