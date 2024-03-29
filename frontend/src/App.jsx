import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { TaskList} from "./components/TaskList";


import { Navbar, Nav, Container, Card, Button, Offcanvas, Col, Row} from "react-bootstrap";

const App = () => {
  const [areTasksVisible, setAreTasksVisible] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  async function getTasks() {
    try {    
      const response = await fetch('/api/items');
      const tasksData = await response.json();
      setTasks(tasksData);
    } catch (error) {
      console.log("Oh no, an error!", error);
    }
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <>
      <main>
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed="top" >
          <Container style={{ display: 'flex', justifyContent:'start', marginLeft:'1em'}}>
            <Button variant="dark" onClick={handleShow}>Menu</Button>
            <Navbar.Brand>Todo</Navbar.Brand>
            <Button variant='dark' href="http://localhost:3000/login">Login</Button>
          </Container>
        </Navbar>

        <Offcanvas show={showOffcanvas} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Todo</Offcanvas.Title>
          </Offcanvas.Header>
        </Offcanvas>
        <Container style={{ display: 'flex', justifyContent: 'row', alignItems: 'center', height: '100vh' }}>
          <Row>
            <Col>
              <TaskList
                tasks={tasks}
                setAreTasksVisible={setAreTasksVisible}
              />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}

export default App
