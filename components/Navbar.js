import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { mainMenuLinks } from '../data'

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link href='/'>
                                <a className='nav-link active' aria-current='page'>Inicio</a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/nuestra-empresa'>
                                <a className='nav-link'>Nuestra empresa</a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/servicios'>
                                <a className='nav-link'>Servicios</a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/equipamientos'>
                                <a className='nav-link'>Equipamientos</a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/contacto'>
                                <a className='nav-link'>Contacto</a>
                            </Link>
                        </li>
                    </ul>
                    <form className='d-flex'>
                        <Link href='tel:+59899350967'>
                            ¿Tiene una consulta? Llámenos al: 099 350 967
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar