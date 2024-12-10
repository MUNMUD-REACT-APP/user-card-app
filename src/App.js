import React from 'react';
import UserCard from './UserCard';

function App() {
 
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>User Cards</h1>
      <UserCard 
        name="John Doe" 
        age={30} 
        isOnline={true} 
        hobbies={['Reading', 'Gaming', 'Cooking']} 
      />
      <UserCard 
        name="Jane Smith" 
        age={25}
      />
    </div>
  );
}

export default App;