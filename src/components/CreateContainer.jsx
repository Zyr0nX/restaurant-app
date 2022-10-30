import React, { useState } from "react";
import { motion } from "framer-motion";

import { MdFastfood } from "react-icons/md";
import { categories } from "../utils/data";
import Loader from "./Loader";

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [image, setImage] = useState(null);
  const [fields, setFields] = useState(true);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex h-auto min-h-screen w-full items-center justify-center">
      <div className="flex w-[90%] flex-col items-center justify-center gap-4 rounded-lg border border-gray-600 p-4 md:w-[75%]">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full rounded-lg p-2 text-center text-lg font-semibold ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-green-400 text-green-800"
            }`}
          >
            {message}
          </motion.p>
        )}

        <div className="flex w-full items-center gap-2 border-b border-gray-300 py-2">
          <MdFastfood className="text-xl text-gray-700" />
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give me a title"
            className="h-full w-full border-none bg-transparent text-lg font-semibold text-neutral-900 outline-none placeholder:text-gray-400"
          />
        </div>

        <div className="w-full">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full cursor-pointer rounded-md border-b-2 border-gray-200 p-2 text-base outline-none"
          >
            <option value="other" className="bg-white">
              Select Category
            </option>
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  className="border-0 bg-white text-base capitalize text-neutral-900 outline-none"
                  value={item.urlParamName}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>

        <div className="group flex h-40 w-full flex-col items-center justify-center rounded-lg border-2 border-dotted border-gray-300">
          {isLoading && <Loader />}
        </div>
      </div>
    </div>
  );
};

export default CreateContainer;
