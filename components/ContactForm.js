import { useForm, ValidationError } from '@formspree/react'
import { EMAIL_CODE } from '../email-code'
import ArticleTitle from "./ArticleTitle"
import styles from '../styles/ContactForm.module.css'

const ContactForm = () => {
    const [state, handleSubmit] = useForm(EMAIL_CODE)
    if (state.succeeded) {
        return (
            <div>
                <p>El mensaje fué enviado correctamente</p>
                <p>Le responderemos en breve.</p>
            </div>
        )
    }

    return (
        <div className={styles.contactForm}>
            <ArticleTitle title='Formulario de contacto' />
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <label htmlFor='name'>Nombre *
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder='Escriba su nombre aquí'
                        required
                    />
                </label>
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />

                <label htmlFor='email'>Email *
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder='Ej: nombre@mail.com'
                        required
                    />
                </label>
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />

                <label htmlFor='subject'>Asunto *
                    <input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder='Asunto del mensaje'
                        required
                    />
                </label>
                <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                />

                <label htmlFor='message'> Mensaje *
                    <textarea
                        id="message"
                        name="message"
                        placeholder='Escriba su mensaje aquí'
                        required
                    />
                </label>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />

                <button type="submit" disabled={state.submitting}>
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default ContactForm