import Header from './components/Header';
import Footer from 'components/Footer';
import Default from './pages/Default';
import Billnut from './pages/Billnut';
import Recommend from './pages/Recommend';
import Grade from './pages/Grade';
import Others from 'pages/Others';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import GraduateSchool from 'pages/Others/GraduateSchool';
import Attendance1 from 'pages/Others/Attendance1';
import Attendance2 from 'pages/Others/Attendance2';
import Question from 'pages/Others/Question';

ReactGA.event({
  category: 'User',
  action: 'Created an Account'
});
ReactGA.exception({
  description: 'An error ocurred',
  fatal: true
});

function App() {
  const location = useLocation();
  
  useEffect(()=>{
    ReactGA.initialize("user id");
  },[]);

  
  useEffect(() => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/billnut" element={<Billnut />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/grade" element={<Grade />} />
        <Route path="/graduateschool" element={<GraduateSchool />} />
        <Route path="/attendanceschool" element={<Attendance1 />} />
        <Route path="/attendancepersonal" element={<Attendance2 />} />
        <Route path="/questions" element={<Question />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
