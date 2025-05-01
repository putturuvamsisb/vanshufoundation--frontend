import React, { useState } from "react";
import "../styles/Volunteer.css";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for applying to volunteer with us!");
    // Optional: send formData to backend here
  };

  return (
    <div className="volunteer-container">
      <div className="volunteer-header">
        <h1>Volunteer With Vanshu</h1>
        <p>
          Join our mission to create real change. Help us teach, inspire, and uplift lives across communities.
        </p>
      </div>

      <div className="volunteer-form-container">
        <form onSubmit={handleSubmit} className="volunteer-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
          />
          <select name="interest" required onChange={handleChange}>
            <option value="">Area of Interest</option>
            <option value="teaching">Teaching</option>
            <option value="fundraising">Fundraising</option>
            <option value="events">Events & Campaigns</option>
            <option value="tech">Tech & Design</option>
          </select>
          <textarea
            name="message"
            placeholder="Tell us why you want to volunteer..."
            rows="4"
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;
