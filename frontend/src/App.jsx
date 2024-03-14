import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { TaskList} from "./components/TaskList";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import Offcanvas from "react-bootstrap/Offcanvas"

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
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed="top">
          <Container>
            <Button variant="dark" onClick={handleShow}>Menu</Button>
            <Navbar.Brand>Ivy Lee Todo</Navbar.Brand>
          </Container>
        </Navbar>

        <Offcanvas show={showOffcanvas} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
        </Offcanvas>

        <TaskList
          tasks={tasks}
          setAreTasksVisible={setAreTasksVisible}
        />
      </main>
    </>
  )
}

export default App
