
import React from 'react';
import './ProfileCard.css'; 

const ProfileCard = ({ name, role, image, description }) => {
  return (
    <div className="card">
      <img src={image} alt={`${name}`} className="card-img" />
      <h2>{name}</h2>
      <h4>{role}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ProfileCard;
