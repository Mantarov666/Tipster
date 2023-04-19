
import './App.css';

import { Routes, Route } from 'react-router-dom';

import { Header } from './components/header/Header';
import { HomePage } from './components/home/HomePage';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { About } from './components/about/About';
import { AuthContex } from './context/AuthContext';
import { useEffect, useState } from 'react';
import { Logout } from './components/logout/Logout';
import { useLocaleStorage } from './hooks/useLocale';
import { Prediction } from './components/prediction/Prediction';
import { getAll } from './service/matchService';
import { PredictionDetails } from './components/details/PredictionDetails';
import { EditPage } from './components/edit/EditPage';
import { Comments } from './components/coments/Comments';



function App() {

const [auth, setAuth] = useLocaleStorage('auth', {})
const [matches, setMatch] = useState({})

useEffect(()=>{
  getAll()
  .then(rezult=>{
    setMatch(rezult)
  })
}, [])



const userLogin = (authInfo) => { 
  setAuth(authInfo)
}

const userLogout = () => { 
  setAuth({})
}

  return (
<AuthContex.Provider value={{user:auth, userLogin, userLogout, matches}}>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/about' element={<About/>} />
        <Route path ='/logout' element= {<Logout/>} />
        <Route path ='/prediction' element= {<Prediction/>} />
        <Route path = '/prediction/:id/details' element={<PredictionDetails/>} /> 
        <Route path='/prediction/:id/comentary' element={<Comments/>} />
        <Route path='/edit/:id/:_id' element={<EditPage/>} />
      </Routes>
    </div>
</AuthContex.Provider>

  );
}

export default App;
