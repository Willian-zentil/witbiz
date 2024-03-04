import React from 'react'
import './Condus.css'
import img1 from '../../image/qualidade.webp'
import img2 from '../../image/exp.webp'
import img3 from '../../image/atendimento.webp'
import img4 from '../../image/metro.webp'
import img5 from '../../image/logistica.webp'

function Condus() {
    return (
        <div className='section-condus'>
            <div className='container-condus'>
                <div className='cards-condus no-border'>
                    <h3>Aqui na Conduscamp você encontra</h3>
                </div>
                <div className='cards-condus'>
                    <img src={img1} />
                    <span>QUALIDADE</span>
                    <p>comercialização de condutores elétricos, oferecendo os melhores e mais modernos produtos disponíveis no mercado.
                        Contamos com uma equipe em constante</p>
                </div>
                <div className='cards-condus'>
                    <img src={img2} />
                    <span>QUALIDADE</span>
                    <p>comercialização de condutores elétricos, oferecendo os melhores e mais modernos produtos disponíveis no mercado.
                        Contamos com uma equipe em constante</p>
                </div>
                <div className='cards-condus'>
                    <img src={img3} />
                    <span>QUALIDADE</span>
                    <p>comercialização de condutores elétricos, oferecendo os melhores e mais modernos produtos disponíveis no mercado.
                        Contamos com uma equipe em constante</p>
                </div>
                <div className='cards-condus'>
                    <img src={img4} />
                    <span>QUALIDADE</span>
                    <p>comercialização de condutores elétricos, oferecendo os melhores e mais modernos produtos disponíveis no mercado.
                        Contamos com uma equipe em constante</p>
                </div>
                <div className='cards-condus'>
                    <img src={img5} />
                    <span>QUALIDADE</span>
                    <p>comercialização de condutores elétricos, oferecendo os melhores e mais modernos produtos disponíveis no mercado.
                        Contamos com uma equipe em constante</p>
                </div>
            </div>

        </div>
    )
}

export default Condus