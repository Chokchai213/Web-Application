import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from './pages/Test';
import {useDispatch} from "react-redux";
import { Login } from './store/UserSlice';
function App() {
  const dispatch = useDispatch()
  const localUser = localStorage.getItem('userData')
  if(localUser){
    dispatch(Login(JSON.parse(localUser)))
  }
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
