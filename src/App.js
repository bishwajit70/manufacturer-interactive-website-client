import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home'
import Purchase from './Pages/Purchase';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
      </Routes>
    </div>
  );
}

export default App;
