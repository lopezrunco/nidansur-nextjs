import { useForm, ValidationError } from '@formspree/react'
import { EMAIL_CODE } from '../email-code'
import ArticleTitle from "./ArticleTitle"
import styles from '../styles/ContactForm.module.css'

const ContactForm = () => {
    const [state, handleSubmit] = useForm(EMAIL_CODE)
    if (state.succeeded) {
        return (
            <div className={styles.submitedMessage}>
                <i className="fa-solid fa-envelope-open-text"></i>
                <p>El mensaje fué enviado correctamente. <br />
                    Le responderemos en breve.</p>
            </div>
        )
    } else if (state.errors) {
        console.log('Error: ', state.errors)
    }

    return (
        <>
            <ArticleTitle title='Formulario de contacto' />
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <label htmlFor='nombre'>Nombre *
                    <div className={styles.inputWrapper}>
                        <input
                            id="nombre"
                            type="text"
                            name="nombre"
                            placeholder='Escriba su nombre aquí'
                            required
                        />
                        <div className={styles.labelIcon}>
                            <i className="fa-solid fa-user"></i>
                        </div>
                    </div>
                </label>
                <ValidationError
                    prefix="Nombre"
                    field="nombre"
                    errors={state.errors}
                />

                <label htmlFor='email'>Email *
                    <div className={styles.inputWrapper}>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder='Ej: nombre@mail.com'
                            required
                        />
                        <div className={styles.labelIcon}>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                    </div>
                </label>
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />

                <label htmlFor='asunto'>Asunto *
                    <div className={styles.inputWrapper}>

                        <input
                            id="asunto"
                            type="text"
                            name="asunto"
                            placeholder='Asunto del mensaje'
                            required
                        />
                        <div className={styles.labelIcon}>
                            <i className="fa-solid fa-tag"></i>
                        </div>
                    </div>
                </label>
                <ValidationError
                    prefix="Asunto"
                    field="asunto"
                    errors={state.errors}
                />

                <label htmlFor='mensaje'> Mensaje *
                    <div className={styles.inputWrapper}>

                        <textarea
                            id="mensaje"
                            name="mensaje"
                            placeholder='Escriba su mensaje aquí'
                            rows="4"
                            cols="50"
                            required
                        />
                        <div className={styles.labelIcon}>
                            <i className="fa-solid fa-comment"></i>
                        </div>
                    </div>
                </label>
                <ValidationError
                    prefix="Mensaje"
                    field="mensaje"
                    errors={state.errors}
                />

                <button type='submit' className='btn btn-primary' disabled={state.submitting}>
                    {state.submitting ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
        </>
    )
}

export default ContactForm