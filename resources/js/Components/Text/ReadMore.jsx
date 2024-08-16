import React, { useState } from 'react';

const ReadMore = ({ text, maxLength }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleTextVisibility = () => {
    setShowFullText(!showFullText);
  };
  
  return (
  <div>
    {showFullText ? (
      <p className='text-sm font-light' onClick={toggleTextVisibility}      style={{ whiteSpace: 'pre-line' }}>{text}</p>
    ) : (
      <p className='text-sm font-light' 
            onClick={toggleTextVisibility}
            style={{ whiteSpace: 'pre-line' }}>
        {text.length > maxLength ? `${text.slice(0, maxLength)}... ` : text}{' '}
        {text.length > maxLength && (
          <span
            className='text-blue-500 underline font-semibold font-figtree cursor-pointer'
          >
            Read More
          </span>
        )}
      </p>
    )}
  </div>
  );
};

export default ReadMore;
