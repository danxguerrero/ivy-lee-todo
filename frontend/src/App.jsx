import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios from 'axios';

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('/api/items')
      .then(res => {
        console.log(res.data)
        setItems(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <h1>Todos</h1>

      {
        items.map(item => {
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.completed}</p>
          </div>
        })
      }
    </>
  )
}

export default App
