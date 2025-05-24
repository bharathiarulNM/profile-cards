// src/App.js
import React from 'react';
import './App.css';
import ProfileCard from './ProfileCard';

function App() {
  const users = [
    {
      name: "Alice Johnson",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      description: "Specializes in UI/UX and modern web design."
    },
    {
      name: "Bob Smith",
      role: "Backend Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      description: "Loves building scalable APIs and databases."
    },
    {
      name: "Charlie Brown",
      role: "Full Stack Developer",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      description: "Enjoys building full-scale applications."
    }
  ];

  return (
    <div className="App">
      <h1>Profile Cards</h1>
      <div className="card-container">
        {users.map((user, index) => (
          <ProfileCard
            key={index}
            name={user.name}
            role={user.role}
            image={user.image}
            description={user.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
