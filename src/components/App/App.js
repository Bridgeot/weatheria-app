import { Routes, Route } from 'react-router-dom';

import About from '../../pages/About/About';
import Geolocation from '../../pages/Geolocation/Geolocation';
import Search from '../../pages/Search/Search';
import ViewHistory from '../../pages/ViewHistory/ViewHistory';

import Header from '../Header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='container'>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/geolocation' element={<Geolocation />} />
          <Route path='/search' element={<Search />} />
          <Route path='/viewhistory' element={<ViewHistory />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;