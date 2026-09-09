"use client";

import Image from "next/image";
import Link from "next/link";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { useSession } from "@/lib/auth-client";
import { PiUserCircleDuotone } from "react-icons/pi";

const headerLinks = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "Products",
    link: "/products",
  },
  {
    id: 3,
    text: "About",
    link: "/about",
  },
  {
    id: 4,
    text: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  const { data, isPending } = useSession();

  return (
    <header className="w-[98%] rounded-b-2xl mx-auto flex justify-between items-center px-10 py-2 sticky top-0 bg-white/10 backdrop-blur-md z-50">
      <Link href="/">
        <Image alt="Wearify" src="/logo.png" width={100} height={100} />
      </Link>
      <div className="flex items-center gap-x-5">
        {headerLinks.map((item) => {
          return (
            <Link
              key={item.id}
              href={item.link}
              className="group relative px-3 py-3 flex items-center justify-center"
            >
              {item.text}
              <span className="absolute w-0 h-0.75 rounded-full bg-red-900 bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          );
        })}
      </div>
      {isPending ? (
        <div></div>
      ) : data ? (
        <div className="flex items-center gap-x-3">
          <Link href="/cart">
            <PiShoppingCartSimpleDuotone className="text-red-900 text-[26px]" />
          </Link>
          <Link href="/profile">
            <PiUserCircleDuotone className="text-[32px] text-red-900" />
          </Link>
        </div>
      ) : (
        <Link href="/login">
          <button className="px-3 py-1.5 font-semibold rounded-2xl bg-red-900 text-white cursor-pointer">
            Login / Signup
          </button>
        </Link>
      )}
    </header>
  );
};

export default Header;
