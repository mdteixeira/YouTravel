const Footer = () => {
    return (
        <>
            <div className="Footer">
                <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color-glass/96/around-the-globe.png"
                    alt="around-the-globe"
                />
                <h2 id="brand">YouTravel</h2>

                <div className="flex-column mapa">
                    <h3>Mapa do Site</h3>
                    <a href="./#">Saiba mais</a>
                    <a href="./#">Nossos pacotes</a>
                    <a href="./#">Destinos</a>
                </div>
                <ul className="flex">
                    <li>
                        <a href="">
                            <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color-glass/48/instagram-new.png"
                                alt="instagram-new"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color-glass/48/tiktok.png"
                                alt="tiktok"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color-glass/48/gmail.png"
                                alt="gmail"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color-glass/48/facebook.png"
                                alt="facebook"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color-glass/48/twitter.png"
                                alt="twitter"
                            />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="copy">
                <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/color-glass/96/info.png"
                    alt="info"
                />
                Este é um site fictício e não funcional - Feito por
                <a href="https://mdteixeira.github.io" target="_blank">
                    Matheus Teixeira
                </a>
            </div>
        </>
    );
};

export default Footer;
