import React from 'react'

const navBar = () => {
    return (
        <div className="outside">
            <nav className="nav">
                <a className="nav-link" href="/">Home</a>
                <a className="nav-link" href="/skill">Skill</a>
                <a className="nav-link" href="/todo">Todo</a>
            </nav>
        </div>
    )
}

export default navBar;