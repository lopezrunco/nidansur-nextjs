import Image from 'next/image'
import { useState } from 'react'
import { equipment } from '../data'
import TitleLight from './TitleLight'
import styles from '../styles/Equipment.module.css'

const Equipment = () => {
    const [openModal, setOpenModal] = useState(false)
    const [itemInModal, setItemInModal] = useState(null)

    const handleClick = event => {
        equipment.forEach(element => {
            if (element.title === event.target.innerHTML) {
                setOpenModal(true)
                setItemInModal({ id: element.id, altText: element.title })
            }
        })
    }
    const handleCloseModal = () => {
        setOpenModal(false)
        setItemInModal(null)
    }

    return (
        <>
            <TitleLight titleLight='Nuestros' titleBold='Equipos' />
            <div className={styles.equipmentGrid}>
                {equipment.map((el, idx) => (
                    <div key={idx} className={styles.item}>
                        <div className={styles.image}></div>
                        <div className={styles.title}>
                            <p onClick={handleClick}>{el.title}</p>
                        </div>
                    </div>
                ))}
                {openModal && (
                    <div className={styles.imgModal} onClick={handleCloseModal}>
                        <div className={styles.closeIcon}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <Image
                            src={`/assets/nidansur-sa-nuestros-equipos-maquinaria-vial-transporte-florida-durazno-uruguay-${itemInModal.id}.jpg`}
                            alt={itemInModal.altText}
                            width='480px'
                            height='300px'
                        />
                        <h5>{itemInModal.altText}</h5>
                    </div>
                )}
            </div>
        </>
    )
}

export default Equipment