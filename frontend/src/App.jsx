import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { TaskList} from "./components/taskList/TaskList";


import { Navbar, Nav, Container, Card, Button, Offcanvas, Col, Row} from "react-bootstrap";

const App = () => {
  const [areTasksVisible, setAreTasksVisible] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState('');
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

  async function getUser() {
    try {
      const response = await fetch('/api/users/');
      const userData = await response.json();
      setUser(userData?.user.email)
    } catch (error) {
      console.log("There was an error getting user data: ", error);
    }
  }

  useEffect(() => {
    getUser()
  }, [user])

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <>
      <main>
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed="top" >
          <Container style={{ display: 'flex', justifyContent:'start', marginLeft:'1em'}}>
            <Button variant="dark" onClick={handleShow}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>
            </Button>
            <Navbar.Brand>Todo</Navbar.Brand>
            { !user ? <Button variant='dark' href="http://localhost:3000/login">Login</Button> :  <Button variant='dark' href="http://localhost:3000/logout">Log Out</Button>
            
            }
          </Container>
        </Navbar>

        <Offcanvas show={showOffcanvas} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Todo</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          </Offcanvas.Body>
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
