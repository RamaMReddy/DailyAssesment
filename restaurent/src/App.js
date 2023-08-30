import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/homepage';
import Hotel from './components/hotels';
import About from './components/about';
import Contact from './components/contact';
import Login from './components/logiin';
import Sign from './components/signup';
import Pagenotfound from './components/pnf';
import Menu from './components/menu';
// import Addhotel from './components/addhotel';
import Admin from './components/admin';
import Logout from './components/logout';
import Cart from './components/cart';
// import AdminPage from './components/adminpage';


function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/restaurents' element={<Hotel/>}></Route>
        <Route path='/menu/:Restaurant_name/:option' element={<Menu/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='/signup' element={<Sign/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path='/admin' element={<Admin/>}></Route>
        {/* <Route path='/adminPage' element={<AdminPage/>}></Route> */}
        <Route path='/*' element={<Pagenotfound/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
