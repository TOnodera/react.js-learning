import React from 'react'
import NavbarBrand from './navbar/NavbarBrand'

class PublicNavbar extends React.Component {
    render() {
        return (
            <nav
                className="navbar"
                role="navigation"
                aria-label="main navigation"
            >
                <NavbarBrand />
            </nav>
        )
    }
}

export default PublicNavbar
