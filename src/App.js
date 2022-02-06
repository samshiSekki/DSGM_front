import Header from './components/Header';
import Footer from 'components/Footer';
import Default from './pages/Default';
import Billnut from './pages/Billnut';
import Recommend from './pages/Recommend';
import Grade from './pages/Grade';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/billnut" element={<Billnut />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/grade" element={<Grade />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
