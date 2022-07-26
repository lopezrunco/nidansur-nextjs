import TitleLight from "../components/TitleLight"
import ServicesGrid from "../components/ServicesGrid"
import WhyUs from "../components/WhyUs"

const servicios = () => {
    return (
        <>
            <section className='container my-5'>
                <article className='row'>
                    <div className='col-12 text-center'>
                        <TitleLight titleLight='Maquinaria vial y' titleBold='transportes en general' />
                        <p>Una modera flota de camiones y maquinaria para todas las necesidades. <br /> Un equipo capacitado y responsable a su servicio.</p>
                    </div>
                </article>
                <article className='row mt-5'>
                    <ServicesGrid />
                </article>
            </section>
            <section className='pb-0'>
                <WhyUs />
            </section>
        </>
    )
}

export default servicios