# ChatGPT link

https://chatgpt.com/share/6755be41-d124-800c-aa7f-9ebb0508d034

Note: Should click on copy button to copy contain Readme.md
![image](https://github.com/user-attachments/assets/8e718908-3409-4511-bdad-dabe4597b87a)

# Open code space instead of coding at of local side
![image](https://github.com/user-attachments/assets/5f8ba562-8711-4139-831f-88006f43549d)
![image](https://github.com/user-attachments/assets/42012aa9-7350-4bb9-8492-0b156f63cf14)


# User Card App

A simple React application demonstrating how to create reusable components and enforce prop types using `PropTypes`.

## Features

- Display user information in a card layout.
- Enforce prop types to ensure type safety.
- Use default props for fallback values.

---

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your computer.
- Basic knowledge of React.

---

### Installation

1. **Clone or create the project:**
   ```bash
   npx create-react-app user-card-app
   cd user-card-app
   ```

2. **Install dependencies:**
   ```bash
   npm install prop-types
   ```

---

### Project Structure

```
user-card-app/
├── src/
│   ├── UserCard.js  # Component to display user information
│   ├── App.js       # Main application file
│   ├── index.js     # Application entry point
├── public/
│   ├── index.html   # Base HTML file
├── package.json     # Project configuration
├── README.md        # Project documentation
```

---

### Code Overview

#### `UserCard.js`

```jsx
import React from 'react';
import PropTypes from 'prop-types';

function UserCard({ name, age, isOnline, hobbies }) {
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

UserCard.defaultProps = {
  isOnline: false,
  hobbies: ['No hobbies yet'],
};

export default UserCard;
```

---

#### `App.js`

```jsx
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
```

---

### Running the App

1. **Start the development server:**
   ```bash
   npm start
   ```

2. **Open the app in your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

---

### Expected Output

You will see two user cards displayed:

- **John Doe**:
  - Age: 30
  - Status: Online
  - Hobbies: Reading, Gaming, Cooking

- **Jane Smith**:
  - Age: 25
  - Status: Offline
  - Hobbies: No hobbies yet

---

## Customization

You can easily customize the following:

- **Styling:** Modify the `style` objects in the components or use CSS files.
- **User Data:** Change the `name`, `age`, `isOnline`, or `hobbies` props in `App.js`.

---

## Technologies Used

- React
- PropTypes for type checking

---

## License

This project is licensed under the MIT License.

---

Feel free to copy this `README.md` and include it in your project folder. 😊
