import React from 'react'
import Delivery from "../img/delivery.png";

const HomeContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
      <div className="flex flex-1 flex-col items-start justify-center gap-6 py-2">
        <div className="flex items-center justify-center gap-2 rounded-full bg-orange-200 p-2 px-3 py-1">
          <p className="text-base font-semibold text-orange-600">
            Bike Delivery
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
          The Fastest Delivery in <br />
          <span className="text-5xl text-orange-600">Your City</span>
        </p>

        <p className="text-center text-base text-neutral-900 md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid
          est cupiditate maiores molestiae. Aliquid earum facilis eos vel
          quisquam officia corporis, minus qui officiis vero, alias vitae, dicta
          ipsa.
        </p>

        <button
          type="button"
          className="w-full rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 px-4 py-2 transition-all duration-100 ease-in-out hover:shadow-lg md:w-auto"
        >
          Order now
        </button>
      </div>
    </div>
  )
}

export default HomeContainer