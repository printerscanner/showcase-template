import React from 'react'
import { Link, useCurrentRoute } from 'react-navi'
import ImageMasonry from 'react-image-masonry';

import Hero from './Hero'
import About from './About'

import './Products.css'


export default function Landing() {
  // useCurrentRoute returns the lastest loaded Route object
  let { data } = useCurrentRoute()
  let productIds = Object.keys(data)

  return (
    <div>
    <h1 className="product-intro">recent projects<span style={{color: "red"}}>.</span></h1>
    <br></br>
    <br></br>

    <div className="product-container">
    <ImageMasonry numCols={2} forceOrder={false} className="image-container">
      {productIds.map(id =>
          <Link
            // turn this back on to re-add links
            href={`/product/${id}`}
            prefetch={null}
            key={id}
            >

            <img src={data[id].thumbnail} alt={data[id].thumbnail} className="tile"></img>
          </Link>
      )}
    </ImageMasonry>
    </div>
    </div>
  )
}

