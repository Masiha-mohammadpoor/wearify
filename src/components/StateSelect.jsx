"use client";
import Select from "react-select";
import { useCountries } from "@/lib/useCountries";
import { selectStyles } from "@/constants/selectStyles";

const StateSelect = ({ countryCode, value, onChange , label}) => {
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
        isSearchable
        isClearable
      />
    </div>
  );
};

export default StateSelect;
