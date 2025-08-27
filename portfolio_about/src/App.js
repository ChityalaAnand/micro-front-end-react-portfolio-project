import React from "react";
import MyPhoto from "./assets/Anand.jpg";
const About = () => {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={MyPhoto}
        alt="me"
        style={{ width: "125px", borderRadius: "50%", marginBottom: "20px" }}
      />
      <h1 style={{ fontSize: "2rem", marginBottom: "10px", color: "#333" }}>
        Chityala Anand
      </h1>
      <h2
        style={{
          fontSize: "1.2rem",
          fontWeight: "normal",
          marginBottom: "20px",
          color: "#666",
        }}
      >
        Java Full Stack Developer
      </h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.5", color: "#444" }}>
        Highly motivated and results-driven Java Full Stack Developer with 2+
        years of hands-on experience in designing, developing, and deploying
        scalable enterprise applications. Proficient in Core Java, Spring Boot,
        Spring MVC, Spring Data JPA, and Hibernate. Skilled in developing
        RESTful APIs, building Microservices, optimizing SQL queries, and
        managing full-stack development workflows. Passionate about writing
        clean, maintainable code and contributing to high-impact software
        projects.
      </p>
    </div>
  );
};

export default About;
