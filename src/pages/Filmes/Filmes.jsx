import React from 'react'

// Css
import "./Filmes.css"

export default function Filmes({movies}) {

  return (
    <>
    <main>
     <section className='cardFilmes'>
      <h1>Filmes online</h1>
      <h2 className='subtitulo'>Os melhores filmes para assistir</h2>
      <div className='containerCardsFilme'>
        {movies && movies.map((filme) => (
          <div key={filme.id} className='descriptionFilme'>
            <img src={filme.img} alt={filme.name} />
            <h2>{filme.name}</h2>
            <p>{filme.diretor}</p>
          </div>
        ))}
      </div>
     </section>
    </main>
    </>
  )
}
