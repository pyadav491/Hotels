
import './styles/main.scss';
import Header from './components/base/Header';
import HotelPage from './components/HotelPage';

function App() {
  return (
    <div className="c-app"> 
      <div className='c-main'>
        <div className='o-container'>
            <Header />
            <div className='c-page'>
                <HotelPage />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
