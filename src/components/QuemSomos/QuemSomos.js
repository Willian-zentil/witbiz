import React from 'react'
import './QuemSomos.css'
import image from '../../image/cabo.png'
import boreal from '../../image/logo-boreal.webp'
import cabez from '../../image/logo-cabex.webp'
import indus from '../../image/logo-induscabos.webp'


function QuemSomos() {
    return (
        <>
            <div className='section-about'>
                <div className='container-content'>
                    <div className='container-about'>
                        <h3>Quem <span>Somos</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in elementum mi. Phasellus vulputate ante ut viverra ullalor sit amet, consectetur adipiscing elit. Maecenas in elementum mi. Phasellus vulputate ante ut viverra ullamcorper. Ut tincidunt mi nec quam egestas scelerisque in et ipsum. In  et finibus. In est est, interdum et mcorper. Ut tincidunt mi nec quam egestas scelerisque in et ipsum. In  et finibus. In est est, interdum et elit eget, tristique convallis lectus. Nunc nec luctus sapien.</p>

                        <p>Nam elit nunc, vestibulum sed egestas sit amet, elementum eu dolornc, vestibulum sed egestas sit amet, elementum eu dolor. Quisque et sagittis lacus. In et dictum ipsum. In id. Quisque et sagittis lacus. In et dictum ipsum. In id ullamcorper sem, eget efficitur orci. Pellentesque lobortis  sed quis ipsum.</p>

                        <p>Praesent in arcu venenatis nisl interdum dictum. Duis varius nibh at malesuada rutrum. Nunc egestas velit id erat aliquet, dignissim dapibus libero bibendum. Etiam auctor auctor velit sed tristique. Aliquam ut ex sed lorem aliquamnt in arcu venenatis nislbendum. Etiam auctor auctor velit sed tristique. Aliquam ut ex sed lorem al semper. Quisque egestas lorem augue, id cursus metm in.</p>

                        <p>Quisque egestas nisl et leo elementum, at egestas mauris gravida. Mauris non urna nec nibh hendrerit commodo. Curabitur libero dolor, malesuada sit amet ies.</p>
                    </div>
                    <div className='container-imgs'>
                        <img src={image} />
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/52N2_bHtmUs?si=sPAsGJQuVdnd88XZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div className='section-parceiros'>
                <div className='container-parceiros-text'>
                    <h3>Nossos <br />Parceiros</h3>
                    <p>Quisque egestas nisl et leo elementum, at egestas mauris gravida. Mauris non urna nec nibh hendrerit commodo.</p>
                </div>
                <div>
                    <img src={boreal} />
                    <img src={cabez} />
                    <img src={indus} />
                </div>
            </div>
        </>
    )
}

export default QuemSomos