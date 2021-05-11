import Footer from '../components/Footer/footer'
import Header from '../components/Header/Header'
import Principal from '../components/Main/Principal'
import Section from '../components/Section/section'
import SectionMotivos from '../components/Section_motivos/sectionMotivos'
import SectionNovidades from '../components/Section_novidades/sectionNovidades'
import '../styles/global.scss'

export default function App({ Component, pageProps }) {
  return(
  <div>
    <main>
      <Header />
       <Component {...pageProps} />
       <Principal/>
       <Section/>
       <SectionMotivos/>
       <SectionNovidades/>
       <Footer/>
    </main>
  </div>
  )
}


