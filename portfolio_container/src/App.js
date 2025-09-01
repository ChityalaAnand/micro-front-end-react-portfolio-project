// productapp/src/App.js
import React, { Suspense } from "react";

import AboutApp from "aboutapp/App";
import ProjectsApp from "projectsapp/App";
import SkillsApp from "skillsapp/App";
import ContactApp from "contactapp/App";
import ExperienceApp from "experienceapp/App";
import ToDoApp from "todoapp/App";
import ReactEmpCrud from "employeeApp/EmployeeApp";
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const App = () => {
  return (
    <Router>
    <div style={{minHeight: "100vh", backgroundColor: "rgb(14,14,14)",
        padding: "0", color: "#fff",}}>

      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Chityala Anand</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
                <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link as={Link} to="/todo">ToDo</Nav.Link>
                <Nav.Link as={Link} to="/reactempcrud">EMP CRUD</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div style={{
          minHeight: "90vh", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          textAlign: "center", position: "relative", zIndex: 2,}}>
        <h2 style={{ fontStyle: "italic", fontSize: "8rem", color: "#ccc" }}>I’m a</h2>
        <h1 style={{ fontSize: "6.5rem", fontWeight: "bold", color: "#00ffff" }}>JAVA FULL-STACK</h1>
        <h1 style={{ fontSize: "6.5rem", fontWeight: "bold", color: "#ffffff" }}>DEVELOPER &</h1>
        <h1 style={{ fontSize: "6.5rem", fontWeight: "bold", color: "#ff007f" }}>SOFTWARE ENGINEER</h1>
      </div>


        {/* Routes */}
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/about" element={<AboutApp />} />
              <Route path="/projects" element={<ProjectsApp/>}/>
              <Route path="/skills" element={<SkillsApp />} /> 
              <Route path="/experience" element={<ExperienceApp/>}/>
              <Route path="/contact" element={<ContactApp/>}/>   
              <Route path="/todo" element={<ToDoApp/>}/>
              <Route path="/reactempcrud" element={<ReactEmpCrud/>}/>
            </Routes>
          </Suspense>
        </Container>
    </div>
    </Router>
  );
};

export default App;
