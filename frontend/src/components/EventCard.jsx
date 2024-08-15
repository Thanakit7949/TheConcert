import React from 'react';
import '../styles/EventCard.css';

const EventCard = ({ image, title }) => {
  return (
    <div className="event-card">
      <img src={image} alt={title} className="event-image" />
      <h3>{title}</h3>
    </div>
  );
};

export default EventCard;
