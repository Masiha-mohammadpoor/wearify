export const selectStyles = {
  control: (base, state) => ({
    ...base,
    width: "100%",
    borderRadius: "0.75rem",
    border: "1px solid #dfcec6",
    backgroundColor: state.isDisabled ? "#eadfd7" : "#FDF8F6",
    padding: "0.125rem 0.25rem",
    boxShadow: "none",
    outline: "none",
    minHeight: "42px",
    "&:hover": {
      border: "1px solid #dfcec6",
    },
    ...(state.isFocused && {
      border: "1px solid #7f1d1d",
    }),
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0 0.5rem",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#1f2937",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#9ca3af",
  }),
  input: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#7f1d1d",
    padding: "0 0.5rem",
    "&:hover": {
      color: "#7f1d1d",
    },
  }),
  clearIndicator: (base) => ({
    ...base,
    color: "#7f1d1d",
    padding: "0 0.5rem",
    cursor: "pointer",
    "&:hover": {
      color: "#991b1b",
    },
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "0.75rem",
    border: "1px solid #dfcec6",
    backgroundColor: "#FDF8F6",
    overflow: "hidden",
    zIndex: 50,
  }),
  menuList: (base) => ({
    ...base,
    padding: "0.25rem",
  }),
  option: (base, state) => ({
    ...base,
    borderRadius: "0.5rem",
    backgroundColor: state.isSelected
      ? "#7f1d1d"
      : state.isFocused
      ? "#f3e8e4"
      : "transparent",
    color: state.isSelected ? "#ffffff" : "#1f2937",
    cursor: "pointer",
    padding: "0.5rem 0.75rem",
    "&:active": {
      backgroundColor: "#7f1d1d",
    },
  }),
  noOptionsMessage: (base) => ({
    ...base,
    color: "#9ca3af",
  }),
};