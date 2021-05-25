import '../styles/global.scss'
import React, { useState } from 'react'
import InputModal from '../components/PaginaInicial/loginModal/InputModal'
import PaginaInicial from '../components/PaginaInicial/PaginaInicial'
import QuemSomos from '../components/QuemSomos/QuemSomos'

export default function App({ Component, pageProps }) {

  return(
  <div>
    <main>
        <PaginaInicial/>
       
       <Component {...pageProps} />
       
    </main>
  </div>
  )
}


