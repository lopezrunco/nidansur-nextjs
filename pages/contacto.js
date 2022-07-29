import { useRouter } from 'next/router'
import TitleLight from "../components/TitleLight"
import ContactInfo from "../components/ContactInfo"
import ContactForm from "../components/ContactForm"
import ScrollToTop from '../components/ScrollToTop'

const contacto = () => {
    const router = useRouter()

    return (
        <>
            <section className='container mt-5'>
                <article className='row'>
                    <div className='col-12'>
                        <TitleLight titleLight='Donde' titleBold='estamos' />
                    </div>
                </article>
                <article className='row'>
                    <div className='col-12'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.2265290916876!2d-56.33794368505428!3d-33.72895798069508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a12d549910ef3d%3A0x4b5db1b578689a47!2sNIDANSUR%20SA!5e0!3m2!1ses-419!2sin!4v1658841356304!5m2!1ses-419!2sin"
                            width="100%"
                            height="450"
                            allowFullScreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </article>
            </section>
            <section className='container'>
                <article className='row'>
                    <div className='col-xl-5'>
                        <div className='border p-4 mb-4'>
                            <ContactInfo />
                        </div>
                    </div>
                    <div className='col-xl-7'>
                        <div className='border p-4'>
                            <ContactForm />
                        </div>
                    </div>
                </article>
            </section>
            <ScrollToTop scrollTo={router.pathname} />
        </>
    )
}

export default contacto