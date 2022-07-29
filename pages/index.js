import Head from 'next/head'
import { useRouter } from 'next/router'
import Equipment from '../components/Equipment'
import HomeSlider from '../components/HomeSlider'
import ServicesHome from '../components/ServicesHome'
import ScrollToTop from '../components/ScrollToTop'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Nidansur S.A | Maquinaria vial y transportes</title>
        <meta name="description" content="Nidansur SA, Servicio de Maquinaria vial y transportes en general, Sarandí Grande, Florida, Uruguay." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeSlider />
        <ServicesHome />
        <section className='container-fluid p-0'>
          <Equipment />
        </section>
      </main>
      <ScrollToTop scrollTo={router.pathname} />
    </div>
  )
}
