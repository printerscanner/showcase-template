import { mount, route, lazy } from 'navi'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Router, View } from 'react-navi'
import api from './api'
import Products from './Products'

import './index.css'

import App from './App'

const routes =
  mount({
    '/': route({
      title: "",
      getData: () => api.fetchProducts(),
      view: <Products />,
    }),
    '/product': lazy(() => import('./product')),
  })

ReactDOM.render(
  <Router routes={routes}>
    <App>
      <Suspense fallback={null}>
        <View />
       </Suspense>

      </App>




  </Router>,
  document.getElementById('root')
)