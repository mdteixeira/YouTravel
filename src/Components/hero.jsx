import imag1 from './../Assets/cards/paris.png';

const Hero = () => {
    let img1 = <img src={imag1} alt="first" />;
    return (
        <div className="hero">
            <div className="aside">
                <div className="texto">
                    <h2>YouTravel</h2>
                    <p>Conheça o mundo conosco!</p>
                </div>
            </div>
            <div className="btn-flex">
                <button className="btn">Conheça nossos destinos</button>
                <button className="btn-outline">Saiba mais</button>
            </div>
            {img1}
        </div>
    );
};

export default Hero;
