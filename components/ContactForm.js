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
                    <input
                        id="nombre"
                        type="text"
                        name="nombre"
                        placeholder='Escriba su nombre aquí'
                        required
                    />
                </label>
                <ValidationError
                    prefix="Nombre"
                    field="nombre"
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

                <label htmlFor='asunto'>Asunto *
                    <input
                        id="asunto"
                        type="text"
                        name="asunto"
                        placeholder='Asunto del mensaje'
                        required
                    />
                </label>
                <ValidationError
                    prefix="Asunto"
                    field="asunto"
                    errors={state.errors}
                />

                <label htmlFor='mensaje'> Mensaje *
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        placeholder='Escriba su mensaje aquí'
                        rows="4"
                        cols="50"
                        required
                    />
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