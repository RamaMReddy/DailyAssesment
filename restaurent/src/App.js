import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/homepage';
import Menulist from './components/menu';
import About from './components/about';
import Contact from './components/contact';
import Login from './components/logiin';
import Sign from './components/signup';


function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/menu' element={<Menulist/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Sign/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
