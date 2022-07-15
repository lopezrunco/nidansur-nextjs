import Head from 'next/head'
import HomeSlider from '../components/HomeSlider'
import ServicesHome from '../components/ServicesHome'
import styles from '../styles/Home.module.css'

export default function Home() {
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
      </main>
    </div>
  )
}
