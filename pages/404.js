import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/router'
import ScrollToTop from "../components/ScrollToTop"
import styles from "../styles/PageNotFound.module.css"

const PageNotFound = () => {
    const router = useRouter()

    return (
        <section className={styles.pageNotFound}>
            <article className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h2>Error 404!</h2>
                        <h3>Página no encontrada</h3>
                        <Link href="/" >
                            <span className={styles.backHomeBtn}>
                                <i className="fa-solid fa-house"></i>
                                Volver a Inicio
                            </span>
                        </Link>
                        <p>No pudimos encontrar la página que busca. <br /> Esto puede suceder por alguna de estas razones:</p>
                        <ul>
                            <li><i className="fa-solid fa-chevron-right"></i> La página ha sido movida</li>
                            <li><i className="fa-solid fa-chevron-right"></i> La página no existe más</li>
                            <li><i className="fa-solid fa-chevron-right"></i> Ha escrito una dirección errónea</li>
                        </ul>
                    </div>
                    <div className='col-lg-6 d-none d-lg-block'>
                        <Image
                            src='/assets/not-found.jpg'
                            width='374px'
                            height='298px'
                            alt='nidansur-pagina-no-encontrada' />
                    </div>
                </div>
            </article>
            <ScrollToTop scrollTo={router.pathname} />
        </section>
    )
}

export default PageNotFound