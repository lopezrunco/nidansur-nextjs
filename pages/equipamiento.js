import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Equipment from "../components/Equipment"
import Video from "../components/Video"
import ScrollToTop from '../components/ScrollToTop'
import Breadcrumb from '../components/Breadcrumb'

const equipamiento = () => {
    const router = useRouter()

    return (
        <>
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: .3 } }} viewport={{ once: true }}>
                <Breadcrumb path={router.pathname} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: .3 } }} viewport={{ once: true }}>
                <section className='container my-5'>
                    <Equipment />
                </section>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: .3 } }} viewport={{ once: true }}>
                <Video videoUrl='https://www.youtube.com/embed/XPIXr7np8QA' videoTitle='Nuestros equipos trabajando' />
            </motion.div>
            <ScrollToTop scrollTo={router.pathname} />
        </>
    )
}

export default equipamiento