import { useState } from 'react'
import styles from '../styles/Video.module.css'

const Video = ({ videoUrl, videoTitle }) => {
    const [openModal, setOpenModal] = useState(false)
    const handleOpenClick = () => {
        setOpenModal(true)
        console.log('open!')
    }
    const handleCloseClick = () => {
        setOpenModal(false)
        console.log('close!')
    }

    return (
        <>
            <section className={styles.videoWrapper} onClick={handleOpenClick}>
                <article className='container'>
                    <div className='row'>
                        <div className='col-12 d-flex flex-row justify-content-center align-items-center gap-4'>
                            <div className={styles.iconWrapper}>
                                <div className={styles.iconFX}>
                                    <div className={styles.icon}>
                                        <i className="fa-solid fa-play"></i>
                                    </div>
                                </div>
                            </div>
                            <h5 className='mb-0'>{videoTitle}</h5>
                        </div>
                    </div>
                </article>
            </section>
            {openModal && (
                <div className={styles.videoModal} onClick={handleCloseClick}>
                    <div className={styles.closeIcon}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <iframe
                        src={videoUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            )}
        </>
    )
}

export default Video