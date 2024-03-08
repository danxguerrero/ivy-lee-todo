import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

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
        <Navbar>Todo</Navbar>
      </main>
    </>
  )
}

export default App
