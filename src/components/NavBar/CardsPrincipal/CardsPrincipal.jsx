import React from 'react'

// css
import "./CardsPrincipalStyle.css"

export default function CardsPrincipal({img, name, diretor}) {
  return (
    <div className='CardPrincipal'>
        <div>
          <img src="https://br.web.img2.acsta.net/c_150_200/img/b1/35/b1351babe7a777b7a97eded3db356990.jpg" alt="" />
          <h2>Ainda estou aqui</h2>
          <p>Walter Salles</p>
        </div>

        <div>
          <img src="https://br.web.img2.acsta.net/c_150_200/pictures/21/09/14/18/49/5442347.jpg" alt="" />
          <h2>Round six</h2>
          <p>Walter Salles</p>
        </div>

        <div>
          <img src="https://br.web.img3.acsta.net/c_150_200/pictures/24/01/23/19/39/5587494.jpg" alt="" />
          <h2>Sonic 3 - o Filme</h2>
          <p>Jelf Fowler</p>
        </div>
    </div>
  )
}
