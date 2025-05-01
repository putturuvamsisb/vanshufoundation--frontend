// src/pages/Events.js
import React, { useState } from 'react';
import '../styles/Events.css';

// ✅ Import images from src/assets
import healthCampImg from '../assets/health-camp.jpeg';
import galaNightImg from '../assets/gala-night.png';
import childrensDayImg from '../assets/childrens-day.png';

const Events = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const changeMonth = (offset) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1);
    setCurrentDate(newDate);
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-cell empty"></div>);
    }

    for (let date = 1; date <= lastDate; date++) {
      days.push(
        <div key={date} className="calendar-cell">
          {date}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="events-page">
      <div className="events-hero">
        <h1>Upcoming Events</h1>
        <p>Stay up-to-date with the latest events from Vanshu Foundation.</p>
      </div>

      <div className="calendar-container">
        <div className="calendar-header">
          <button onClick={() => changeMonth(-1)}>&lt;</button>
          <h3>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h3>
          <button onClick={() => changeMonth(1)}>&gt;</button>
        </div>

        <div className="calendar-days">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
            <div key={day} className="calendar-day">{day}</div>
          ))}
        </div>

        <div className="calendar-grid">
          {renderCalendar()}
        </div>
      </div>

      <div className="event-cards-section">
        <h2 className="section-title">Highlighted Events</h2>
        <div className="event-cards-container">
          <div className="event-card">
            <img src={healthCampImg} alt="Health Camp" />
            <div className="event-card-info">
              <h3>Health Camp 2025</h3>
              <p>Join us for a free medical health check-up for underprivileged families.</p>
              <span className="event-date">30 Apr 2025</span>
            </div>
          </div>
          <div className="event-card">
            <img src={galaNightImg} alt="Gala" />
            <div className="event-card-info">
              <h3>Annual Fundraising Gala</h3>
              <p>Support our mission at an elegant evening with performances and dinner.</p>
              <span className="event-date">15 May 2025</span>
            </div>
          </div>
          <div className="event-card">
            <img src={childrensDayImg} alt="Children’s Day" />
            <div className="event-card-info">
              <h3>Children’s Day Celebration</h3>
              <p>A joyful day of games, gifts, and smiles for all the kids we support!</p>
              <span className="event-date">14 Nov 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
