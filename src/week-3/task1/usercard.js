import React from 'react';
import './usercard.css';

function usercard({ name, email, age, backgroundColor }) {
  return (
    <div className="user-card" style={{ backgroundColor }}>
      
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default usercard;