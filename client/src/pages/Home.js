import React, { useState } from "react";
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Button } from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import { Logout } from "../store/UserSlice";
import { useNavigate } from "react-router-dom";
function Home() {
  const userStore = useSelector(state => state.userStore)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Button onClick={e => {
        dispatch(Logout())
        
      }}>Log Out</Button>
      <Button onClick={e => {
        navigate('/test')
      }}>Test</Button>
      <div>
        Current User :: {JSON.stringify(userStore)}
      </div>
    </>
  );
}
export default Home;
