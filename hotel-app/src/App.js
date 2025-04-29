
import './styles/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/base/Header';
import HotelPage from './components/HotelPage';
import HotelDetail from './components/HotelDetail';

function App() {
  return (
    <Router>
    <div className="c-app"> 
      <div className='c-main'>
        <div className='o-container'>
            <Header />
            <div className='c-page'>
              <Routes>
                <Route path="/" element={<HotelPage />} />
                <Route path="/hotel/:id" element={<HotelDetail />} />
              </Routes>
            </div>
        </div>
      </div>
    </div>
    </Router> 
  );
}

export default App;
