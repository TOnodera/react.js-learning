import React from 'react'

class BasicCard extends React.Component {
    render() {
        return (
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        Card header
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
                        Lorem ipsum leo risus,
                        porta ac consectetur ac,
                        vestibulum at eros. Donec
                        id elit non mi porta
                        gravida at eget metus. Cum
                        sociis natoque penatibus
                        et magnis dis parturient
                        montes, nascetur ridiculus
                        mus. Cras mattis
                        consectetur purus sit amet
                        fermentum.
                    </div>
                </div>
            </div>
        )
    }
}

export default BasicCard
