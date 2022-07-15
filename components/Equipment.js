import { equipment } from '../data'
import TitleLight from './TitleLight'
import styles from '../styles/Equipment.module.css'

const Equipment = () => {
    return (
        <>
            <TitleLight titleLight='Nuestros' titleBold='Equipos' />
            <div className={styles.equipmentGrid}>
                {equipment.map((el, idx) => (
                    <div key={idx} className={styles.item}>
                        <div className={styles.image}></div>
                        <div className={styles.title}>
                            <p>{el.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Equipment