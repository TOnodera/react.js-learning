import React from 'react'
import { useLocation, Link } from 'react-router-dom'

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
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <Link to="/">top</Link>
        </li>
        {paths.map((path) => (
          <li key={path}>
            <Link to={(memo += '/' + path)}>{path}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Breadcrumb
