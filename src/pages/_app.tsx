import Header from '../components/Header/Header'
import Principal from '../components/Main/Principal'
import Section from '../components/Section/section'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return(
  <div>
    <main>
      <Header />
       <Component {...pageProps} />
       <Principal/>
       <Section/>
    </main>
  </div>
  )
}

export default MyApp
