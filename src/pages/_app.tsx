import Header from '../components/Header/Header'
import Principal from '../components/Main/Principal'
import Section from '../components/Section/section'
import SectionMotivos from '../components/Section_motivos/sectionMotivos'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return(
  <div>
    <main>
      <Header />
       <Component {...pageProps} />
       <Principal/>
       <Section/>
       <SectionMotivos/>
    </main>
  </div>
  )
}

export default MyApp
