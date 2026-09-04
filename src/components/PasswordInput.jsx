"use client";
import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";

const PasswordInput = ({ name, placeholder, register, errors }) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="flex flex-col pb-3 w-full">
      <div className="w-full flex items-center">
        <input
          {...register(name)}
          id={name}
          className="border-0 outline-0 py-3 px-5 rounded-l-full w-[85%] bg-white"
          type={showPass ? "text" : "password"}
          placeholder={placeholder}
          autoComplete="off"
        />
        <button
          onClick={() => setShowPass((prev) => !prev)}
          type="button"
          className="border-0 outline-0 py-2.5 px-5 rounded-r-full w-[15%] bg-white"
        >
          {showPass ? (
            <LuEye className="text-2xl text-red-900" />
          ) : (
            <LuEyeClosed className="text-2xl text-red-900" />
          )}
        </button>
      </div>
      {errors[name]?.message ? (
        <p className="pt-0.5 px-2 text-xs text-red-500">
          {errors[name].message}
        </p>
      ) : (
        <p className="pt-0.5 px-2 text-xs text-transparent">|</p>
      )}
    </div>
  );
};

export default PasswordInput;
