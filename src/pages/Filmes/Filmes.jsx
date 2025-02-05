import React from 'react'

// components
import HeaderPages from '../../components/NavBar/HeaderPages/HeaderPages'

// Css
import "./Filmes.css"
import Cards from '../../components/NavBar/Cards/Cards'

const url = "http://localhost:3001/movies";

export default function Filmes({movies}) {
  // const [url, setUrl] = useState("http://localhost:3001/movies");
  return (
    <>
    <main>
     <section className='cardFilmes'>
      <HeaderPages titulo="Filmes online" subtitulo="Os melhores filmes para assistir"/>
      <Cards url={url}/>
     </section>
    </main>
    </>
  )
}
