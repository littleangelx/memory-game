function ButtonSettings({ onClick, current, setterFn, children }) {
  return (
    <button
      className={`btn-light-blue ${
        current.toString() === children.toString() ? "active" : ""
      }`}
      onClick={() => onClick(setterFn, children)}
    >
      {children}
    </button>
  );
}

export default ButtonSettings;
