import React from 'react'

const navBar = () => {
    return(
        <div className = "outside">
            <nav class = "nav">
                <a class = "nav-link" href = "/home">Home</a>
                <a class = "nav-link" href = "/skill">Skill</a>
                <a class = "nav-link" href = "/todo">Todo</a>
            </nav>
        </div>
    )
}

export default navBar;