import './App.css';
import PrimeiroComponente from './Components/PrimeiroComponente';

let nome = 'Matheus';
let sobrenome = 'Teixeira';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h2 className='greeting'>
                    Seja bem-vindo,{' '}
                    <span className="nome">
                        {nome} {sobrenome}
                    </span>
                    !
                </h2>
            </header>
            <PrimeiroComponente />
        </div>
    );
}

export default App;
