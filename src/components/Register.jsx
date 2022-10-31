import React from "react";
import i1 from "../img/i1.png";
import { Carousel } from "flowbite-react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth, firebaseUIConfig } from "../utils/firebase";

const Register = () => {
  return (
    <div className=' inline-grid h-screen w-screen grid-cols-2'>
      <div className='m-auto h-40 w-[40%]'>
        <Carousel>
          <img src={i1} alt='...' />
          <img src={i1} alt='...' />
          <img src={i1} alt='...' />
          <img src={i1} alt='...' />
          <img src={i1} alt='...' />
        </Carousel>
      </div>
      <div className='relative h-auto w-auto rounded-3xl bg-neutral-50'>
        <div className='absolute top-3 left-3'>
          <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
        </div>
      </div>
    </div>
  );
};

export default Register;
