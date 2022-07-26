import Equipment from "../components/Equipment"
import Video from "../components/Video"

const equipamiento = () => {
    return (
        <>
            <section className='container my-5'>
                <Equipment />
            </section>
            <Video videoUrl='https://www.youtube.com/embed/XPIXr7np8QA' videoTitle='Nuestros equipos trabajando' />
        </>
    )
}

export default equipamiento