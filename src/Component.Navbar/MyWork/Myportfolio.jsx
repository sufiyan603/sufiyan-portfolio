import React from 'react';
import About from '../../assets/about.png';
import portfolio from '../../assets/portfolio.png';
import latestwork from '../../assets/latest work.png';
import touch from '../../assets/touch.png';

const Myportfolio = () => {
  const images = [
    { src: portfolio, alt: 'Portfolio' },
    { src: About, alt: 'About' },
    { src: latestwork, alt: 'Latest Work' },
    { src: touch, alt: 'Touch' },
  ];

  // Inline styles with dynamic adjustments for responsiveness
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "80px",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
  };

  const getCardStyle = (width) => ({
    width: width >= 800 ? "800px" : "250px",
    height: width >= 800 ? "700px" : "250px",
    border: "1px solid green",
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    transform: `rotate(${Math.random() < 0.5 ? "-5deg" : "5deg"})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    transition: "transform 0.3s ease",
  });

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    padding: "10px",
  };

  // Dynamically determine viewport width
  const viewportWidth = window.innerWidth;

  return (
    <div style={containerStyle}>
      {images.map((image, index) => (
        <div
          key={index}
          style={getCardStyle(viewportWidth)}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = `rotate(${
              Math.random() < 0.5 ? "-2deg" : "2deg"
            }) scale(1.05)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = `rotate(${
              Math.random() < 0.5 ? "-5deg" : "5deg"
            })`;
          }}
        >
          <img src={image.src} alt={image.alt} style={imageStyle} />
        </div>
      ))}
    </div>
  );
};

export default Myportfolio;
