"use client";
import Select from "react-select";
import { useCountries } from "@/lib/useCountries";
import { selectStyles } from "@/constants/selectStyles";

const StateSelect = ({ countryCode, value, onChange , onBlur , label, error }) => {
  const { countries } = useCountries();
  const country = countries.find((c) => c.code === countryCode);
  const states = country?.states || null;

  if (!states) return null;

  const options = states.map((s) => ({
    value: s.code,
    label: s.name,
  }));

  const selectedOption = options.find((o) => o.value === value) || null;

  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold mb-2.5 pl-1">{label}</label>
      <Select
        instanceId="state-select"
        options={options}
        value={selectedOption}
        placeholder="Select state/province"
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

export default StateSelect;
