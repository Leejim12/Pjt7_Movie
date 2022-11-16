import Boxoffice from './boxoffice/Boxoffice';
import './App.css';
import BoxMv from './boxoffice/BoxMv';
import {Routes,Route} from 'react-router-dom';
import './boxoffice/Mv.css';
import './boxoffice/MCSS.css';

function App() {
  return (
    <div className='world'>
 <Routes>
    <Route path='/' element={<Boxoffice />} />
    <Route path='/mv' element={<BoxMv />} />
    {/* <Route path='/hh' element={<MvList />}/> */}
 </Routes>
 </div>

  );
}

export default App;