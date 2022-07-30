import { motion } from 'framer-motion'
import Top from './Top'
import Header from './Header'
import Navbar from './Navbar'
import Bottom from './Bottom'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: .3 } }} viewport={{ once: true }}>
                <Top />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: .3 } }} viewport={{ once: true }}>
                <Header />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: .3 } }} viewport={{ once: true }}>
                <Navbar />
            </motion.div>
            {children}
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: .3 } }} viewport={{ once: true }}>
                <Bottom />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: .3 } }} viewport={{ once: true }}>
                <Footer />
            </motion.div>
        </div>
    )
}

export default Layout