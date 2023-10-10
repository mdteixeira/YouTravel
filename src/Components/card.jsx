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

const cardInfo = [
    { image: paris, name: 'Paris' },
    { image: paraty, name: 'Paraty' },
    { image: riodejaneiro, name: 'Rio de Janeiro' },
    { image: londres, name: 'Londres' },
    { image: barcelona, name: 'Barcelona' },
    { image: lisboa, name: 'Lisboa' },
    { image: santiago, name: 'Santiago' },
    { image: buenosAires, name: 'Buenos Aires' },
    { image: seoul, name: 'Seoul' },
    { image: dubai, name: 'Dubai' },
    { image: taiwan, name: 'Taiwan' },
    { image: singapura, name: 'Singapura' },
];

const renderCard = (card, index) => {
    return (
        <div className="Card" key={index}>
            <img src={card.image} alt="Paris" className="card-img" />
            <h2>{card.name}</h2>
            <a className='btn' href='/'>Conferir</a>
        </div> 
    );
};

const Card = () => {
    return <div className="cardContainer">{cardInfo.map(renderCard)}</div>;
};

export default Card;
