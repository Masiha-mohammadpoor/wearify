const ProfileInput = ({
  name,
  label,
  type = "text",
  placeholder,
  style,
  disabled = false,
}) => {
  return (
    <div className={`flex flex-col items-start ${style}`}>
      <label htmlFor={name} className="text-sm font-semibold mb-2.5 pl-1">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
        className="w-full outline-none rounded-xl border border-[#dfcec6] py-2 px-4 bg-[#FDF8F6] disabled:border-[#dfcec6] disabled:bg-[#eadfd7] focus:border-red-900"
      />
    </div>
  );
};

export default ProfileInput;
