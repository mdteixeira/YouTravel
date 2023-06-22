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
                <ul className="footer">
                    <h3>Mapa do Site</h3>
                    <li>
                        <a href="./#">Saiba mais</a>
                    </li>
                    <li>
                        <a href="./#">Nossos pacotes</a>
                    </li>
                    <li>
                        <a href="./#">Destinos</a>
                    </li>
                </ul>
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
                Este é um site fictício - Feito por
                <a href="https://mdteixeira.github.io" target="_blank">
                    Matheus Teixeira
                </a>
            </div>
        </>
    );
};

export default Footer;
