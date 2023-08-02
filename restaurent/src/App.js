import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/homepage';
import Menulist from './components/menu';
import About from './components/about';
import Contact from './components/contact';
import Authen from './components/login';



function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/menu' element={<Menulist/>}></Route>
        <Route path='/login' element={<Authen/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
