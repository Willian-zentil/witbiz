import React from 'react'
import './Fullbanner.css'
import image from '../../image/wire.png'

function Fullbanner() {
  return (
    <div className='section-home'>
        <header className='menu'>
            <div className='container-menu'>
                <a href='\'>Inicial</a>
                <a href='\'>Produtos</a>
                <a href='\'>Quem Somos</a>
                <a href='\'>Blog</a>
                <a href='\'>Contato</a>
                <a className='btn-white' href='#'>Loja virtual</a>
            </div>
        </header>
        <div className='banner'>
            <span>ESPECIALISTAS E REFERÊNCIA EM</span>
            <h3>CABOS ELÉTRICOS</h3>
            <button className='btn-saiba'>SAIBA MAIS</button>
        </div>
        <div className='container-cards'>
            <div className='card'>
                <img src={image} />
                <span>Cabos em alumínio</span>
                <span>Resistente e Versátil </span>
                <button className='btn-saiba'>VER MAIS</button>
            </div>
            <div className='card'>
                <img src={image} />
                <span>Cabos de incêndio</span>
                <span>Blind Shield</span>
                <button className='btn-saiba'>VER MAIS</button>
            </div>
            <div className='card'>
                <img src={image} />
                <span>Cabos de instrumentação</span>
                <span>Resistente e Versátil</span>
                <button className='btn-saiba'>VER MAIS</button>
            </div>
            <div className='card'>
                <img src={image} />
                <span>Cabos de Comando</span>
                <span>Resistente e Versátil</span>
                <button className='btn-saiba'>VER MAIS</button>
            </div>
        </div>
    </div>
  )
}

export default Fullbanner