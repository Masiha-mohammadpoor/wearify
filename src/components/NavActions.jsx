"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { FiShoppingBag, FiUser } from "react-icons/fi";

const NavActions = () => {
  const { data: session, isPending } = useSession();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (!session) {
      setCartCount(0);
      return;
    }

    fetch("/api/cart")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCartCount(data.data.totalItems);
        }
      })
      .catch(() => {});
  }, [session]);

  return (
    <div className="flex items-center gap-x-5">
      {isPending ? (
        <div className="h-5 w-16 rounded bg-[#eadfd7] animate-pulse" />
      ) : session ? (
        <>
          <Link
            href="/profile/dashboard"
            aria-label="Profile"
            className="text-[#8e7973] transition hover:text-[#82181a]"
          >
            <FiUser size={20} />
          </Link>

          <Link
            href="/cart"
            aria-label="Cart"
            className="relative text-[#8e7973] transition hover:text-[#82181a]"
          >
            <FiShoppingBag size={21} />

            {cartCount > 0 && (
              <span className="absolute -right-2.5 -top-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#82181a] text-[9px] text-white">
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </Link>
        </>
      ) : (
        <Link
          href="/login"
          className="rounded-full bg-[#82181a] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#681416]"
        >
          Login / Signup
        </Link>
      )}
    </div>
  );
};

export default NavActions;