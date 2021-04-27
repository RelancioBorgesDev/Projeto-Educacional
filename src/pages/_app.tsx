import Header from '../components/Header/Header'
import Principal from '../components/Main/Principal'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return(
  <div>
    <main>
      <Header />
       <Component {...pageProps} />
       <Principal/>
    </main>
  </div>
  )
}

export default MyApp
