"use client";
import Select from "react-select";
import { useCountries } from "@/lib/useCountries";
import { selectStyles } from "@/constants/selectStyles";

const CountrySelect = ({ value, onChange,onBlur, label, error }) => {
  const { countries, loading } = useCountries();

  const options = countries.map((c) => ({
    value: c.code,
    label: c.name,
  }));

  const selectedOption = options.find((o) => o.value === value) || null;

  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold mb-2.5 pl-1">{label}</label>
      <Select
        instanceId="country-select"
        options={options}
        value={selectedOption}
        placeholder={loading ? "Loading countries..." : "Select country"}
        isDisabled={loading}
        isLoading={loading}
        styles={selectStyles}
        onChange={(option) => onChange(option?.value || "")}
        onBlur={onBlur}
        isSearchable
        isClearable
      />
      {error ? (
        <p className="text-xs text-red-500 mt-1.5 ml-1">{error}</p>
      ) : (
        <p className="text-xs text-transparent mt-1.5 ml-1">.</p>
      )}
    </div>
  );
};

export default CountrySelect;
