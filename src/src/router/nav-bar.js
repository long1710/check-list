import React from 'react'

const navBar = () => {
    return (
      <div className="outside">
            <nav className="nav bg-secondary p-2">
                <a className="nav-link text-light" href="/">Home</a>
                <a className="nav-link text-light" href="/skill">Skill</a>
                <a className="nav-link text-light" href="/instruction">Instruction</a>
            </nav>
        </div>
    )
}

export default navBar;