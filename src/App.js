import Input from './Components/input';
import './App.css';
import PrimeiroComponente from './Components/component';
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
                </h2>
            </header>
            <main>
                <PrimeiroComponente />
            </main>
            <Input />
        </div>
    );
}

export default App;
