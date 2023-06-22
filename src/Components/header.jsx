const Header = () => {
    return (
        <div className="header">
            <img
                width="48"
                height="48"
                src="https://img.icons8.com/color-glass/96/around-the-globe.png"
                alt="around-the-globe"
            />
            <h2 id="brand">YouTravel</h2>
            <nav>
                <ul className="nav">
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
            </nav>
        </div>
    );
};

export default Header;
