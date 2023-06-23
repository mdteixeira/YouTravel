const Promo = () => {
    return (
        <div className="Promo bp">
            <div className="flex aic">
                <img
                    width="200"
                    height="200"
                    src="https://img.icons8.com/color-glass/256/novel--v1.png"
                    alt="novel--v1"
                />
                <div className="flex-column flex">
                    <h3>Promoção de Dia dos Namorados</h3>
                    <p>
                        Compre uma passagem e ganhe <span>15% de desconto</span>{' '}
                        na segunda!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Promo;
