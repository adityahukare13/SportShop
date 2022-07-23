import './App.css';
import Nav from './Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CustLogin from './Custlogin';
import Register from './Register';
import { Logintest } from './validat/Logintest';
import ListPayment from './components/ListPayment';
import CreatePayment from './components/CreatePayment';
import ViewPayment from './components/ViewPayment';

function App() {
  return (
   <BrowserRouter>
   <Nav/>
   <Routes>
   <Route exact path='/' element={<Home/>} />
   <Route  path="/login" element={<CustLogin/>}/>
   <Route  path="/register" element={<Register/>}/>
   <Route  path="/logintest" element={<Logintest/>}/>
   <Route  path="/add-payment/_add" element={<CreatePayment/>}/> 
   <Route  path="/ListPayment" element={<ListPayment/>}/>
   <Route  path="/view/:paymentId" element={<ViewPayment/>}/>
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





