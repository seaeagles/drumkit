import { useState } from 'react'
import './App.css'
import { Wrapper } from './components/wrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Wrapper />
    </div>
  )
}

export default App
