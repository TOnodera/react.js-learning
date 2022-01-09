import React from 'react'
import { useLocation } from 'react-router-dom'

const parsePath = (pathname) => {
  if (pathname == '/') {
    return []
  }
  const splits = pathname.split('/')
  const paths = splits.slice(1)
  return paths
}

const Breadcrumb = () => {
  const location = useLocation()
  const paths = parsePath(location.pathname)
  let memo = ''
  return (
    <nav
      className="breadcrumb"
      aria-label="breadcrumbs"
    >
      <ul>
        <li>
          <a href="/">top</a>
        </li>
        {paths.map((path) => (
          <li key={path}>
            <a href={(memo += '/' + path)}>
              {path}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Breadcrumb
