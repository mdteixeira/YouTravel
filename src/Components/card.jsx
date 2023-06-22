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

const Card = () => {
    return (
        <div className="cardContainer">
            <div className="Card">
                <img src={paris} alt="Paris" className="card-img" />
                <h2>Paris</h2>
            </div>
            <div className="Card">
                <img src={paraty} alt="paraty" className="card-img" />
                <h2>Paraty</h2>
            </div>
            <div className="Card">
                <img
                    src={riodejaneiro}
                    alt="riodejaneiro"
                    className="card-img"
                />
                <h2>Rio de Janeiro</h2>
            </div>
            <div className="Card">
                <img src={londres} alt="londres" className="card-img" />
                <h2>Londres</h2>
            </div>
            <div className="Card">
                <img src={barcelona} alt="barcelona" className="card-img" />
                <h2>Barcelona</h2>
            </div>
            <div className="Card">
                <img src={lisboa} alt="lisboa" className="card-img" />
                <h2>Lisboa</h2>
            </div>
            <div className="Card">
                <img src={santiago} alt="santiago" className="card-img" />
                <h2>Santiago</h2>
            </div>
            <div className="Card">
                <img src={buenosAires} alt="buenosAires" className="card-img" />
                <h2>Buenos Aires</h2>
            </div>
            <div className="Card">
                <img src={dubai} alt="dubai" className="card-img" />
                <h2>Dubai</h2>
            </div>
            <div className="Card">
                <img src={seoul} alt="seoul" className="card-img" />
                <h2>Seoul</h2>
            </div>
            <div className="Card">
                <img src={taiwan} alt="taiwan" className="card-img" />
                <h2>Taiwan</h2>
            </div>
            <div className="Card">
                <img src={singapura} alt="singapura" className="card-img" />
                <h2>Singapura</h2>
            </div>
        </div>
    );
};

export default Card;
