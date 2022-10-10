import { React } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header, MainContainer, CreateContainer } from "./components";

function App() {
  return (
    <AnimatePresence>
      <div className="flex h-auto w-screen bg-neutral-200">
        <Header />

        <main className="mt-24 w-full p-8">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
