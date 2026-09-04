const AuthInput = ({ type = "text", name, placeholder, register, errors }) => {
  return (
    <div className="flex flex-col gap-y-1 pb-3 w-full">
      <input
        // {...register(name)}
        id={name}
        className="border-0 outline-0 py-3 px-5 rounded-full w-full bg-white"
        type={type}
        placeholder={placeholder}
        autoComplete="off"
      />
      {/* {errors[name]?.message ? (
        <p className="text-xs text-red-500">{errors[name].message}</p>
      ) : (
        <p className="text-xs text-transparent">|</p>
      )} */}
    </div>
  );
};

export default AuthInput;
