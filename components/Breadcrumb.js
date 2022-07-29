import Link from 'next/link'
import styles from '../styles/Breadcrumb.module.css'

const Breadcrumb = ({ path }) => {
    let cleanedPath = path.replace('-', ' ').substring(1)

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className={styles.breadcrumb}>
                        <i className="fa-solid fa-location-dot"></i>
                        <Link href='/' ><p className={styles.indexPath}>Inicio</p></Link>
                        <i className="fa-solid fa-chevron-right"></i>
                        <p className={styles.cleanedPath}>{cleanedPath}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb