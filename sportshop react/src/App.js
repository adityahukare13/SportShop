import './App.css';
import Nav from './Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CustLogin from './Custlogin';
import Register from './Register';

function App() {
  return (
   <BrowserRouter>
   <Nav/>
   <Routes>
   <Route exact path='/' element={<Home/>} />
   <Route  path="/login" element={<CustLogin/>}/>
   <Route  path="/register" element={<Register/>}/>
   </Routes>
   {/* <Routes>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/addProduct" element={<AddProduct/>}/>
    <Route path="/login" element={<Login/>}/>
   </Routes> */}


   </BrowserRouter>
  );
}

export default App;
