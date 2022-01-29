import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import Default from './pages/Default';
import Billnut from 'pages/Billnut';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/billnut" element={<Billnut />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
