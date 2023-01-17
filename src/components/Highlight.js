import React from 'react';

export default function Highlight({children, color}) {
  return (
    <span
    className='highlight'
      style={{
        backgroundColor: color,
      }}>
      {children}
    </span>
  );
}