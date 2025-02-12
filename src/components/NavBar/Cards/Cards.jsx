import React, { useState, useEffect } from 'react'

// css
import "./style.css"

export default function Cards({url}) {
  // const [url, setUrl] = useState("http://localhost:3001/movies");
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    async function FetchData(){
        const res = await fetch(url)
        const data = await res.json()

        setFilmes(data)
    }

    FetchData()
    setLoading(false)
  }, [])

  return (
    <>
    {loading && <p>Carregando itens</p>}
    <div className='CardPrincipal'>
        {filmes && filmes.map((movie) => (
            <div className='CardCartaz' key={movie.id}>
                <img src={movie.img} alt={movie.name} />
                <h2>{movie.name}</h2>
                <p>{movie.diretor}</p>
            </div>
        ))}
    </div>
    </>
  )
}
