import React from 'react'
import './Footer.css'
import insta from '../../image/insta-icon.png'
import face from '../../image/face-icon.png'
import ytb from '../../image/ytb-icon.png'
import link from '../../image/link-icon.png'

function Footer() {
    return (
        <div className='section-footer'>
            <div className='container-social'>
                <img src={insta} />
                <span>Instagram</span>
                <img src={face} />
                <span>Facebook</span>
                <img src={ytb} />
                <span>Youtube</span>
                <img src={link} />
                <span>Linkedin</span>
            </div>
            <footer>
                <div className='container-footer'>
                    <div>
                        <span>Informações de Contato</span>
                        <p>Rua Dr. Fernão Pompeu de Camargo, 1936 Campinas - SP</p>
                        <a href='#'>Contato@conduscamp.com.br</a>
                        <p>19 3738-3399</p>
                        <p>Segunda a Sexta, das 08 ás 18h</p>
                    </div>
                    <div>
                        <span>Blog</span>
                        <a href='#'>Noticias</a>
                        <a href='#'>Novidades</a>
                        <a href='#'>Dicas</a>
                    </div>
                    <div>
                        <span>Produtos</span>
                        <a href='#'>Cabos em Alumínio</a>
                        <a href='#'>Cabos de incêndio</a>
                        <a href='#'>Cabos de Comando</a>
                        <a href='#'>Cabos de Instrumentação</a>
                    </div>
                    <div>
                        <span>E-mail Marketing</span>
                        <input placeholder='Digite seu e-mail...' />
                        <button>Enviar</button>
                    </div>
                </div>
            </footer>
            <div className='container-bottom'>
                <div>
                    <span>conduscamp 2022 - Todos os direitos reservador</span>
                    <span>Desenvolvido por: Witbiz</span>
                </div>
            </div>
        </div>
    )
}

export default Footer