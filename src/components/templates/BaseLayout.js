import React from 'react'
import HeaderContents from '../organisms/HeaderContents'
import FooterContents from '../organisms/FooterContents'

class BaseLayout extends React.Component {
    render() {
        return (
            <>
                <HeaderContents
                    isAuthenticated={
                        this.props.isAuthenticated
                    }
                />
                <main className="main-contents">
                    main
                </main>
                <FooterContents />
            </>
        )
    }
}

export default BaseLayout
