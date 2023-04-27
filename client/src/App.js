
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import Service from './Routes/Service';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import {userCurrent,logout} from "./JS/userSlice/userSlice"
import Login from "./Components/Login"
import Register from "./Components/Register"

function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
  }, []);
 
  return (
    <div className="App">
      {isAuth ? (
    <button
      onClick={() => {
        dispatch(logout());
        navigate("/");
      }}
    >
      Logout
    </button>
  ) : null}
     <Routes>
     <Route exact path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/' element={ <Home/>}></Route>
        <Route path='/about' element={ <About/>}></Route>
        <Route path='/service' element={ <Service/>}></Route>
        <Route path='/contact' element={ <Contact/>}></Route>
      </Routes>
      


        
       

      
    </div>
  );
}

export default App;
