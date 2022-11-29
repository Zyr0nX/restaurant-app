import { React, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  Header,
  SignIn,
  MainContainer,
  CreateContainer,
  SignUp,
} from "./components";
import { auth } from "./utils/firebase";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { getCurrentUser } from "./utils/getCurrentUser";

function App() {
  console.log(getCurrentUser);
  return (
    <AnimatePresence mode="wait">
      <div className="flex h-auto w-screen bg-sky-200">
        <Header />
        <main className="mt-14 w-full p-8 px-4 py-4 md:mt-20 md:px-16">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route
              element={
                <ProtectedRoutes
                  auth={getCurrentUser != null}
                ></ProtectedRoutes>
              }
            ></Route>
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
