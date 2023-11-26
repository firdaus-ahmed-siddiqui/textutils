import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [mode,setMode] = useState('light');
  const [appColor,setAppColor] = useState();
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      setAppColor('dark')
      document.title ='TextUtils - Dark Mode'
      document.body.style.backgroundColor='#273143';
      document.body.style.color='#ffffff';
      showAlert("Dark mode has been activated", "success");
    }else{
      setMode('light');
      setAppColor('light');
      document.title ='TextUtils - Light Mode'
      document.body.style.backgroundColor='white';
      document.body.style.color='#000000';
      showAlert("Light mode has been activated", "success");
    }
  }

  const toggleGreen = () =>{
    document.body.style.backgroundColor='#034c2b';
    document.body.style.color='#ffffff';
    setAppColor('success');
    showAlert("Green theme activated", "success");
    //setMode('success');
  }

  const toggleBlue = () =>{
    document.body.style.backgroundColor='#1499b4';
    document.body.style.color='#ffffff';
    setAppColor('info');
    showAlert("Blue theme activated", "success");
    //setMode('info');
  }

  const toggleYellow = () =>{
    document.body.style.backgroundColor='#b89b46';
    document.body.style.color='#ffffff';
    setAppColor('warning');
    showAlert("Yellow theme activated", "success");
    //setMode('warning');
  }

  return (
    <>
      <Router basename="/textutils">
        <Navbar title='TextUtils' aboutText='About Us' appColor={appColor} mode={mode} toggleYellow={toggleYellow} toggleBlue={toggleBlue}  toggleGreen={toggleGreen}  toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className='container'>
          <Switch>
            <Route exact path="/">
              <TextForm showAlert={showAlert} mode={mode} heading="Please tell us about yourself"/> 
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
          </Switch>
        </div>
        <Footer mode={mode} appColor={appColor}/>
      </Router>
    </>
  );
}

export default App;
