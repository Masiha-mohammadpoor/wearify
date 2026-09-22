"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuHouse, LuShoppingBag, LuUserPen, LuPower , LuLayoutDashboard} from "react-icons/lu";

const menuLinks = [
  {
    id: 1,
    title: "Home",
    icon: <LuHouse />,
    href: "/",
  },
  {
    id: 2,
    title: "Dashboard",
    icon: <LuLayoutDashboard />,
    href: "/profile/dashboard",
  },
  {
    id: 3,
    title: "Order Hostory",
    icon: <LuShoppingBag />,
    href: "/profile/order-history",
  },
  {
    id: 4,
    title: "Complete Profile",
    icon: <LuUserPen />,
    href: "/profile/complete-profile",
  },
];

const ProfileMenu = () => {
  const pathname = usePathname();
  return (
    <section className="h-screen pt-5 pb-8 px-5 col-span-2 bg-[#f4ece4] flex flex-col items-start justify-between">
      <div className="flex flex-col gap-y-10 w-full items-start">
        <div className="flex flex-col items-center gap-y-2">
          <Link href="/">
            <div className="relative w-40 h-14">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="absolute object-contain"
              />
            </div>
          </Link>
          <p className="text-xs mr-5 text-[#8e7973]">Your Personal Space</p>
        </div>
        <div className="flex flex-col gap-y-5 w-full">
          {menuLinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link href={item.href} key={item.id}>
                <div
                  className={`pl-5 w-full px-2 py-2 rounded-xl flex items-center gap-x-3 justify-start text-red-900 hover:bg-red-900 hover:text-white transition-all duration-500 ${isActive && "bg-red-900 text-white"}`}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <button className="px-5 py-2 rounded-xl  w-full flex justify-between items-center cursor-pointer text-red-900 hover:bg-red-900 hover:text-white transition-all duration-500">
        <span>Logout</span> <LuPower className="text-xl" />
      </button>
    </section>
  );
};

export default ProfileMenu;
