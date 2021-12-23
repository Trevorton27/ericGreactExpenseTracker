import React from 'react';

const SearchBar = ({ pushedSubmit, submitBoxValue, onInputChange }) => {
  return (
    <form className='form  mt-3' onSubmit={pushedSubmit}>
      {' '}
      {/*handles onSubmit changes, need function to do this */}
      <input
        className='form-input'
        placeholder='Use the force'
        value={submitBoxValue}
        onChange={onInputChange}
      />
      <button className='btn btn-warning ms-3'>Search</button>
    </form>
  );
};

export default SearchBar;
