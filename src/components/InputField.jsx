//import React from "react";


const InputField = ({ query, handleQueryInput, handleSearchUsers }) => {
  return (
    <div className="inputField">
      <form>
      <input
        className="input"
        type="text"
        placeholder="Enter Github Username"
        value={query}
        onChange={handleQueryInput}
      />
      <button className="button" onClick={handleSearchUsers}>
        Add
      </button>
      </form>
    </div>
  );
}

export default InputField