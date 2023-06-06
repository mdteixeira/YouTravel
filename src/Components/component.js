import imag1 from './../Assets/img1.jpg'

const PrimeiroComponente = () => {
    let img1 = <img src={imag1} alt="first" width="1000" />
    return (
        <div className='componente1'>
            <div className='text'>
                <h2>Meu primeiro componente</h2>
                <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam praesentium debitis suscipit eveniet quod atque aut sapiente obcaecati eaque consequatur molestiae, vero cum optio eius, maxime, modi dicta! Deserunt, reprehenderit fugiat! Nobis, ducimus eaque. Amet alias a quisquam esse commodi! Necessitatibus assumenda possimus iure, doloribus unde placeat doloremque quos tempora?</p>
            </div>
            {img1}
        </div>
    )
}

export default PrimeiroComponente;