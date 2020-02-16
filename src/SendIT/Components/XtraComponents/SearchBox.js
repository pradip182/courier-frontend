import React from 'react';

export default ({ placeholder }) => (
  <div className='search-box'>
    <input type='text' placeholder={placeholder} />
    <button>
      Search
      <i className='fa fa-search' />
    </button>
  </div>
);
