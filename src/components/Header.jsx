import React, { useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogin, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    }
    else{
      setIsMenu(!isMenu);
    }
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
              src={user ? user.photoURL : Avatar}
              className="h-10 w-10 cursor-pointer rounded-full drop-shadow-xl"
              alt="userprofile"
              onClick={login}
            />
            {isMenu && (
              <motion.div initial={{opacity : 0, scale: 0.6}} animate={{opacity : 1, scale: 1}} exit={{opacity : 0, scale: 0.6}} className="absolute top-12 right-0 flex w-40 flex-col rounded-lg bg-neutral-50">
                {user && user.email === "duydh2000@gmail.com" && (
                  <Link to="/createItem">
                    <p className="flex cursor-pointer items-center gap-3 px-4 py-2 text-neutral-800 transition-all duration-100 ease-in-out hover:bg-neutral-300">
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}

                <p className="flex cursor-pointer items-center gap-3 px-4 py-2 text-neutral-800 transition-all duration-100 ease-in-out hover:bg-neutral-300">
                  Log out <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
