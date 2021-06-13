import '../styles/global.scss'
import React, { useState } from 'react'
import PaginaInicial from '../components/PaginaInicial/PaginaInicial'
import QuemSomos from '../components/QuemSomos/QuemSomos'
import Contato from '../components/Contato/Contato'
import {StaticRouter as Router , Switch, Route, Link} from 'react-router-dom';
import { createMemoryHistory } from 'history';


export default function App({ Component, pageProps }) {
  const history = createMemoryHistory();
  return(
       <Router history={history}>
          <Switch>
            <Route exact path="/PaginaInicial"  component={PaginaInicial}/>
            <Route path="/QuemSomos" exact component={QuemSomos}/>
            <Route path="/Contato"exact component={Contato}/>
            <Component {...pageProps} />
          </Switch>
        </Router>  
  )
}




