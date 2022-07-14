import Top from './Top'
import Header from './Header'
import Navbar from './Navbar'
import Bottom from './Bottom'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Top />
            <Header />
            <Navbar />
                {children}
            <Bottom />
            <Footer />
        </div>
    )
}

export default Layout