import { contactInfo } from "../data"
import styles from '../styles/ContactInfo.module.css'
import ArticleTitle from "./ArticleTitle"

const ContactInfo = () => {
    return (
        <div className={styles.contactInfo}>
            <ArticleTitle title='Datos de contacto' />
            <p>Confíe en NIDANSUR para sus necesidades de Transporte de carga y servicios de retroexcavadora. </p>
            <p>Nos encontramos en Lavalleja y Aristegui - Sarandí Grande, departamento de Florida - Uruguay</p>
            <p>Nuestro horario de atención es de 8:00 hs. a 20:00 hs. </p>
            <p>Ante cualquier duda o consulta, por favor comuníquese con nosotros a través de los datos de contacto o rellene el formulario. </p>
            <p>Será contactado tan pronto como sea posible.</p>
            {contactInfo.map((el, idx) => {
                return (
                    <small key={idx}>
                        <i className={el.icon}></i>
                        <a href={el.link} target='_blank' rel='noreferrer'> {el.text}</a>
                    </small>
                )
            })}
        </div>
    )
}

export default ContactInfo