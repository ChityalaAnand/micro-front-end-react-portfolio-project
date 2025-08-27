import React from "react";

const dummyProjects = [
  {
    id: 1,
    title: "CRM System Enhancement & SaaS Distributor Module",
    description:
      "Developed and optimized modules supporting Sales, Customer Support, Marketing Automation, Reporting, and Collection management workflows. Ensured system scalability through architecture discussions, performance tuning, and code reviews.",
    technologies: ["Spring Boot", "Spring MVC", "Hibernate", "MySQL", "REST APIs"],
  },
  {
    id: 2,
    title: "School Product Landscape Module",
    description:
      "Built a module to streamline book purchase records, pricing details, and distributor relationship management across educational institutions, improving operational workflows.",
    technologies: ["Spring Boot", "Hibernate", "MySQL", "Linux Servers"],
  },
  {
    id: 3,
    title: "Next English & Next STEM Products",
    description:
      "Implemented end-to-end workflows for flagship curriculum products covering Purchase Orders, Agreement Management, Payment Scheduling, Invoice Generation, and Data Collection.",
    technologies: ["Spring Boot", "Spring MVC", "MySQL", "Maven"],
  },
];

const ProjectsApp = ({ projects }) => {
  const projectsData = projects && projects.length > 0 ? projects : dummyProjects;

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#fff",
      }}
    >
      <h2
        style={{
          fontSize: "1.8rem",
          marginBottom: "20px",
          color: "#333",
          textAlign: "center",
        }}
      >
        My Projects
      </h2>

      {projectsData.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>No projects available</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              style={{
                padding: "20px",
                borderRadius: "8px",
                background: "#f9f9ff",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                transition: "transform 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <h3 style={{ margin: "0 0 10px", color: "#222" }}>{project.title}</h3>
              <p style={{ margin: "0 0 12px", color: "#555", fontSize: "0.95rem" }}>
                {project.description}
              </p>
              <div style={{ marginTop: "10px" }}>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    style={{
                      display: "inline-block",
                      background: "#e0f0ff",
                      color: "#333",
                      padding: "5px 10px",
                      margin: "4px",
                      borderRadius: "5px",
                      fontSize: "0.85rem",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsApp;
