import Image from "next/image"

const HomeSlider = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide d-none d-md-block" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Image height='500px' width='1920px' src="/assets/nidansur-sa-maquinaria-vial-transporte-florida-sarandi-grande-durazno-uruguay-1.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-xl-block">
                        <h5>Nidansur S.A. Maquinaria Vial y Transportes</h5>
                        <p>Somos una empresa profesional de cargas y contamos con un reconocido servicio de retroexcavadoras.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <Image height='500px' width='1920px' src="/assets/nidansur-sa-maquinaria-vial-transporte-florida-sarandi-grande-durazno-uruguay-2.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-xl-block">
                        <h5>Al servicio de todo el Uruguay</h5>
                        <p>Desde la ciudad de Sarandí Grande - Florida - y para todo el Uruguay</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <Image height='500px' width='1920px' src="/assets/nidansur-sa-maquinaria-vial-transporte-florida-sarandi-grande-durazno-uruguay-3.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-xl-block">
                        <h5>Le ofrecemos lo que Usted necesita</h5>
                        <p>Responsabilidad, confianza, experiencia y precios competitivos.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default HomeSlider