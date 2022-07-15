import { services } from "../data"
import TitleLight from "./TitleLight"
import styles from '../styles/ServicesHome.module.css'


const ServicesHome = () => {
    return (
        <section className='my-5'>
            <TitleLight titleLight='Nuestros' titleBold='servicios' />
            <article className={styles.servicesGrid}>
                <div className='container'>
                    <div className='row'>
                        {services.map((el, idx) => (
                            <div className='col-md-6 col-lg-4' key={idx}>
                                <div className={styles.item}>
                                    <div className={styles.icon}>
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <h6>{el}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </section>
    )
}

export default ServicesHome