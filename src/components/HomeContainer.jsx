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
          <p className="text-base font-semibold text-orange-600">Lorem ipsum</p>
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
          className="w-full rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 px-4 py-2 text-neutral-100 transition-all duration-100 ease-in-out hover:shadow-lg md:w-auto"
        >
          Lorem ipsum
        </button>
      </div>

      <div className="relative flex items-center justify-center py-2">
        <div className="h-[35rem] w-full min-w-[25rem] rounded-3xl bg-gradient-to-br from-orange-500 to-orange-50 md:ml-48 md:w-full"></div>

        <div className="absolute top-20 left-[2vw] right-0 grid grid-cols-2 gap-x-8 gap-y-20 px-16 md:w-[500px]">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="flex h-44 w-44 flex-col items-center justify-center self-center rounded-3xl bg-neutral-50/30 p-4 drop-shadow-xl backdrop-blur-md even:justify-self-end"
              >
                <img src={n.imageSrc} alt="I1" className="-mt-20 w-40" />
                <div
                  key={n.name}
                  className="truncate text-lg font-semibold text-neutral-900"
                >
                  {n.name}
                </div>
                <div
                  key={n.description}
                  className="truncate text-sm font-semibold text-neutral-500"
                >
                  {n.description}
                </div>
                <div
                  key={n.price}
                  className="truncate text-sm font-semibold text-neutral-900"
                >
                  <span className="text-red-600">$</span>
                  {n.price}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
