import React from "react";
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import LoadingBackDrop from "../components/LoadingBackdrop";
import SignUpSignInModal from "../components/SignUpSignInModal";

function Home() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <LoadingBackDrop></LoadingBackDrop>
      <SignUpSignInModal></SignUpSignInModal>
    </>
  );
}

export default Home;
