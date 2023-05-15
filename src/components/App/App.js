import { Routes, Route } from 'react-router-dom';

import About from '../../pages/About/About';
import Geolocation from '../../pages/Geolocation/Geolocation';
import Search from '../../pages/Search/Search';
import ViewHistory from '../../pages/ViewHistory/ViewHistory';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/geolocation' element={<Geolocation />} />
        <Route path='/search' element={<Search />} />
        <Route path='/viewhistory' element={<ViewHistory />} />
      </Routes>
    </div>
  );
}

export default App;