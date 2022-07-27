import Link from 'next/link'
import Image from 'next/image'
import { contactInfo } from '../data'
import styles from '../styles/Bottom.module.css'

const Bottom = () => {
    return (
        <section className={styles.bottom}>
            <div className='container'>
                <div className='row gy-3'>
                    <div className='col-md-5'>
                        <h6>Nuestra empresa</h6>
                        <p>Confíe en NIDANSUR para sus necesidades de Transporte de carga y servicios de retroexcavadora.</p>
                        <div className={styles.contactInfo}>
                            {contactInfo.map((el, idx) => {
                                return (
                                    <p key={idx}>
                                        <i className={el.icon}></i>
                                        <a href={el.link} target='_blank' rel='noreferrer'> {el.text}</a>
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <h6>Navegación</h6>
                        <ul>
                            <li><Link href='/'>Inicio</Link></li>
                            <li><Link href='/nuestra-empresa'>Nuestra empresa</Link></li>
                            <li><Link href='/servicios'>Servicios</Link></li>
                            <li><Link href='/equipamiento'>Equipamiento</Link></li>
                            <li><Link href='/contacto'>Contacto</Link></li>
                        </ul>
                    </div>
                    <div className='col-md-4 d-none d-md-block'>
                        <Link href='/nuestra-empresa'>
                            <Image
                                src='/assets/nidansur-sa-maquinaria-vial-transporte-sarandi-grande-florida-durazno.jpg'
                                width='368px'
                                height='180px'
                                alt='nidansur-sa-maquinaria-vial-transporte-sarandi-grande-florida-durazno' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bottom