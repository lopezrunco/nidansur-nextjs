import { useRouter } from 'next/router'
import Equipment from "../components/Equipment"
import Video from "../components/Video"
import ScrollToTop from '../components/ScrollToTop'
import Breadcrumb from '../components/Breadcrumb'

const equipamiento = () => {
    const router = useRouter()

    return (
        <>
            <Breadcrumb path={router.pathname} />
            <section className='container my-5'>
                <Equipment />
            </section>
            <Video videoUrl='https://www.youtube.com/embed/XPIXr7np8QA' videoTitle='Nuestros equipos trabajando' />
            <ScrollToTop scrollTo={router.pathname} />
        </>
    )
}

export default equipamiento