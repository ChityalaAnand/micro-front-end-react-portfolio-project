import React from "react";

const ExperienceApp = () => {
  const experiences = [
    {
      role: "Software Engineer | Java Full Stack Developer",
      company: "Next Education India Pvt. Ltd – Hyderabad",
      duration: "May 2023 – Present",
      description: [
        "Designed and developed scalable modules for CRM System, enhancing sales and order management workflows.",
        "Led end-to-end feature development of the Distributor System for a SaaS-based product.",
        "Built the School Product Landscape module to streamline purchase records and pricing.",
        "Optimized SQL queries, improving database performance by 20%.",
        "Resolved 400+ request tickets (RTs) related to customer issues and enhancements.",
      ],
    },
    {
      role: "Java Full Stack Developer Intern",
      company: "Hospital Management System Project",
      duration: "2022 – 2023",
      description: [
        "Developed and maintained modules for hospital management web application.",
        "Implemented CRUD operations with Spring Boot and MySQL.",
        "Worked on authentication, invoice management, and reporting workflows.",
      ],
    },
  ];

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}>
        Professional Experience
      </h2>

      {experiences.map((exp, index) => (
        <div
          key={index}
          style={{
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h3 style={{ margin: "0 0 10px", color: "#007bff" }}>
            {exp.role}
          </h3>
          <h4 style={{ margin: "0 0 5px", color: "#555" }}>
            {exp.company}
          </h4>
          <p style={{ margin: "0 0 15px", fontStyle: "italic", color: "#666" }}>
            {exp.duration}
          </p>
          <ul style={{ margin: 0, paddingLeft: "20px", color: "#444" }}>
            {exp.description.map((point, i) => (
              <li key={i} style={{ marginBottom: "8px" }}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceApp;
