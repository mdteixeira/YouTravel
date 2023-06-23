import paris from './../Assets/cards/paris.png';
import paraty from './../Assets/cards/paraty.png';
import riodejaneiro from './../Assets/cards/riodejaneiro.png';
import londres from './../Assets/cards/londres.png';
import barcelona from './../Assets/cards/barcelona.png';
import lisboa from './../Assets/cards/lisboa.png';
import santiago from './../Assets/cards/santiago.png';
import buenosAires from './../Assets/cards/buenos aires.png';
import dubai from './../Assets/cards/dubai.png';
import seoul from './../Assets/cards/seoul.png';
import taiwan from './../Assets/cards/taiwan.png';
import singapura from './../Assets/cards/singapura.png';

let listaImagens = [
    paris,
    paraty,
    riodejaneiro,
    londres,
    barcelona,
    lisboa,
    santiago,
    buenosAires,
    dubai,
    seoul,
    taiwan,
    singapura,
];


const Hero = () => {
    let i = 0
    const imagem = <img src={listaImagens[i]} alt="first" className='img-principal' />;
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
            {imagem}
        </div>
    );
};

export default Hero;
