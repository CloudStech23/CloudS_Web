import React, { useState } from 'react';

const ContentSwitcher = () => {
  const [activeButton, setActiveButton] = useState(null); // State to track active button
  const [formData, setFormData] = useState({ name: '', email: '' }); // State to manage form data

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName); // Update active button state when clicked
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server, etc.
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <div className="sidebar">
        <button onClick={() => handleButtonClick('button1')}>Button 1</button>
        <button onClick={() => handleButtonClick('button2')}>Button 2</button>
      </div>
      <div className="content">
        {activeButton === 'button1' && (
          <div>
            <h2>Button 1 Content</h2>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
        {activeButton === 'button2' && (
          <div>
            <h2>Button 2 Content</h2>
            <div className="user-card">
              <h3>User Card</h3>
              <p>Name: {formData.name}</p>
              <p>Email: {formData.email}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentSwitcher;
