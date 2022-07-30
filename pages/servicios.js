import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import TitleLight from "../components/TitleLight"
import ServicesGrid from "../components/ServicesGrid"
import WhyUs from "../components/WhyUs"
import ScrollToTop from '../components/ScrollToTop'
import Breadcrumb from '../components/Breadcrumb'

const servicios = () => {
    const router = useRouter()

    return (
        <>
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: .3 } }} viewport={{ once: true }}>
                <Breadcrumb path={router.pathname} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: .3 } }} viewport={{ once: true }}>
                <section className='container my-5'>
                    <article className='row'>
                        <div className='col-12 text-center'>
                            <TitleLight titleLight='Maquinaria vial y' titleBold='transportes en general' />
                            <p>Una modera flota de camiones y maquinaria para todas las necesidades. <br /> Un equipo capacitado y responsable a su servicio.</p>
                        </div>
                    </article>
                    <article className='row mt-5'>
                        <ServicesGrid />
                    </article>
                </section>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: .3 } }} viewport={{ once: true }}>
                <section className='pb-0'>
                    <WhyUs />
                </section>
            </motion.div>
            <ScrollToTop scrollTo={router.pathname} />
        </>
    )
}

export default servicios