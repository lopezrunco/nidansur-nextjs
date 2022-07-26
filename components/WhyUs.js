import { whyUsItems } from '../data'
import styles from '../styles/WhyUs.module.css'
import TitleDark from './TitleDark'

const WhyUs = () => {
    return (
        <div className={styles.whyUsWrapper}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <TitleDark titleLight='¿Por qué elegir' titleBold='Nidansur S.A.' />
                    </div>
                </div>
                <div className='row'>
                    {whyUsItems.map((el, idx) => {
                        return (
                            <div className='col-md-6 col-xl-3 mb-3' key={idx}>
                                <div className={styles.itemWrapper}>
                                    <div className={styles.contentWrapper}>
                                        <div className={styles.visibleContent}>
                                            <i className={el.icon}></i>
                                            <h4><b>{el.title}</b></h4>
                                        </div>
                                        <div className={styles.hiddenContent}>
                                            <h5><b>{el.title}</b></h5>
                                            <p>{el.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default WhyUs