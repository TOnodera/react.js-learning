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
      onClick={props.onClick}
      role="button"
      className={[
        'navbar-burger',
        props.isActive ? 'is-active' : '',
      ].join(' ')}
      aria-label="menu"
      aria-expanded="false"
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
            ユーザー管理
          </Link>
          <Link
            className="navbar-item ml-3"
            to="/users/create"
          >
            ユーザー作成
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

export function Label(props) {
  return (
    <label className="label">
      {props.content}
    </label>
  )
}
