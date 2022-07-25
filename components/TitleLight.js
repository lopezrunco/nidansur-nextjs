import styles from '../styles/TitleLight.module.css'

const TitleLight = ({ titleLight, titleBold }) => {
    return (
        <div className={styles.title}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 d-flex flex-column justify-content-center align-items-center text-center'>
                        <h3>{titleLight} <b>{titleBold}</b></h3>
                        <div className={styles.separator}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleLight