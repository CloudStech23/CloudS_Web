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
import ScrollToTop from './Components/ScrootoTop';
import MachineLearning from './Components/Services/Software-Services/MachineLearning';
import CloudServices from './Components/Services/Software-Services/CloudServices';
import DevOps from './Components/Services/Software-Services/DevOps';
import CareerDetails from './Components/Career/CareerDetails';
import Dashboard from './Components/Admin/Dashboard';
// import Signin from './Components/Admin/Signin';
// import SignUp from './Components/Admin/Singup';
// import PrivateRoute from './Components/Admin/Protectroute'; 
import SignIn from './Components/Admin/Signin';
import Demo from './Components/Career/Demo';
import { AuthProvider } from './Components/Admin/Authcontext';
import PrivateRoute from './Components/Admin/Protectroute';
 
function App() {
  const token = localStorage.getItem('token');
  const isAuthenticated = token !== null; // Check if token exists
  return (
    <AuthProvider>

    <BrowserRouter>
      <div className="App">
        <div className='component-navbar'>
          <ScrollToTop/>
          <Navbar/>
        </div>

        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/About-Us' element={<About/>} />
          <Route exact path='/It-Strategy-Consultancy' element={<ITStrategyConsultancy/>} />
          <Route exact path='/Software-Service' element={<SoftwareService/>} />
          <Route exact path='/ProductManagement-QA' element={<ProductManagementQA/>} />
          <Route exact path='/Support' element={<Contact/>} />
          <Route exact path='/Career' element={<Career/>} />
          <Route exact path='/Machine-Learning' element={<MachineLearning/>} />
          <Route exact path='/Cloud-Services' element={<CloudServices/>} />
          <Route exact path='/DevOps' element={<DevOps/>} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} isAuthenticated={isAuthenticated} />
          </Route>
          {/* <Route exact path='/Singup' element={<SignUp/>} /> */}
          <Route exact path='/Signin' element={<SignIn/>} />
          <Route exact path='/Career/:id' element={<CareerDetails/>} />
          <Route exact path='/demo' element={<Demo/>} />
        </Routes>
          
        <Footer/>
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
