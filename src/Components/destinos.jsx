import Card from './card';

const Destinos = () => {
    return (
        <div className="Destinos">
            <div className="destinos-header">
                <h2>Para onde você quer ir?</h2>
                <div className="badge-containers">
                    <div className="badge b-praia">
                        <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/color-glass/48/beach.png"
                            alt="beach"
                        />
                        Praia
                        <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/color-glass/48/cancel--v1.png"
                            alt="cancel--v1"
                        />
                    </div>
                    <div className="badge b-paisagens">
                        <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/color-glass/48/summer-landscape.png"
                            alt="summer-landscape"
                        />
                        Paisagens
                        <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/color-glass/48/cancel--v1.png"
                            alt="cancel--v1"
                        />
                    </div>
                </div>
            </div>
            <div className="destinos-grid">
                <div className="tipos">
                    <ul>
                        <a href="./#">
                            <li className="filter selected">
                                <img
                                    width="48"
                                    height="48"
                                    src="https://img.icons8.com/color-glass/48/beach.png"
                                    alt="beach"
                                />
                                Praia
                            </li>
                        </a>
                        <a href="./#">
                            <li className="filter">
                                <img
                                    width="48"
                                    height="48"
                                    src="https://img.icons8.com/color-glass/48/camping-tent.png"
                                    alt="camping-tent"
                                />
                                Acampar
                            </li>
                        </a>
                        <a href="./#">
                            <li className="filter">
                                <img
                                    width="48"
                                    height="48"
                                    src="https://img.icons8.com/color-glass/48/winter-landscape.png"
                                    alt="winter-landscape"
                                />
                                Inverno
                            </li>
                        </a>
                        <a href="./#">
                            <li className="filter selected">
                                <img
                                    width="48"
                                    height="48"
                                    src="https://img.icons8.com/color-glass/48/summer-landscape.png"
                                    alt="summer-landscape"
                                />
                                Paisagens
                            </li>
                        </a>
                        <a href="./#">
                            <li className="filter">
                                <img
                                    width="48"
                                    height="48"
                                    src="https://img.icons8.com/color-glass/48/eiffel-tower.png"
                                    alt="eiffel-tower"
                                />
                                Monumentos
                            </li>
                        </a>
                        <a href="./#">
                            <li className="mais">
                                <img
                                    width="48"
                                    height="48"
                                    src="https://img.icons8.com/color-glass/48/plus--v1.png"
                                    alt="plus--v1"
                                />
                                Ver mais
                            </li>
                        </a>
                    </ul>
                </div>
                <Card />
            </div>
        </div>
    );
};

export default Destinos;
