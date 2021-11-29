import React from 'react'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="left">
                    <div>Icon</div>
                    <button className="btn">Brooklyn, NY</button>
                </div>
                <div className="right">
                    <div className="right-column-1">
                        <input
                            className="input"
                            type="text"
                            placeholder="What you want to eat?"
                        />
                        <button className="btn">Search</button>
                    </div>
                    <div className="right-column-2">
                        <div>Icon</div>
                        <button className="btn secondary">
                            Create Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
