import React from "react";

const contactDetails = [
  {
    id: 1,
    label: "Phone",
    value: "+91 9441437496",
    icon: "📞",
    link: "tel:+919441437496",
  },
  {
    id: 2,
    label: "Email",
    value: "chityalaanand123@gmail.com",
    icon: "✉️",
    link: "mailto:chityalaanand123@gmail.com",
  },
  {
    id: 3,
    label: "Location",
    value: "Miryalaguda, Telangana, India - 508207",
    icon: "📍",
    link: "https://www.google.com/maps/place/Miryalaguda,+Telangana",
  },
  {
    id: 4,
    label: "LinkedIn",
    value: "linkedin.com/in/chityala-anand", // replace with your real LinkedIn handle
    icon: "🔗",
    link: "https://www.linkedin.com/in/chityala-anand",
  },
];

const ContactApp = () => {
  return (
    <div
      style={{
        maxWidth: "600px",
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
        Contact Me
      </h2>

      <div style={{ display: "grid", gap: "15px" }}>
        {contactDetails.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px",
              background: "#f0f7ff",
              borderRadius: "8px",
              textDecoration: "none",
              color: "#333",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <span style={{ fontSize: "1.5rem", marginRight: "12px" }}>
              {item.icon}
            </span>
            <div>
              <strong>{item.label}:</strong> {item.value}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactApp;
