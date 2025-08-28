import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
//import './App.css';
import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addNewTodo = () => {
    if(task.trim() === "")
      return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    alert("Todo deleted successfully!");
  }

  return (
    <Container className='mt-5 p-4 border rounded shadow' style={{ maxWidth: "800px", backgroundColor: "#f8f9fa" }}>
      <Row className='justify-content-center'>
        <Col md={10}>
          <h2 className='text-center' style={{ color: "black" }}>Todo List</h2>

        <Form className="d-flex">
          <Form.Control type='text' placeholder='Enter the work...' value={task} onChange={handleChange} className='me-2'/>
          <Button variant="primary" onClick={addNewTodo}>Add</Button>
        </Form> 
        <ListGroup className='mt-2'>
          {
            todos.map((item, index) => (
              <ListGroup.Item key={index} className='d-flex justify-content-between align-items-cenetr text-break'>{item}
              <Button variant='danger' size='sm' onClick={() => deleteTodo(index)}>Delete</Button>
              </ListGroup.Item>
            ))}
        </ListGroup>
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
