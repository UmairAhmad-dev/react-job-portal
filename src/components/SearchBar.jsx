import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onSearch(value);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Search jobs by title, company, or location..."
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  container: {
    marginBottom: "25px"
  },
  input: {
    width: "100%",
    padding: "14px 20px",
    borderRadius: "30px",
    border: "1px solid #d1d5db",
    fontSize: "15px",
    outline: "none",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    transition: "box-shadow 0.2s, border-color 0.2s"
  }
};

export default SearchBar;
