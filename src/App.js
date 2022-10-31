import { React } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header, Register, MainContainer, CreateContainer } from "./components";

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="flex h-auto w-screen bg-sky-200">
        <Header />
        <main className="mt-14 w-full p-8 px-4 py-4 md:mt-20 md:px-16">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/register" element={<Register />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
