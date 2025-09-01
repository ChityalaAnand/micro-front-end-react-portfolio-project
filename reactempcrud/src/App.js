import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent.jsx';
import HeaderComponent from './components/HeaderComponent.jsx';
//import FooterComponent from './components/FooterComponent.jsx';
import CreateEmployeeComponent from './components/CreateEmployeeComponent.jsx';


function App() {
  return (
    <Router>
      <div>
        <HeaderComponent />
        <div className="container">
          <ListEmployeeComponent/>
       {/*   <Routes>
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route path="/api/employee/employees" element={<ListEmployeeComponent />} />
            <Route path="/api/employee/addEmployee" element={<CreateEmployeeComponent />} />
          </Routes>*/}

        </div>
        {/*<FooterComponent />*/}
      </div>
    </Router>
  );
}

export default App;

