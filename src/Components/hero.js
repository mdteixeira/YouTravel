import imag1 from './../Assets/img2.jpg'

const Hero = () => {
    let img1 = <img src={imag1} alt="first" width="1000" />
    return (
        <div className='hero'>
            <div className='aside'>
                <div className='texto'>
                    <h2>Nome do Produto</h2>
                    <p>Conheça o mundo conosco!</p>
                </div>
            </div>
                <div className="btn-flex">
                    <button className='btn'>Conheça nossos destinos</button>
                    <button className='btn-outline'>Saiba mais</button>
                </div>
            {img1}
        </div>
    )
}

export default Hero;