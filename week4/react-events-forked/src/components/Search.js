const Search = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const handleFocus = (e) => {
    console.log("Focus???");
  };
  return (
    <input
      placeholder="Search..."
      onChange={handleChange}
      onFocus={handleFocus}
    />
  );
};

export default Search;
