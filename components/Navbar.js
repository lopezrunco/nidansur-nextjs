import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    const router = useRouter()

    return (
        <nav className={`${styles.nav} navbar navbar-expand-lg navbar-dark p-lg-0`}>
            <div className='container justify-content-end'>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link href='/'>
                                <a className={router.asPath == '/' ? 'nav-link active' : 'nav-link'} aria-current='page'>Inicio</a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/nuestra-empresa'>
                                <a className={router.asPath == '/nuestra-empresa' ? 'nav-link active' : 'nav-link'} aria-current='page'>Nuestra empresa</a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/servicios'>
                                <a className={router.asPath == '/servicios' ? 'nav-link active' : 'nav-link'} aria-current='page'>Servicios</a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/equipamientos'>
                                <a className={router.asPath == '/equipamientos' ? 'nav-link active' : 'nav-link'} aria-current='page'>Equipamientos</a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/contacto'>
                                <a className={router.asPath == '/contacto' ? 'nav-link active' : 'nav-link'} aria-current='page'>Contacto</a>
                            </Link>
                        </li>
                    </ul>
                    <form className='d-none d-lg-flex'>
                        <Link href='tel:+59899350967'>
                            <p className={styles.phoneContact}>¿Tiene una consulta? Llámenos al: <span>099 350 967</span></p>
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar