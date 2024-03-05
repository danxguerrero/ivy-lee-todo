import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [areItemsVisible, setAreItemsVisible] = useState(true);
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const response = await fetch('/api/items');
    const itemsData = await response.json();
    setItems(itemsData);
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <>
      <h1>Todos</h1>

      {
        items.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.completed.toString()}</p>
          </div>
        ))
      }
      <button><a href="http://localhost:3000/login">login</a></button>
      <button><a href="http://localhost:3000/logout">logout</a></button>
    </>
  )
}

export default App
