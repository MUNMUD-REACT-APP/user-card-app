import React from 'react';
import PropTypes from 'prop-types';

function UserCard({ name, age, isOnline, hobbies = ['No hobbies yet']}) {
  // Ensure hobbies defaults to an empty array if it's null or undefined
  //const safeHobbies = hobbies || ['No hobbies yet'];
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', margin: '10px' }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isOnline ? 'Online' : 'Offline'}</p>
      <h4>Hobbies:</h4>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isOnline: PropTypes.bool,
  hobbies: PropTypes.arrayOf(PropTypes.string),
};

// Does not recommend in REACT 18
// UserCard.defaultProps = {
//   isOnline: false,
//   hobbies: ['No hobbies yet'],
// };

export default UserCard;