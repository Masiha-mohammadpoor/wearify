import AuthInput from "@/components/AuthInput";
import PasswordInput from "@/components/PasswordInput";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { HiHome } from "react-icons/hi";

const Login = () => {
  return (
    <main className="overflow-hidden flex justify-between items-center h-screen bg-[#f4ece4]">
      <section
        className="relative h-screen w-3/5"
        style={{ clipPath: "url(#waveClip)" }}
      >
        <Image
          src="/login.png"
          alt="login"
          fill
          unoptimized
          sizes="60vw"
          className="object-cover"
        />
      </section>

      <section className="w-2/5 h-screen flex flex-col items-center justify-center relative">
        <Link className="absolute top-10 right-10" href="/">
          <HiHome className="text-red-900 text-2xl" />
        </Link>
        <h2 className="text-5xl font-semibold mb-10">Login</h2>
        <form className="flex flex-col gap-y-3 w-4/5">
          <AuthInput name="email" label="email" placeholder="email" />
          <PasswordInput
            name="password"
            label="password"
            type="password"
            placeholder="password"
          />
          <button className="w-full rounded-full text-white text-lg font-semibold bg-red-900 py-2 cursor-pointer hover:bg-red-950 transition-all duration-300">
            login to your account
          </button>
        </form>
        <button className="flex justify-center items-center border border-blue-500 gap-x-4 mt-6 w-4/5 rounded-full text-lg font-semibold bg-blue-100 py-2 cursor-pointer hover:bg-gray-200 transition-all duration-300">
          login with google <FcGoogle className="text-2xl" />
        </button>
        <Link href="/signup" className="text-red-900 mt-4">
          haven't registered yet?
        </Link>
        <Link href="/forgot-password" className="text-red-900 mt-2">
          forgot password?
        </Link>
      </section>

      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="waveClip" clipPathUnits="objectBoundingBox">
            <path d="M0,0 L0.94,0 C0.97,0.15 0.97,0.35 0.94,0.5 C0.91,0.65 0.91,0.85 0.94,1 L0,1 Z" />
          </clipPath>
        </defs>
      </svg>
    </main>
  );
};

export default Login;
