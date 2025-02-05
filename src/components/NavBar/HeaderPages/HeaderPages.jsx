import React from 'react'

// css
import "./style.css"

export default function HeaderPages({titulo,subtitulo}) {
  return (
    <div>
        <h1 className='titulo'>{titulo}</h1>
        <h2 className='subtitulo'>{subtitulo}</h2>
    </div>
  )
}
