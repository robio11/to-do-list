import { LockClosedIcon, UserIcon } from "@heroicons/react/solid";
import React from "react";

function SignIn() {
  return (
    <div className="flex justify-center items-center gap-4 mt-20">
      <div className="flex w-96 h-96 justify-center items-center">
        <img src="signIn.svg" alt="" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-2 mt-4 font-serif">
          <UserIcon className="flex w-5 h-5 text-gray-500" />

          <input
            type="text"
            placeholder="user"
            className="flex w-52 h-8 border outline-none font-serif px-2 shadow-inner rounded-lg"
          />
        </div>

        <div className="flex gap-2 mt-4 font-serif">
          <LockClosedIcon className="flex w-5 h-5 text-gray-500" />

          <input
            type="text"
            placeholder="email"
            className="flex w-52 h-8 border outline-none font-serif px-2 shadow-inner rounded-lg"
          />
        </div>

        <div className="flex gap-2 mt-4 font-serif">
          <LockClosedIcon className="flex w-5 h-5 text-gray-500" />

          <input
            type="text"
            placeholder="password"
            className="flex w-52 h-8 border outline-none font-serif px-2 shadow-inner rounded-lg"
          />
        </div>

        <div className="flex gap-2 mt-4 font-serif">
          <LockClosedIcon className="flex w-5 h-5 text-gray-500" />

          <input
            className="flex w-52 h-8 border outline-none font-serif px-2 shadow-inner rounded-lg"
            type="text"
            placeholder="re-enter password"
          />
        </div>
        <div className="flex justify-center items-center mt-8 bg-cyan-500 text-white w-20 px-2 py-1 font-bold cursor-pointer rounded-md">
          Sign In
        </div>
      </div>
    </div>
  );
}

export default SignIn;
