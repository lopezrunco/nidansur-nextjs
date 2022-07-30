import Head from 'next/head'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
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
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: .3 } }} viewport={{ once: true }}>
          <HomeSlider />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: .3 } }} viewport={{ once: true }}>
          <ServicesHome />
        </motion.div>
        <section className='container-fluid p-0'>
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: .3 } }} viewport={{ once: true }}>
            <Equipment />
          </motion.div>
        </section>
      </main>
      <ScrollToTop scrollTo={router.pathname} />
    </div>
  )
}
