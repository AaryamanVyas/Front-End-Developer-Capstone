import React from 'react';

const AboutUs = () => {
  return (
    <section id="about-section" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>About Us</h2>
        <p style={styles.text}>
          Welcome to Little Lemon! We are a family-owned Mediterranean restaurant dedicated to bringing you the best of fresh, authentic flavors. 
          Our story began with a passion for great food and a commitment to creating a warm, welcoming environment for everyone who steps through our doors.
        </p>
        <p style={styles.text}>
          From our signature dishes to our modern yet cozy decor, every detail is designed to offer you an exceptional dining experience. 
          Whether you're joining us for a special occasion, a casual meal, or a quick bite, we promise you'll leave with a smile and a full heart.
        </p>
        <p style={styles.text}>
          Thank you for choosing Little Lemon – where good food meets great memories. We look forward to serving you!
        </p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '50px 20px',
    backgroundColor: '#f4f4f4',
    color: '#333',
    textAlign: 'center',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#18181b',
  },
  text: {
    fontSize: '1rem',
    lineHeight: '1.8',
    marginBottom: '15px',
  },
};

export default AboutUs;
