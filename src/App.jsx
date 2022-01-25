import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Header } from './components/partials/header/Header';
import { Main } from './components/partials/main/Main';
import { Footer } from './components/partials/footer/Footer';
import { Forside } from './components/pages/forside/Forside';
import { Produkter} from './components/pages/produkter/Produkter';
import { Kontakt } from './components/pages/kontakt/Kontakt';
import { Login } from './components/pages/login/Login'

function App() {
  return (
    <div className="pagewrapper">
        <Router>
          <Header />
          <Main>
            <Routes>
              <Route path='/' index element={<Forside />} />
              <Route path='/produkter' index element={<Produkter />} />
              <Route path='/kontakt' index element={<Kontakt />} />
              <Route path='/login' index element={<Login />} /> 
            </Routes>
          </Main>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
