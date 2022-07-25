import { services } from "../data"
import TitleLight from "../components/TitleLight"
import styles from '../styles/ServicesPage.module.css'

const servicios = () => {
    return (
        <section className='container my-5'>
            <article className='row'>
                <div className='col-12 text-center'>
                    <TitleLight titleLight='Maquinaria vial y' titleBold='transportes en general' />
                    <p>Una modera flota de camiones y maquinaria para todas las necesidades. <br /> Un equipo capacitado y responsable a su servicio.</p>
                </div>
            </article>
            <article className='row mt-5'>
                <div className='col-md-6 border-end'>
                    {services.map((el, idx) => {
                        if (idx < 3) {
                            return (
                                <div key={idx} className='d-flex flex-row justify-content-end align-items-center gap-4 py-4 me-4'>
                                    <h6 className='mb-0 text-end'><b>{el}</b></h6>
                                    <div className={styles.icon}>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className='col-md-6 border-start'>
                    {services.map((el, idx) => {
                        if (idx > 2) {
                            return (
                                <div key={idx} className='d-flex flex-row-reverse justify-content-end align-items-center gap-4 py-4 ms-4'>
                                    <h6 className='mb-0 text-start'><b>{el}</b></h6>
                                    <div className={styles.icon}>
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </article>
        </section>
    )
}

export default servicios