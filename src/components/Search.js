import React from 'react';

function Search(props) {
  const { setTitle, isActive } = props;

  return (
    <div className='search'>
      <input
        style={{ display: isActive ? 'block' : '' }}
        onChange={(e) => setTitle(e.target.value)}
        type='text'
        placeholder='Search'
        id='searchBar'
      />
    </div>
  );
}

export default Search;
