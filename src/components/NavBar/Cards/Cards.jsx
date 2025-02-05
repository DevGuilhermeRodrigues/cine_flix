import React, { useState, useEffect } from 'react'

// css
import "./style.css"

export default function Cards({url}) {
  // const [url, setUrl] = useState("http://localhost:3001/movies");
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function FetchData(){
        const res = await fetch(url)
        const data = await res.json()

        setFilmes(data)
    }

    FetchData()
  }, [])

  return (
    <div className='CardPrincipal'>
        {filmes && filmes.map((movie) => (
            <div className='CardCartaz'>
                <img src={movie.img} alt={movie.name} />
                <h2>{movie.name}</h2>
                <p>{movie.diretor}</p>
            </div>
        ))}
    </div>
  )
}
