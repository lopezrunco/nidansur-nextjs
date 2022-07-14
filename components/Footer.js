import styles from '../styles/Footer.module.css'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className={styles.footer}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <p>Copyright © {year} Todos los derechos reservados.</p>
                        <p>Desarrollado por <a
                            href='http://creativo.com.uy/'
                            target='_blank'
                            rel='noreferrer'>
                            Creativo Multimedia
                        </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer