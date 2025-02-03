import React from 'react'
import { Link } from 'react-router-dom'

// Css
import "./NavBar_Style.css"

export default function NavBar() {
  return (
    <header>
        <div className="containerLogo">
            <p>CineFlix</p>
        </div>

        <nav className='containerMenu'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/filmes">Filmes</Link></li>
                <li><Link to="/series">Series</Link></li>
                <li><Link to="/apoie">Apoie o Projeto</Link></li>
            </ul>
        </nav>
    </header>
  )
}
