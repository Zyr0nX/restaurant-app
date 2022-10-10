import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const login = async () => {
    const response = await signInWithPopup(firebaseAuth, provider);
    console.log(response);
  };

  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      <div className="flex h-full w-full justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-xl font-bold text-neutral-800">City</p>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="cursor-pointer text-base transition-all duration-100 ease-in-out hover:text-neutral-800">
              Home
            </li>
            <li className="cursor-pointer text-base transition-all duration-100 ease-in-out hover:text-neutral-800">
              Menu
            </li>
            <li className="cursor-pointer text-base transition-all duration-100 ease-in-out hover:text-neutral-800">
              About us
            </li>
            <li className="cursor-pointer text-base transition-all duration-100 ease-in-out hover:text-neutral-800">
              Service
            </li>
          </ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="cursor-pointer text-2xl text-neutral-600" />
            <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 ">
              <p className="text-xs font-semibold text-white">2</p>
            </div>
          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Avatar}
              className="h-10 w-10 cursor-pointer drop-shadow-xl"
              alt="userprofile"
              onClick={login}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
