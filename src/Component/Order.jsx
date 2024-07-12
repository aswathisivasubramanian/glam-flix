import React, { useState } from 'react';
 
const FeedbackForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });
 
  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
 
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here (e.g., send data to server)
    console.log(formData);
    // Clear form fields after submission
    setFormData({ name: '', email: '', feedback: '' });
  };
 
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Feedback Form</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          width: '80%',
          maxWidth: '600px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
        }}
      >
        <label
          style={{
            display: 'block',
            marginBottom: '10px'
          }}
        >
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={{
              width: 'calc(100% - 20px)',
              padding: '10px',
              marginBottom: '10px',
              fontSize: '1em',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
        </label>
        <br />
        <label
          style={{
            display: 'block',
            marginBottom: '10px'
          }}
        >
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{
              width: 'calc(100% - 20px)',
              padding: '10px',
              marginBottom: '10px',
              fontSize: '1em',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
        </label>
        <br />
        <label
          style={{
            display: 'block',
            marginBottom: '10px'
          }}
        >
          Feedback:
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleInputChange}
            required
            style={{
              width: 'calc(100% - 20px)',
              padding: '10px',
              marginBottom: '10px',
              fontSize: '1em',
              border: '1px solid #ccc',
              borderRadius: '4px',
              height: '120px'
            }}
          />
        </label>
        <br />
        <button
          type="submit"
          style={{
            padding: '12px 24px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1em'
          }}
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};
 
export default FeedbackForm;