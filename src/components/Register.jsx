import React, { useState } from "react";
import "firebaseui/dist/firebaseui.css";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../utils/firebase";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";

const Register = () => {
  const firebaseAuth = getAuth(app);
  const [{ user }, dispatch] = useStateValue();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginWithPassword = async () => {
    console.log(email, password);
    const {
      user: { refreshToken, providerData },
    } = await signInWithEmailAndPassword(firebaseAuth, email, password);
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0],
    });
    console.log(providerData);
    localStorage.setItem("user", JSON.stringify(providerData[0]));
  };

  const loginWithGoogle = async () => {
    const {
      user: { refreshToken, providerData },
    } = await signInWithPopup(firebaseAuth, new GoogleAuthProvider());
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0],
    });
    console.log(providerData);
    localStorage.setItem("user", JSON.stringify(providerData[0]));
  };

  const loginWithFacebook = async () => {
    const {
      user: { refreshToken, providerData },
    } = await signInWithPopup(firebaseAuth, new FacebookAuthProvider());
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0],
    });
    console.log(providerData);
    localStorage.setItem("user", JSON.stringify(providerData[0]));
  };

  return (
    <div className='relative flex min-h-screen flex-col justify-center overflow-hidden'>
      <div className='m-auto w-full rounded-md bg-white p-6 shadow-xl lg:max-w-xl'>
        <h1 className='text-center text-3xl font-semibold uppercase text-purple-700'>
          Sign in
        </h1>
        <form className='mt-6'>
          <div className='mb-2'>
            <label
              htmlFor='email'
              className='block text-sm font-semibold text-gray-800'
            >
              Email
            </label>
            <input
              type='email'
              className='mt-2 block w-full rounded-md border bg-white px-4 py-2 text-purple-700 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-40'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label
              htmlFor='password'
              className='block text-sm font-semibold text-gray-800'
            >
              Password
            </label>
            <input
              type='password'
              className='mt-2 block w-full rounded-md border bg-white px-4 py-2 text-purple-700 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-40'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <a href='#' className='text-xs text-purple-600 hover:underline'>
            Forget Password?
          </a> */}
          <div className='mt-6'>
            <button
              className='w-full transform rounded-md bg-purple-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-purple-600 focus:bg-purple-600 focus:outline-none'
              onClick={loginWithPassword}
            >
              Login
            </button>
          </div>
        </form>
        <div className='relative mt-6 flex w-full items-center justify-center border border-t'>
          <div className='absolute bg-white px-5'>Or</div>
        </div>
        <div className='mt-4 flex gap-x-2'>
          <button
            type='button'
            className='flex h-10 w-full items-center justify-center rounded-md border border-gray-600 p-2 focus:ring-2 focus:ring-violet-600 focus:ring-offset-1'
            onClick={loginWithGoogle}
          >
            <FcGoogle className='h-5 w-5 fill-current' />
          </button>
        </div>

        <p className='mt-8 text-center text-xs font-light text-gray-700'>
          {" "}
          Don't have an account?{" "}
          <a href='#' className='font-medium text-purple-600 hover:underline'>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
