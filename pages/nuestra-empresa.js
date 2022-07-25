import Image from 'next/image'
import { aboutUsImages } from '../data'
import TitleLight from "../components/TitleLight"

const nuestraEmpresa = () => {
    return (
        <>
            <section className='container my-5'>
                <article className='row'>
                    <div className='col-12'>
                        <TitleLight titleLight='Acerca de' titleBold='Nidansur S.A.' />
                    </div>
                </article>
                <article className='row'>
                    <div className='col-lg-5 mb-3'>
                        <Image
                            src='/assets/nidansur-nosotros.png'
                            alt='Acerca de Nidansur SA'
                            width='570px'
                            height='350px'
                        />
                    </div>
                    <div className='col-lg-7'>
                        <h4>Una empresa joven. Un equipo con experiencia.</h4>
                        <p>NIDANSUR S.A. inició sus actividades en 2005, continuando con una vieja tradición en el rubro transporte que heredáramos de Don Walter Carrión, quien ha sido pilar fundamental.</p>
                        <p>Esos comienzos fueron con un camión VW 0 Km., con trabajos zafrales en el litoral, especialmente graneleros. Con el tiempo se agregaron dos camiones Mercedes Benz, usados para satisfacer la demanda creciente de fletes. Luego tuvimos la posibilidad de concretar un viejo anhelo que fué la compra de una retroexcavadora para complacer las necesidades e inquietudes de productores en la zona. Hoy, nos enorgullece contar con clientes permanentes y satisfechos con nuestro trabajo y desempeño. Por eso, en 2010 incorporamos una segunda máquina retroexcavadora. Contamos con profesionales capacitados para su trabajo y que mantienen los equipos óptimos en su funcionamiento. Así, NIDANSUR continúa creciendo, sustentados en el compromiso con nuestro trabajo y nuestros clientes.</p>
                    </div>
                </article>
            </section>
            <section className='container my-5'>
                <article className='row'>
                    {aboutUsImages.map((el, idx) => {
                        return (
                            <div className='col-md-4' key={idx}>
                                <Image
                                    src={`/assets/${el}`}
                                    alt='Acerca de Nidansur SA'
                                    width='500px'
                                    height='286px'
                                />
                            </div>
                        )
                    })}
                </article>
            </section>
        </>
    )
}

export default nuestraEmpresa