import logo from '../../images/logo.svg'
export function Logo() {
  return (
    <a className="navbar-item" href="/">
      <img src={logo} width="100" />
    </a>
  )
}

export function HambergerButton(props) {
  return (
    <a
      role="button"
      className="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target={props.target}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  )
}

export function NavbarItem() {
  return (
    <div className="navbar-start">
      <a className="navbar-item">Home</a>

      <a className="navbar-item">Documentation</a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">More</a>

        <div className="navbar-dropdown">
          <a className="navbar-item">About</a>
          <a className="navbar-item">Jobs</a>
          <a className="navbar-item">Contact</a>
          <hr className="navbar-divider" />
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>
  )
}

export function NavbarLoginButtons() {
  return (
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-light">
            Log Out
          </a>
        </div>
      </div>
    </div>
  )
}
