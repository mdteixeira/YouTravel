import './App.css';
import PrimeiroComponente from './Components/component';
import Componente2 from './Components/componente2';
let nome = 'Matheus';
let sobrenome = 'Teixeira';

function App() {
    return (
        <div className="App">
                <header className="App-header">
                    <h2 className="greeting">
                        Seja bem-vindo,{' '}
                        <span className="nome">
                            {nome} {sobrenome}
                        </span>
                        !
                    </h2>
                </header>
                <main>
            <PrimeiroComponente />
            <Componente2 />
                </main>
        </div>
    );
}

export default App;
