const AuthInput = ({ type = "text", name, placeholder, register, errors }) => {
  return (
    <div className="flex flex-col pb-3 w-full">
      <input
        {...register(name)}
        id={name}
        className="border-0 outline-0 py-2.5 px-5 rounded-full w-full bg-white"
        type={type}
        placeholder={placeholder}
        autoComplete="off"
      />
      {errors[name]?.message ? (
        <p className="px-2 pt-0.5 text-xs text-red-500">
          {errors[name].message}
        </p>
      ) : (
        <p className="px-2 pt-0.5 text-xs text-transparent">|</p>
      )}
    </div>
  );
};

export default AuthInput;
