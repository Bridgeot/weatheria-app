import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';

import Home from '../../pages/Home/Home';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Report from '../../pages/Report/Report';
import Checklist from '../../pages/Checklist/Checklist';

import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='App-alignment'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/report' element={<Report />} />
          <Route path='/checklist' element={<Checklist />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;