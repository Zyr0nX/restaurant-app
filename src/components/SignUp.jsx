import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  browserLocalPersistence,
  setPersistence,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { app } from "../utils/firebase";
import { Link } from "react-router-dom";

const SignUp = () => {
  const firebaseAuth = getAuth(app);
  const email = React.useRef();
  const password = React.useRef();
  const confirmPassword = React.useRef();
  const [isVaidPassword, setIsVaidPassword] = useState(true);
  const [isVaidEmail, setIsVaidEmail] = useState(true);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const register = async () => {
    try {
      setIsVaidEmail(true);
      await createUserWithEmailAndPassword(
        firebaseAuth,
        email.current.value,
        password.current.value
      );
      await setPersistence(firebaseAuth, browserLocalPersistence);
      await sendEmailVerification(firebaseAuth.currentUser);
      setIsSuccessful(true);
    } catch (error) {
      console.error(error);
      setIsSuccessful(false);
      setIsVaidEmail(false);
    }
  };

  const validPassword = () => {
    password.current.value === confirmPassword.current.value
      ? setIsVaidPassword(true)
      : setIsVaidPassword(false);
  };
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <div className="m-auto w-full rounded-md bg-white p-6 shadow-xl lg:max-w-xl">
        <h1 className="text-center text-3xl font-semibold uppercase text-purple-700">
          Sign up
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              id="email"
              ref={email}
              type="email"
              className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-purple-700 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-40"
              placeholder="Email"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              id="password"
              ref={password}
              type="password"
              className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-purple-700 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-40"
              placeholder="Password"
              onChange={validPassword}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-semibold text-gray-800"
            >
              Confirm Password
            </label>
            <input
              id="confirm-password"
              ref={confirmPassword}
              type="password"
              className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-purple-700 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-40"
              placeholder="Confirm Password"
              onChange={validPassword}
            />
          </div>
          {!isVaidPassword && (
            <div className="mb-2">
              <div className="block text-sm font-semibold text-red-800">
                Confirm Password must match Password
              </div>
            </div>
          )}

          {!isVaidEmail && (
            <div className="mb-2">
              <div className="block text-sm font-semibold text-red-800">
                Email can't be used
              </div>
            </div>
          )}

          <div className="mt-6">
            <button
              type="button"
              className="w-full transform rounded-md bg-purple-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-purple-600 focus:bg-purple-600 focus:outline-none disabled:bg-purple-300"
              disabled={!isVaidPassword}
              onClick={register}
            >
              Sign Up
            </button>
          </div>

          {isSuccessful && (
            <div className="mb-2">
              <div className="block text-sm font-semibold text-green-600">
                Successfully create an account, please check your email to
                verify and{" "}
                <Link
                  to="/signin"
                  className="font-medium text-purple-600 hover:underline"
                >
                  Sign in
                </Link>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
