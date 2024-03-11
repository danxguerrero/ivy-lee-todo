import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { TaskList} from "./components/TaskList";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"

const App = () => {
  const [areTasksVisible, setAreTasksVisible] = useState(true);
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const response = await fetch('/api/items');
    const tasksData = await response.json();
    setTasks(tasksData);
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <>
      <main>
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand>Ivy Lee Todo</Navbar.Brand>
          </Container>
        </Navbar>

        <TaskList
          tasks={tasks}
          setAreTasksVisible={setAreTasksVisible}
        />
      </main>
    </>
  )
}

export default App
