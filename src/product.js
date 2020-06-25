import React from 'react'
import { mount, route } from 'navi'
import api from './api'

import './Products.css'

export default mount({
  '/:id': route({
    async getView(request) {
      let product = await api.fetchProduct(request.params.id)
      return <Product product={product} />
    }
  })
})


function Product({ product }) {
  return (


    <article className='Product'>
    <a href="/" className="home-button"><span role="img" aria-label="back button">👈</span> back home</a>
      <h1 className="product-intro detail">{product.title}<span style={{color: "rgb(255, 158, 0)"}}>.</span></h1>
      <p className="product-description">{product.paragraph}</p>
      <img className="product-hero" src={product.url}></img>
      <div className="row product-row">
      <div className="column"><img className="product-subhero" src={product.img1}></img></div>
      <div className="column"><img className="product-subhero" src={product.img2}></img></div>
      <div className="column"><img className="product-subhero" src={product.img3}></img></div>
      <div className="column"><img className="product-subhero" src={product.img4}></img></div>
      <div className="column"><img className="product-subhero" src={product.img5}></img></div>
      <div className="column"><img className="product-subhero" src={product.img6}></img></div>
      <div className="column"><img className="product-subhero" src={product.img7}></img></div>
      <div className="column"><img className="product-subhero" src={product.img8}></img></div>
      <div className="column"><img className="product-subhero" src={product.img9}></img></div>
      <div className="column"><img className="product-subhero" src={product.img10}></img></div>
      <div className="column"><img className="product-subhero" src={product.im11}></img></div>
      <div className="column"><img className="product-subhero" src={product.img12}></img></div>
      <div className="column"><img className="product-subhero" src={product.img13}></img></div>
      <div className="column"><img className="product-subhero" src={product.img14}></img></div>
      <div className="column"><img className="product-subhero" src={product.img15}></img></div>
      <div className="column"><img className="product-subhero" src={product.img16}></img></div>
      <div className="column"><img className="product-subhero" src={product.img17}></img></div>
      <div className="column"><img className="product-subhero" src={product.img18}></img></div>
      <div className="column"><img className="product-subhero" src={product.img19}></img></div>
      <div className="column"><img className="product-subhero" src={product.img20}></img></div>
      </div>
      <img className="product-hero" src={product.subhero}></img>
      <video className={product.video ? 'product-hero' : 'hidden'} autoPlay loop><source src={product.video}/></video>
      <video className={product.video2 ? 'product-hero' : 'hidden'} autoPlay loop><source src={product.video2}/></video>
    </article>

  )
}