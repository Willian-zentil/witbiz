import React, { useState, useEffect } from 'react'
import './Noticias..css'


function Noticias() {

    const [post1, setPost1] = useState()
    const [post2, setPost2] = useState()

    const [content1, setContent1] = useState()
    const [content2, setContent2] = useState()

    const [img1, setimg1] = useState()
    const [img2, setimg2] = useState()


    //async function foo() {
    useEffect(() => {
        fetch("https://barbarascalon.com.br/wp-json/wp/v2/posts?_embed").then(function (r) {
            return r.json()
        }).then(function (posts) {
            console.log(posts)
            setPost1(posts[4].title.rendered)
            setPost2(posts[3].title.rendered)
            setContent1(posts[4].slug)
            setContent2(posts[3].slug)
            setimg1(posts[4]._embedded['wp:featuredmedia']['0'].source_url)
            setimg2(posts[3]._embedded['wp:featuredmedia']['0'].source_url)
        })
    })

    // foo()


    return (
        <div className='section-parceiros'>
            <div className='container-parceiros-text'>
                <h3>Notícias & <br />Novidades</h3>
                <p>Quisque egestas nisl et leo elementum, at egestas mauris gravida. Mauris non urna nec nibh hendrerit commodo.</p>
            </div>
            <div id="posts">
                <div className='card-news'>
                    <img src={img1} />
                    <span>{post1}</span>
                    <p>{content1}</p>
                </div>
                <div className='card-news'>
                    <img src={img2} />
                    <span> {post2}</span>
                    <p>{content2}</p>
                </div>
               
            </div>
        </div>
    )
}

export default Noticias