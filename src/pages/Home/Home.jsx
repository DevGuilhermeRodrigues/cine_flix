import React from 'react'

// css 
import "./Home.css"

import HeaderPages from '../../components/NavBar/HeaderPages/HeaderPages'
import CardsPrincipal from '../../components/NavBar/CardsPrincipal/CardsPrincipal'

export default function Home() {
  return (
    <main className='container-home'>
      <section className='CabecalhoHome'>
        <HeaderPages titulo="Mais assistidos" subtitulo="Conheça o melhor do cinema"/>
        <CardsPrincipal />
      </section>
    </main>
  )
}
