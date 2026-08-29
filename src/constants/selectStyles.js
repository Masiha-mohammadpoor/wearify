export const selectStyles = {
  container: (baseStyles, state) => ({
    ...baseStyles,
    border: 0,
    outline: 0,
    position: "relative",
  }),
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    color: "#6c757d",
    border: "none",
    outline: "none",
    "&:hover": {
      color: "#495057",
    },
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: "#f4ece4",
    display: "flex",
    borderRadius: "0.5rem",
    padding: "0.2rem 0",
    backdropFilter: "blur(16px)",
    color: "#fff",
    border: 0,
    boxShadow: "3px 3px 10px #e8e7e7",
    outline: 0,
  }),
  input: (baseStyles, state) => ({
    ...baseStyles,
    color: "#495057",
    "&:focus": {
      padding: 0,
      margin: 0,
    },
  }),
  menu: (baseStyles, state) => ({
    ...baseStyles,
    color: "#495057",
    backgroundColor: "#f4ece4",
    maxHeight: "130px",
    overflowY: "auto",
    backdropFilter: "blur(16px)",
    position: "absolute",
    zIndex: 40,
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isSelected ? "#d8cabc" : "transparent",
    "&:hover": {
      backgroundColor: "#d8cabc",
      color: "white",
      backdropFilter: "blur(16px)",
    },
  }),
  singleValue: (baseStyles, state) => ({
    ...baseStyles,
    color: "#495057",
  }),
};