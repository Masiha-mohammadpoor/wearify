import { LuShoppingBag } from "react-icons/lu";

const DashboardCard = ({ title, value }) => {
  return (
    <article className="relative overflow-hidden col-span-4 rounded-xl bg-red-900 p-5 flex flex-col gap-y-3">
      <div className="flex items-center text-white text-xl gap-x-3 font-bold">
        <LuShoppingBag className="mb-1" />
        <h3>{title}</h3>
      </div>
      <div className="z-20 w-full flex justify-end text-white text-2xl font-extrabold">
        <span className="flex justify-center items-center rounded-2xl bg-red-950 w-16 h-16">
          {value}
        </span>
      </div>
      <div className="absolute w-32 h-32 rounded-full -left-16 -bottom-13 bg-red-950/40"></div>
      <div className="absolute w-32 h-32 rounded-full left-3 -bottom-20 bg-red-950/40"></div>
      <div className="absolute w-32 h-32 rounded-full -right-16 -top-16 bg-red-950/40"></div>
      <div className="absolute w-32 h-32 rounded-full -right-16 top-10 bg-red-950/40"></div>
    </article>
  );
};

export default DashboardCard;
