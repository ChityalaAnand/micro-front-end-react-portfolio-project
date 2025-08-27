import React from "react";

const dummySkills = [
  { id: 1, name: "Java", level: "Advanced" },
  { id: 2, name: "Spring Boot", level: "Advanced" },
  { id: 3, name: "Spring MVC", level: "Advanced" },
  { id: 4, name: "Hibernate / JPA", level: "Advanced" },
  { id: 5, name: "JavaScript", level: "Intermediate" },
  { id: 6, name: "React", level: "Intermediate" },
  { id: 7, name: "MySQL", level: "Intermediate" },
  { id: 8, name: "Git / Maven", level: "Intermediate" },
  { id: 9, name: "HTML & CSS", level: "Advanced" },
];

const SkillsApp = ({ skills }) => {
  const skillsData = skills && skills.length > 0 ? skills : dummySkills;

  return (
    <div
      style={{
        maxWidth: "800px",
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
        My Skills
      </h2>

      {skillsData.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>No skills found</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "15px",
          }}
        >
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              style={{
                padding: "15px",
                borderRadius: "8px",
                background: "#f0f7ff",
                textAlign: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                transition: "transform 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <h3 style={{ margin: "0 0 8px", color: "#222" }}>{skill.name}</h3>
              <p style={{ margin: 0, color: "#666", fontStyle: "italic" }}>
                {skill.level}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsApp;
