const SearchInput = ({ setQuery, query }) => {
  return (
    <div className="input-wrapper">
      <input
        className="w-100"
        type="text"
        placeholder="Search For Student"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
