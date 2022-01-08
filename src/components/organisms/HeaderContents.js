import React from 'react'
import PrivateNavbar from '../molecules/PrivateNavbar'
import PublicNavbar from '../molecules/PublicNavbar'
class HeaderContents extends React.Component {
    render() {
        return (
            <header className="header-contents">
                {this.props.isAuthenticated ? (
                    <PrivateNavbar />
                ) : (
                    <PublicNavbar />
                )}
            </header>
        )
    }
}

export default HeaderContents
