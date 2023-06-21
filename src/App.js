import './App.css';
import Hero from './Components/hero';
import Header from './Components/header';

function App() {
    return (
        <div className="App">
            <header>
                <Header />
            </header>
            <main>
                <Hero />
            </main>
        </div>
    );
}

export default App;
