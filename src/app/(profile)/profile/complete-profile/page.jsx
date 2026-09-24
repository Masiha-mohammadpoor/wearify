"use client";
import ProfileInput from "@/components/ProfileInput";
import { LuMapPin, LuPhone, LuUserRound } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSession, authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^\+[1-9]\d{7,14}$/, {
      message: "Phone number must include country code",
      excludeEmptyString: true,
    })
    .typeError("Phone number must be a string"),

  country: yup
    .string()
    .required("Country is required")
    .typeError("Country must be a string"),

  city: yup
    .string()
    .required("City is required")
    .typeError("City must be a string"),

  address: yup
    .string()
    .required("Address is required")
    .typeError("Address must be a string"),

  postalCode: yup
    .string()
    .required("Postal code is required")
    .typeError("Postal code must be a string"),
});

const CompleteProfile = () => {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      country: "",
      city: "",
      address: "",
      postalCode: "",
    },
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  useEffect(() => {
    if (session?.user) {
      reset({
        firstName: session.user.firstName || "",
        lastName: session.user.lastName || "",
        email: session.user.email || "",
        phoneNumber: session.user.phoneNumber || "",
        country: session.user.country || "",
        city: session.user.city || "",
        address: session.user.address || "",
        postalCode: session.user.postalCode || "",
      });
    }
  }, [session, reset]);

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [isPending, session, router]);

  const onSubmit = async (data) => {
    const { error } = await authClient.updateUser({
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      country: data.country,
      city: data.city,
      address: data.address,
      postalCode: data.postalCode,
    });

    if (error) {
      console.error(error);
      return;
    }

    router.back();
  };

  const fullName = [session?.user?.firstName, session?.user?.lastName]
    .filter(Boolean)
    .join(" ");

  const avatarLetter =
    session?.user?.firstName?.[0]?.toUpperCase() ||
    session?.user?.email?.[0]?.toUpperCase() ||
    "?";

  const registeredDate = session?.user?.createdAt
    ? new Date(session.user.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  if (isPending) return <p>Loading...</p>;

  return (
    <main className="col-span-8 pt-10 px-12 flex flex-col gap-y-8 h-screen overflow-y-scroll">
      <h1 className="text-2xl font-semibold flex gap-4 items-center">
        Complete Profile
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full bg-[#f4ece4] rounded-xl p-10 flex flex-col gap-y-10"
      >
        {/* ================== Avatar =================== */}
        <article className="flex justify-start items-center gap-x-5">
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
              {session?.user?.profileCompleted
                ? "Completed Profile"
                : "Incomplete Profile"}
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
            name="firstName"
            label="First Name"
            placeholder="John"
            style="col-span-6"
            register={register}
          />
          <ProfileInput
            name="lastName"
            label="Last Name"
            placeholder="Doe"
            style="col-span-6"
            register={register}
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
            register={register}
          />
          <ProfileInput
            name="email"
            label="Email"
            disabled
            placeholder="john.doe@example.com"
            style="col-span-10"
            register={register}
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
            register={register}
          />
          <ProfileInput
            name="city"
            label="City"
            placeholder="New York"
            style="col-span-6"
            register={register}
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
              {...register("address")}
              className="w-full resize-none h-32 outline-none rounded-xl border border-[#dfcec6] py-2 px-4 bg-[#FDF8F6] focus:border-red-900"
            />
          </div>

          <ProfileInput
            name="postalCode"
            label="Postal Code"
            placeholder="1234567890"
            style="col-span-6"
            register={register}
          />
        </article>
        {/* =================== Save Button ==================== */}
        <span className="w-full h-px bg-[#dfcec6]"></span>
        <div className="w-full flex justify-end">
          <button
            disabled={!isValid || !isDirty || isSubmitting}
            className="bg-red-900 cursor-pointer text-white rounded-xl px-3 py-2 hover:bg-red-950 transition-all duration-300  disabled:cursor-not-allowed disabled:bg-red-900 disabled:opacity-45"
          >
            {isSubmitting ? "saving..." : "save & continue"}
          </button>
        </div>
      </form>
    </main>
  );
};

export default CompleteProfile;
