import React from 'react'

import "./NavBar_Style.css"

export default function NavBar() {
  return (
    <header>
        <div className="containerLogo">
            <p>CineFlix</p>
        </div>

        <nav>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Filmes</a></li>
                <li><a href='#'>Series</a></li>
                <li><a href='#'>Apoie</a></li>
            </ul>
        </nav>
    </header>
  )
}
