import { NotFoundError } from 'navi'

const db = {
  evelyn: {
    title: 'evelyn mosby',
    thumbnail: ' https://secretoctopus.sfo2.digitaloceanspaces.com/evelyn-1.png',
    url: ' https://secretoctopus.sfo2.digitaloceanspaces.com/evelyn-2.png',
    subhero: ' https://secretoctopus.sfo2.digitaloceanspaces.com/evelyn-3.png',
    paragraph: 'A portfolio for a San Francisco based designer and retoucher.'
  },
  filmmakerssf: {
    title: 'Filmmakers Collaborative',
    thumbnail: ' https://secretoctopus.sfo2.digitaloceanspaces.com/filmmakers-1.png',
    url: ' https://secretoctopus.sfo2.digitaloceanspaces.com/filmmakers-1.png',
    subhero: ' https://secretoctopus.sfo2.digitaloceanspaces.com/filmmakers-2.png',
    paragraph: 'A website for a non-profit that aims to "to produce compelling films and media campaigns that engage audiences and create tangible public benefit."' },
  incognita: {
    title: 'Terra Incognita',
    thumbnail: 'https://secretoctopus.sfo2.digitaloceanspaces.com/incognita-4.png',
    url: 'https://secretoctopus.sfo2.digitaloceanspaces.com/incognita-1.png',
    img1: 'https://secretoctopus.sfo2.digitaloceanspaces.com/incognita-2.png',
    img2: 'https://secretoctopus.sfo2.digitaloceanspaces.com/incognita-3.png',
    paragraph: 'A website for a small Chicago based agency.'
  },
  lunr: {
    title: 'Lunr',
    thumbnail: 'https://secretoctopus.sfo2.digitaloceanspaces.com/lunr-title.png',
    url: 'https://secretoctopus.sfo2.digitaloceanspaces.com/lunr-title.png',
    img1: 'https://secretoctopus.sfo2.digitaloceanspaces.com/lunr-2.png',
    img2: ' https://secretoctopus.sfo2.digitaloceanspaces.com/lunr-1.png',
    paragraph: 'A landing page and store for mattress startup Lunr. Store build using Shopify and Apollo.'
  },
  oscar: {
    title: 'oscar',
    thumbnail: 'https://secretoctopus.sfo2.digitaloceanspaces.com/oscar-1.png',
    url: 'https://secretoctopus.sfo2.digitaloceanspaces.com/oscar-2.png',
    subhero: ' https://secretoctopus.sfo2.digitaloceanspaces.com/oscar-3.png',
    paragraph: 'A website for a Berlin based design studio.'
  },
  protean: {
    title: 'protean',
    thumbnail: 'https://secretoctopus.sfo2.digitaloceanspaces.com/protean-1.png',
    url: 'https://secretoctopus.sfo2.digitaloceanspaces.com/protean-2.png',
    subhero: ' https://secretoctopus.sfo2.digitaloceanspaces.com/protean-3.png',
    paragraph: 'A magazine for advertisement free leftist politics'
  },
  radiozoa: {
    title: 'radiozoa',
    thumbnail: 'https://secretoctopus.sfo2.digitaloceanspaces.com/radizoa-title.png',
    img1: 'https://secretoctopus.sfo2.digitaloceanspaces.com/radiozoa-1.png',
    img2: ' https://secretoctopus.sfo2.digitaloceanspaces.com/radiozoa-2.png',
    subhero: ' https://secretoctopus.sfo2.digitaloceanspaces.com/radiozoa-3.png',
    paragraph: 'A website for young college-aged artists to promote their work.'
  },
  supercluster: {
    title: 'supercluster',
    thumbnail: 'https://secretoctopus.sfo2.digitaloceanspaces.com/supercluster-2.png',
    video: ' https://secretoctopus.sfo2.digitaloceanspaces.com/supercluster2.mp4',
    subhero: ' https://secretoctopus.sfo2.digitaloceanspaces.com/supercluster-4.png',
    paragraph: 'A collaboration to improve app UX at Supercluster, an A24 and Dropbox company that reports on rocket launches. '
  },
  witch: {
    title: 'Nasty Witch',
    thumbnail: 'https://secretoctopus.sfo2.digitaloceanspaces.com/witch-1.png',
    url: 'https://secretoctopus.sfo2.digitaloceanspaces.com/witch-1.png',
    subhero: ' https://secretoctopus.sfo2.digitaloceanspaces.com/witch-2.png',
    paragraph: 'A small magazine built to talk about misconceptions of modern feminism.'
  },
  wolfpops: {
    title: 'wolfpops',
    thumbnail: 'https://secretoctopus.sfo2.digitaloceanspaces.com/wolfpops-title.png',
    video: ' https://secretoctopus.sfo2.digitaloceanspaces.com/wolfpops-3.mov',
    video2: ' https://secretoctopus.sfo2.digitaloceanspaces.com/wolfpops-4.mov',
    paragraph: 'A website and store built with webflow for a craft popscicle business.'
  },
  xyz: {
    title: 'xyz',
    thumbnail: 'https://secretoctopus.sfo2.digitaloceanspaces.com/xyz-title.png',
    url: ' https://secretoctopus.sfo2.digitaloceanspaces.com/xyz-title.png',
    img1: ' https://secretoctopus.sfo2.digitaloceanspaces.com/xyz-2.png',
    img2: ' https://secretoctopus.sfo2.digitaloceanspaces.com/xyz-1.png',
    paragraph: 'A website for a San Francisco based creative production studio.'
  },

}

export default {
  fetchProduct: async (id) => {
    await delay(100)
    let product = await db[id]
    if (!product) {
      throw new NotFoundError()
    }
    return product
  },
  fetchProducts: async () => {
    await delay(100)
    return db
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}