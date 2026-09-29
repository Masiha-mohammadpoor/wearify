"use client";
import Select from "react-select";
import { useCountries } from "@/lib/useCountries";
import { selectStyles } from "@/constants/selectStyles";

const CountrySelect = ({ value, onChange, label }) => {
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
        isSearchable
        isClearable
      />
    </div>
  );
};

export default CountrySelect;
