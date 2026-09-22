const PersonalInfoItem = ({ title, value, icon }) => {
  return (
    <div className="col-span-6 flex gap-4 items-center">
      <span className="w-13 h-13 shadow-2xl rounded-xl bg-[#FDF8F6] flex justify-center items-center text-red-900 text-2xl">
        {icon}
      </span>
      <div className="h-13 flex flex-col justify-between py-px">
        <p className="text-[15px] font-bold">{title}</p>
        <p className="text-sm text-gray-500">{value}</p>
      </div>
    </div>
  );
};

export default PersonalInfoItem;
