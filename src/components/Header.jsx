import React, { useState, useEffect } from "react";
import { MdShoppingBasket, MdAdd, MdLogout, MdLogin } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from "../utils/firebase";

import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import useWindowSize from "../utils/useWindowSize";
import { getCurrentUser } from "../utils/getCurrentUser";

const Header = () => {
  const firebaseAuth = getAuth(app);

  const [isMenu, setIsMenu] = useState(false);
  const [user, setUser] = useState(null);

  const navItems = ["Home", "Menu", "About us", "Service"];

  const width = useWindowSize().width;

  const logout = async () => {
    await signOut(firebaseAuth);
  };

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      }
      return null;
    });
  }, []);

  return (
    <header className="fixed z-50 w-screen bg-sky-500 p-3 px-4 drop-shadow-2xl md:p-2 md:px-16">
      <div className="flex h-full w-full items-center justify-between md:items-stretch">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-xl font-bold text-neutral-100">Restaurant</p>
        </Link>

        <div className="flex items-center gap-8 md:flex">
          {width > 640 && (
            <motion.ul
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              className="flex items-center gap-8"
            >
              {navItems.map((navItem, key) => {
                return (
                  <li
                    className="cursor-pointer text-base text-neutral-100 transition-all duration-100 ease-in-out"
                    key={key}
                  >
                    {navItem}
                  </li>
                );
              })}
            </motion.ul>
          )}

          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="cursor-pointer text-2xl text-neutral-100" />
            <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 ">
              <p className="text-xs font-semibold text-white">2</p>
            </div>
          </div>

          <div className="relative">
            {user ? (
              <React.Fragment>
                <motion.img
                  whileTap={{ scale: 0.6 }}
                  src={user.photoURL ? user.photoURL : Avatar}
                  className="h-10 w-10 cursor-pointer rounded-full drop-shadow-xl"
                  alt="userprofile"
                  onClick={() => (isMenu ? setIsMenu(false) : setIsMenu(true))}
                />
                {isMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    className="absolute top-12 right-0 flex w-40 flex-col rounded-lg bg-neutral-50"
                  >
                    {user && user.email === "duydh2000@gmail.com" && (
                      <Link to="/createItem">
                        <p
                          className="flex cursor-pointer items-center gap-3 rounded-lg px-4 py-2 text-neutral-800 transition-all duration-100 ease-in-out hover:bg-neutral-300"
                          onClick={() => setIsMenu(false)}
                        >
                          New Item <MdAdd />
                        </p>
                      </Link>
                    )}
                    {width <= 640 &&
                      navItems.map((navItem, key) => {
                        return (
                          <p
                            className="flex cursor-pointer items-center gap-3 rounded-lg px-4 py-2 text-neutral-800 transition-all duration-100 ease-in-out hover:bg-neutral-300"
                            onClick={() => setIsMenu(false)}
                            key={key}
                          >
                            {navItem}
                          </p>
                        );
                      })}
                    <p
                      className="flex cursor-pointer items-center gap-3 rounded-lg px-4 py-2 text-neutral-800 transition-all duration-100 ease-in-out hover:bg-red-500 hover:text-neutral-50"
                      onClick={logout}
                    >
                      Log out <MdLogout />
                    </p>
                  </motion.div>
                )}
              </React.Fragment>
            ) : (
              <Link
                to="/signin"
                className="h-10 w-32 rounded-lg bg-neutral-100 drop-shadow-xl"
              >
                Log in
                <MdLogin />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
