import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
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
      <Link className="navbar-item" to="/">
        ダッシュボード
      </Link>

      <div className="navbar-item has-dropdown is-hoverable">
        <span className="navbar-link">
          メニュー
        </span>

        <div className="navbar-dropdown">
          <Link
            className="navbar-item"
            to="/users"
          >
            ユーザー一覧
          </Link>
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
