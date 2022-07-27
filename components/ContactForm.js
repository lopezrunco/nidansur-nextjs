import ArticleTitle from "./ArticleTitle"
import styles from '../styles/ContactForm.module.css'

const ContactForm = () => {
    return (
        <div className={styles.contactForm}>
            <ArticleTitle title='Formulario de contacto' />
        </div>
    )
}

export default ContactForm