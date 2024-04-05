import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Alert from './components/Alert';
import NewsComponent from './components/NewsComponent';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

function App() {
  // switching modes from App
  // hook useState
  // var, set method, default
  const [mode,setMode] = useState('light');
  const [togglebtn,settogglebtn] = useState('Enable Dark Mode');
  // alert object
  const [alert,setAlert] = useState(null);
  
  // toggle function
  const toggleMode = ()=>{
    console.log('toggle clicked')
    if(mode==='light'){
      setMode('dark');
      settogglebtn('Enable Light Mode');
      document.body.style.backgroundColor='#212529';
      document.body.style.Color='White';
      showAlert('Dark Mode Enabled','success');
    }
    else{
      setMode('light');
      settogglebtn('Enable Dark Mode');
      document.body.style.backgroundColor='#F8F9FA';
      document.body.style.Color='Black';
      showAlert('Light Mode Enabled','success');
    }
  }

  // alert function
  // 2 props of alert object
  const showAlert = (message,type)=>{
    console.log('alert');
    setAlert({
      msg:message,
      type:type
    })
    // remove alert automatically
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const [progress,setProgress] = useState(0);
  
  return (
    // passing props to components is important step
    <Router>
      <div className={`bg-${mode} text-${mode==='dark'?'light':'dark'}`}>
        <NavBar title="News App" aboutText="about" mode={mode} togglebtn={togglebtn} toggleMode={toggleMode} showAlert={showAlert}></NavBar>
        <LoadingBar
          height={3}
          color='#98231A'
          progress={progress}
        />  
        <Alert alert={alert} showAlert={showAlert} mode={mode}/>
        <Routes>
          <Route path='/' element={<NewsComponent key="general" mode={mode} pageSize={6} country='in' category='general'setProgress = {setProgress}/>} />
          <Route path='/general' element={<NewsComponent key="general" mode={mode} pageSize={6} country='in' category='general'setProgress = {setProgress}/>} />
          <Route path='/business' element={<NewsComponent key='business' mode={mode} pageSize={6} country='in' category='business'setProgress = {setProgress}/>} />
          <Route path='/entertainment' element={<NewsComponent key='entertainment' mode={mode} pageSize={6} country='in' category='entertainment'setProgress = {setProgress}/>} />
          <Route path='/health' element={<NewsComponent key='health' mode={mode} pageSize={6} country='in' category='health'setProgress = {setProgress}/>} />
          <Route path='/science' element={<NewsComponent key='science' mode={mode} pageSize={6} country='in' category='science'setProgress = {setProgress}/>} />
          <Route path='/sports' element={<NewsComponent key='sports' mode={mode} pageSize={6} country='in' category='sports'setProgress = {setProgress}/>} />
          <Route path='/technology' element={<NewsComponent key='technology' mode={mode} pageSize={6} country='in' category='technology'setProgress = {setProgress}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
