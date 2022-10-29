import React from "react";
import Delivery from "../img/delivery.png";
import Hero from "../img/heroBg.png";
import I1 from "../img/i1.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
      <div className="flex flex-1 flex-col items-start justify-center gap-6 py-2">
        <div className="flex items-center justify-center gap-2 rounded-full bg-orange-200 p-2 px-3 py-1">
          <p className="text-base font-semibold text-orange-600">
            Lorem ipsum
          </p>
          <div className="h-6 w-6 overflow-hidden rounded-full drop-shadow-xl">
            <img
              className="h-full w-full bg-white object-contain"
              src={Delivery}
              alt="delivery"
            />
          </div>
        </div>
        <p className="text-2xl font-bold tracking-wide text-neutral-900">
        Lorem ipsum dolor sit amet consectetur <br />
          <span className="text-5xl text-orange-600">adipisicing elit</span>
        </p>

        <p className="text-center text-base text-neutral-900 md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid
          est cupiditate maiores molestiae. Aliquid earum facilis eos vel
          quisquam officia corporis, minus qui officiis vero, alias vitae, dicta
          ipsa.
        </p>

        <button
          type="button"
          className="text-neutral-100 w-full rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 px-4 py-2 transition-all duration-100 ease-in-out hover:shadow-lg md:w-auto"
        >
          Lorem ipsum
        </button>
      </div>

      <div className="relative flex flex-1 items-center py-2">
        <div className=" ml-48 h-[40rem] w-full bg-gradient-to-br from-orange-500 to-orange-50 rounded-3xl"></div>

        <div className="top-20 absolute grid grid-cols-2 left-[2vh] h-80 w-fit items-center justify-center px-16 gap-x-4 gap-y-20">
          {heroData && heroData.map(n => (
            <div key={n.id} className="w-fit flex flex-col items-center justify-center rounded-3xl bg-neutral-50/30 p-4 backdrop-blur-md drop-shadow-xl">
            <img src={n.imageSrc} alt="I1" className="-mt-20 w-40" />
            <div key={n.name} className="text-lg font-semibold text-neutral-900 truncate">
              {n.name}
            </div>
            <div key={n.description} className="text-sm font-semibold text-neutral-500 truncate">
              {n.description}
            </div>
            <div key={n.price} className="text-sm font-semibold text-neutral-900 truncate">
              <span className="text-red-600">$</span>{n.price}
            </div>
          </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
