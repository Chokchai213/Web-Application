import React from "react";
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Button } from "@mui/material";
function Home() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Button>Log Out</Button>
      <div>
      </div>
    </>
  );
}
export default Home;
