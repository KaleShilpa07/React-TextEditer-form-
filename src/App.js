
import './App.css';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link

} from "react-router-dom";
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import LeftNavigationDrawer from './Components/LeftNavigationDrawer';
import React,{useState} from 'react'
function App() {
  
  const [mode, setMode] = useState('light');// dark mode enable or not
 
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
   setAlert({
   msg : message,
    type : type
   })
   setTimeout(() => {
    setAlert(null);
   }, 1000);
  }
  
  const removeBodyfunccls=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-dark');
  }
   const toggleMode = (cls)=>{
    console.log(cls)
    removeBodyfunccls();
    // change pallete colors
    document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
     // showAlert("Dark mode has been enabled", "Success");

      //  change favicon name dynamically .. and repeated execute again and again ..
      //document.title='Dark mode Enabled'
      setInterval(() => {
       // document.title='Dark mode Enabled'
      }, 1000);
      setInterval(() => {
      //  document.title='Dark mode finally on'
      }, 1000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
     // showAlert("Light mode has been enabled", "Success");
      //document.title='Light mode Enabled'
    }
   }

   
  
  return (
    <Router>
   
  <Navbar title="Application"  mode={mode} toggleMode={toggleMode} />
<Alert alert = {alert}/>
  <div className="container my-3" style={{alignContent:'center'}}>
    {/* <h2>First Application</h2> */}
 {/* <TextForm showAlert={showAlert}></TextForm>
<About></About>  */}

 
 <Routes>
           <Route path="/LeftNavigationDrawer" element={ <LeftNavigationDrawer/>}>
           {/* <LeftNavigationDrawer/> */}
          </Route>
          <Route path="/About" element={<About mode={mode}/>}>
            
          </Route>
          <Route path="/TextForm" element={ <TextForm showAlert={showAlert}/>}>
           {/* <LeftNavigationDrawer/> */}
          </Route>
         
        </Routes>
  </div>
  <Footer></Footer> 
 
   </Router>
   
  );
}

export default App;
