const NoItemPlaceholder = ({ text, size }) => {
  return (
    <div
      className={`py-5 text-center d-flex flex-column fw-bold ${
        size ? size : "fs-4"
      }`}
    >
      <span>{text}</span>
    </div>
  );
};

export default NoItemPlaceholder;
