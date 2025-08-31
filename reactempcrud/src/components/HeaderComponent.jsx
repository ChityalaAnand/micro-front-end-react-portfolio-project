import React, { useState } from 'react';
import CreateEmployeeComponent from './CreateEmployeeComponent.jsx';

function HeaderComponent() {
  const [showEmpModal, setShowEmpModal] = useState(false);

  const addEmployee = () => setShowEmpModal(true);
  const closeEmpModal = () => setShowEmpModal(false);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark px-3">
        <a href="/" className="navbar-brand">Employee Management App</a>
        <button className="btn btn-primary" onClick={addEmployee}>Add Employee</button>
      </nav>
      {showEmpModal && (
        <div className="employee-form-container">
          <CreateEmployeeComponent onClose={closeEmpModal} />
        </div>
      )}
    </>
  );
}

export default HeaderComponent;
