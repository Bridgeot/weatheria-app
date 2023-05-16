import './App.css';

import { Routes, Route } from 'react-router-dom';

import About from '../../pages/About/About';
import Geolocation from '../../pages/Geolocation/Geolocation';
import Search from '../../pages/Search/Search';
import ViewHistory from '../../pages/ViewHistory/ViewHistory';

import Header from '../Header/Header';

function App() {
  return (
    <div className='App'>
      <div className='alignment'>
        <Header />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/geolocation' element={<Geolocation />} />
          <Route path='/search' element={<Search />} />
          <Route path='/viewhistory' element={<ViewHistory />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;