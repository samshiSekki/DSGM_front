import './App.css';
import Header from './pages/Header';
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
      </BrowserRouter>
    </div>
  );
}

export default App;
