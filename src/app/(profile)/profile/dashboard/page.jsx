import DashboardCard from "@/components/DashboardCard";
import PersonalInfoItem from "@/components/PersonalInfoItem";
import Link from "next/link";
import {
  LuCalendar,
  LuMapPin,
  LuPencil,
  LuPhone,
  LuUserRound,
} from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";

const DashboardPage = () => {
  return (
    <main className="col-span-8 pt-10 px-12 flex flex-col gap-y-8">
      {/* dashboard cards */}
      <section className="w-full grid grid-cols-12 gap-8">
        <DashboardCard title="My Order" value={10} />
        <DashboardCard title="My Order" value={10} />
        <DashboardCard title="My Order" value={10} />
      </section>
      {/* user info */}
      <section className="relative w-full rounded-xl bg-[#f4ece4] p-10 flex flex-col gap-y-10">
        <Link
          href="profile/complete-profile"
          className="inline-block p-4 text-white bg-red-900 rounded-xl text-xl absolute right-8 top-8"
        >
          <LuPencil />
        </Link>
        <div className="flex justify-start items-center gap-x-5">
          <div className="w-30 h-30 rounded-full text-white bg-red-900 flex justify-center items-center text-3xl font-bold">
            M
          </div>
          <div className="flex flex-col gap-y-3">
            <h3 className="text-2xl font-semibold">Masiha Mhmpr</h3>
            <p className="text-sm text-gray-500">Registered on July 15, 2026</p>
            <span className="inline-block w-fit mt-1.5 px-2 py-1 text-green-800 bg-green-100 border-2 border-green-800 rounded-full text-xs">
              Completed Profile
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
            value="Masiha Mohammadpour"
            icon={<LuUserRound />}
          />
          <PersonalInfoItem
            title="Email Address"
            value="masih@gmail.com"
            icon={<HiOutlineMail />}
          />
          <PersonalInfoItem
            title="Phone Number"
            value="+989113295810"
            icon={<LuPhone />}
          />
          <PersonalInfoItem
            title="Location"
            value="Iran , Mazandaran"
            icon={<LuMapPin />}
          />
          <PersonalInfoItem
            title="Join Date"
            value="September 16, 2026"
            icon={<LuCalendar />}
          />
        </div>
      </section>
    </main>
  );
};

export default DashboardPage;
