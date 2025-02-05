import React, { useState, useEffect } from 'react'

// css
import "./Style.css"

// components
import HeaderPages from '../../components/NavBar/HeaderPages/HeaderPages'
import Cards from '../../components/NavBar/Cards/Cards'

// url
const url = "http://localhost:3001/series";

export default function Series() {
  return (
    <main>
      <section className='cardSeries'>
        <HeaderPages 
         titulo="Series online"
         subtitulo="As melhores series para assitir" 
        />
      <Cards url={url}/>
      </section>
    </main>
  )
}
