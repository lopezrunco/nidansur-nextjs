import Head from 'next/head'
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
        <h1 className='styles.title'>Home page</h1>
      </main>
    </div>
  )
}
