import React from 'react';

function ProjectCard({ src, link, h3, p ,github}) {
  const styles = {
    link: {
      marginTop: "10px",
      display: "inline-block",
      padding: "10px 20px",
      backgroundColor: "#2563eb", // Tailwind's `bg-blue-600`
      color: "#ffffff",
      fontWeight: "600",
      borderRadius: "0.5rem",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textDecoration: "none",
      transition: "all 0.2s ease-in-out",
    },
    hover: {
      backgroundColor: "#1d4ed8", // Tailwind's `hover:bg-blue-700`
      boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
    },
  };
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.link}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = styles.hover.backgroundColor;
        e.target.style.boxShadow = styles.hover.boxShadow;
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = styles.link.backgroundColor;
        e.target.style.boxShadow = styles.link.boxShadow;
      }}
    >
      GitHub Source Code
    </a>
    </a>
  );
}

export default ProjectCard;
