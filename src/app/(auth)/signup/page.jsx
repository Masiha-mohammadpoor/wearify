"use client";
import AuthInput from "@/components/AuthInput";
import PasswordInput from "@/components/PasswordInput";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { HiHome } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    fullname: yup
      .string()
      .required("fullname is required")
      .min(6, "fullname must be at least 6 characters"),
    email: yup
      .string()
      .required("email is required")
      .email("please enter a valid email"),
    password: yup
      .string()
      .required("password is required")
      .min(6, "password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .required("confirm password is required")
      .oneOf([yup.ref("password"), null], "passwords must match"),
  })
  .required();

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <main className="overflow-hidden flex justify-between items-center h-screen bg-[#f4ece4]">
      <section className="w-2/5 h-screen flex flex-col items-center justify-center relative">
        <Link className="absolute top-10 left-10" href="/">
          <HiHome className="text-red-900 text-2xl" />
        </Link>
        <h2 className="text-5xl font-semibold mb-6">SignUp</h2>
        <form
          className="flex flex-col gap-y-1 w-4/5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <AuthInput
            name="fullname"
            placeholder="fullname"
            register={register}
            errors={errors}
          />
          <AuthInput
            name="email"
            placeholder="email"
            register={register}
            errors={errors}
          />
          <PasswordInput
            name="password"
            placeholder="password"
            register={register}
            errors={errors}
          />
          <PasswordInput
            name="confirmPassword"
            placeholder="confirm password"
            register={register}
            errors={errors}
          />
          <button
            disabled={!isValid || !isDirty || isSubmitting}
            className="w-full rounded-full text-white text-lg font-semibold bg-red-900 py-2 cursor-pointer hover:bg-red-950 transition-all duration-300 disabled:cursor-not-allowed disabled:bg-red-900 disabled:opacity-45"
          >
            signup
          </button>
        </form>
        <button className="flex justify-center items-center border border-blue-500 gap-x-4 mt-5 w-4/5 rounded-full text-lg font-semibold bg-blue-100 py-2 cursor-pointer hover:bg-gray-200 transition-all duration-300">
          signup with google <FcGoogle className="text-2xl" />
        </button>
        <Link href="/login" className="text-red-900 mt-4">
          Have you already registered?
        </Link>
      </section>

      <section
        className="relative h-screen w-3/5 bg-red-200"
        style={{ clipPath: "url(#waveClip)" }}
      >
        <Image
          src="/signup.png"
          alt="signup"
          fill
          unoptimized
          sizes="60vw"
          className="object-cover"
        />
      </section>
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="waveClip" clipPathUnits="objectBoundingBox">
            <path d="M0.06,0 L1,0 L1,1 L0.06,1 C0.03,0.85 0.03,0.65 0.06,0.5 C0.09,0.35 0.09,0.15 0.06,0 Z" />
          </clipPath>
        </defs>
      </svg>
    </main>
  );
};

export default Signup;
