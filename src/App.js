import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import ITStrategyConsultancy from './Components/Services/ITStrategyConsultancy';
import ProductManagementQA from './Components/Services/ProductManagementQA';
import SoftwareService from './Components/Services/SoftwareService'
import Contact from './Components/Contact/Contact';
import Career from './Components/Career/Career';
 
 
 


function App() {
  return (
    <BrowserRouter basename='/C_S_R'>

    <div className="App">
      <div className='component-navbar' >
      <Navbar/>
      </div>

      <Routes>
        <Route  exact index path='/' element={<Home/>}   />
        <Route exact path='/About-Us'  element={<About/>}/>
        <Route exact path='/It-Strategy-Consultancy'  element={<ITStrategyConsultancy/>}/>
        <Route exact path='/Software-Service'  element={<SoftwareService/>}/>
        <Route exact path='/ProductManagement-QA'  element={<ProductManagementQA/>}/>
        <Route exact path='/Support'  element={<Contact/>}/>
        <Route exact path='/Career'  element={<Career/>}/>
  
      </Routes>
       
      <Footer/>
     </div>
    </BrowserRouter>
    
       
  );
}

export default App;
