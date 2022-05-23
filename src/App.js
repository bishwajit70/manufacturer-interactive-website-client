import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddAReview from './Pages/Dashboard/AddAReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import MyPortfolio from './Pages/MyPortfolio';
import NotFoundPage from './Pages/NotFoundPage';
import Purchase from './Pages/Purchase';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}>
        </Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard>
            </Dashboard>
          </RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorder' element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<AddAReview></AddAReview>}></Route>
        </Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>

    </div>
  );
}

export default App;
