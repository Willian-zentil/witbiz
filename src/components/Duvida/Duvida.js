import React from 'react'
import './Duvida.css'

function Duvida() {
    return (
        <div className='section-duvida'>
            <div className='container-duvida'>
                <div className='container-title'>
                    <h3>Dúvida?<br />Fale com a Conduscamp</h3>
                </div>
                <form>
                    <input type="text" id="fname" name="fname" placeholder='Nome completo' />
                    <div className='container-half'>
                        <input type="tel" id="fname" name="fname" placeholder='Telefone' />
                        <input type="email" id="fname" name="fname" placeholder='Email' />
                    </div>

                    <input type="text" id="fname" name="fname" placeholder='Mensagem' className='mensagem' />

                    <button>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Duvida