import './App.css';
import Hero from './Components/hero';
import Header from './Components/header';
import Desc from './Components/desc';
import Destinos from './Components/destinos';
import Footer from './Components/footer';
import Promo from './Components/promo';

function App() {
    return (
        <div className="App">
            <header>
                <Header />
            </header>
            <main>
                <Hero />
                <Desc />
                <Promo />
                <Destinos />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
