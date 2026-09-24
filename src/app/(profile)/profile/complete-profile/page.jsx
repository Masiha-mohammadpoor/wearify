import ProfileInput from "@/components/ProfileInput";
import { LuMapPin, LuPhone, LuUserRound } from "react-icons/lu";

const completeProfile = () => {
  return (
    <main className="col-span-8 pt-10 px-12 flex flex-col gap-y-8 h-screen overflow-y-scroll">
      <h1 className="text-2xl font-semibold flex gap-4 items-center">
        Complete Profile
      </h1>
      <form className="w-full bg-[#f4ece4] rounded-xl p-10 flex flex-col gap-y-10">
        {/* ================== Avatar =================== */}
        <article className="flex justify-start items-center gap-x-5">
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
        </article>
        <span className="w-full h-px bg-[#dfcec6]"></span>
        {/* =============== Personal Info =============== */}
        <article className="grid gid-cols-12 gap-y-7 gap-x-8">
          <div className="col-span-12 flex items-center gap-x-4">
            <span className="inline-block rounded-xl bg-[#FDF8F6] p-3 shadow-xl text-xl text-red-900">
              <LuUserRound />
            </span>
            <h3 className="font-semibold text-lg">Personal Information</h3>
          </div>
          <ProfileInput
            name="firstname"
            label="First Name"
            placeholder="John"
            style="col-span-6"
          />
          <ProfileInput
            name="lastname"
            label="Last Name"
            placeholder="Doe"
            style="col-span-6"
          />
        </article>
        {/* ================ Contact Info =============== */}
        <article className="grid gid-cols-12 gap-y-7 gap-x-8">
          <div className="col-span-12 flex items-center gap-x-4">
            <span className="inline-block rounded-xl bg-[#FDF8F6] p-3 shadow-xl text-xl text-red-900">
              <LuPhone />
            </span>
            <h3 className="font-semibold text-lg">Contact Information</h3>
          </div>
          <ProfileInput
            name="phoneNumber"
            label="Phone Number"
            placeholder="+1234567890"
            style="col-span-6"
          />
          <ProfileInput
            name="email"
            label="Email"
            disabled
            placeholder="john.doe@example.com"
            style="col-span-10"
          />
        </article>
        {/* =================== Location ===================== */}
        <article className="grid gid-cols-12 gap-y-7 gap-x-8">
          <div className="col-span-12 flex items-center gap-x-4">
            <span className="inline-block rounded-xl bg-[#FDF8F6] p-3 shadow-xl text-xl text-red-900">
              <LuMapPin />
            </span>
            <h3 className="font-semibold text-lg">Location</h3>
          </div>
          <ProfileInput
            name="country"
            label="Country"
            placeholder="United States"
            style="col-span-6"
          />
          <ProfileInput
            name="city"
            label="City"
            placeholder="New York"
            style="col-span-6"
          />
          <div className="flex flex-col items-start col-span-12">
            <label
              htmlFor="address"
              className="text-sm font-semibold mb-2.5 pl-1"
            >
              Address
            </label>
            <textarea
              id="address"
              placeholder="Enter Your Full Address"
              autoComplete="off"
              className="w-full resize-none h-32 outline-none rounded-xl border border-[#dfcec6] py-2 px-4 bg-[#FDF8F6] focus:border-red-900"
            />
          </div>

          <ProfileInput
            name="postalCode"
            label="Postal Code"
            placeholder="1234567890"
            style="col-span-6"
          />
        </article>
        {/* =================== Save Button ==================== */}
        <span className="w-full h-px bg-[#dfcec6]"></span>
        <div className="w-full flex justify-end">
          <button
            type="button"
            className="bg-red-900 cursor-pointer text-white rounded-xl px-3 py-2"
          >
            Save Changes
          </button>
        </div>
      </form>
    </main>
  );
};

export default completeProfile;
