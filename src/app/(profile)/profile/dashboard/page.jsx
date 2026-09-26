"use client";
import DashboardCard from "@/components/DashboardCard";
import PersonalInfoItem from "@/components/PersonalInfoItem";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import {
  LuCalendar,
  LuMapPin,
  LuPencil,
  LuPhone,
  LuUserRound,
} from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { TiTick, TiWarning } from "react-icons/ti";

const DashboardPage = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <main className="col-span-8 pt-10 px-12 flex flex-col gap-y-8 h-screen overflow-y-scroll">
        <p>Loading...</p>
      </main>
    );
  }

  const user = session?.user;

  const fullName = [user?.firstName, user?.lastName].filter(Boolean).join(" ");

  const avatarLetter =
    user?.firstName?.[0]?.toUpperCase() ||
    user?.email?.[0]?.toUpperCase() ||
    "?";

  const registeredDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const location = [user?.city, user?.country].filter(Boolean).join(", ");

  return (
    <main className="col-span-8 pt-10 px-12 flex flex-col gap-y-8 h-screen overflow-y-scroll">
      <h1 className="text-2xl font-semibold flex gap-4 items-center">
        Dashboard
      </h1>
      {/* dashboard cards */}
      <section className="w-full grid grid-cols-12 gap-8">
        <DashboardCard title="My Order" value={10} />
        <DashboardCard title="My Order" value={10} />
        <DashboardCard title="My Order" value={10} />
      </section>
      {/* user info */}
      <section className="relative w-full rounded-xl bg-[#f4ece4] p-10 flex flex-col gap-y-10">
        <Link
          href="/profile/complete-profile"
          className="inline-block p-4 text-white bg-red-900 rounded-xl text-xl absolute right-8 top-8"
        >
          <LuPencil />
        </Link>
        <div className="flex justify-start items-center gap-x-5">
          <div className="w-30 h-30 rounded-full text-white bg-red-900 flex justify-center items-center text-3xl font-bold">
            {avatarLetter}
          </div>
          <div className="flex flex-col gap-y-3">
            <h3 className="text-2xl font-semibold">
              {fullName || "Your name"}
            </h3>
            {registeredDate && (
              <p className="text-sm text-gray-500">
                Registered on {registeredDate}
              </p>
            )}
            <span
              className={`inline-block w-fit mt-1.5 px-2 py-1 border-2 rounded-full text-xs ${
                session?.user?.profileCompleted
                  ? "text-green-800 bg-green-100 border-green-800"
                  : "text-yellow-800 bg-yellow-100 border-yellow-800"
              }`}
            >
              {session?.user?.profileCompleted ? (
                <span className="flex items-center gap-x-2">
                  <TiTick className="mb-1" /> Completed Profile
                </span>
              ) : (
                <span className="flex items-center gap-x-2">
                  <TiWarning className="mb-1" /> Incomplete Profile
                </span>
              )}
            </span>
          </div>
        </div>
        <span className="inline-block w-full h-[0.5px] bg-gray-400"></span>
        <div className="grid grid-cols-12 gap-6">
          <h3 className="col-span-12 text-lg font-semibold mb-8">
            Personal Information
          </h3>
          <PersonalInfoItem
            title="Full Name"
            value={fullName || "Not set"}
            icon={<LuUserRound />}
          />
          <PersonalInfoItem
            title="Email Address"
            value={user?.email || "Not set"}
            icon={<HiOutlineMail />}
          />
          <PersonalInfoItem
            title="Phone Number"
            value={user?.phoneNumber || "Not set"}
            icon={<LuPhone />}
          />
          <PersonalInfoItem
            title="Location"
            value={location || "Not set"}
            icon={<LuMapPin />}
          />
          <PersonalInfoItem
            title="Join Date"
            value={registeredDate || "Not set"}
            icon={<LuCalendar />}
          />
        </div>
      </section>
    </main>
  );
};

export default DashboardPage;
