import Image from 'next/image'
import { headerServices } from '../data'
import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-3'>
                        <Image
                            src='/assets/nidansur-sa-maquinaria-vial-y-transporte-logo.png'
                            width='157px'
                            height='70px'
                            alt='nidansur-sa-maquinaria-vial-y-transporte-logo' />
                    </div>
                    {headerServices.map((el, idx) => (
                        <div className='col-md-3 d-none d-lg-block' key={idx}>
                            <div className={styles.item}>
                                <i className="fa-solid fa-chevron-right"></i>
                                <div>
                                    <h6 className='mb-0'>{el.title}</h6>
                                    <p>{el.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header