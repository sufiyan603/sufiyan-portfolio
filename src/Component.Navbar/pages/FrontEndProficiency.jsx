import React from 'react';

const FrontEndProficiency = () => {
  const handleGoBack = () => {
    window.history.back(); // Navigates back to the previous page
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Front-End Proficiency</h1>
      <div style={styles.cardContainer}>
        {/* English Card */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>What is Front-End Proficiency.</h2>
          <p style={styles.cardText}>
            Front-End Proficiency refers to the skills and knowledge required to create visually appealing, 
            user-friendly, and responsive websites and web applications. It involves expertise in HTML, CSS, 
            JavaScript, and modern libraries like React, as well as an understanding of user experience (UX) and design principles.
          </p>
        </div>
      </div>
      <button
      onClick={handleGoBack}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        marginTop:"15px",
        color: 'white',
        backgroundColor: 'green',
        border: '1px solid black',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Go Back
    </button>
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:"20px",
    minHeight: "10vh",
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
    padding: "20px",
  },
  header: {
    color: "white",
    marginBottom: "20px",
    fontSize: "2rem",
    textAlign: "center",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    width: "220px",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    overflow: "hidden",
    padding: "20px",
  },
  cardTitle: {
    fontSize: "1.5rem",
    marginBottom: "15px",
    color: "#333",
  },
  cardText: {
    fontSize: "1rem",
    lineHeight: "1.5",
    color: "#666",
  },
};

export default FrontEndProficiency;
