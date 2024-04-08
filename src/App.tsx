import { useState } from 'react'
import './App.css'
import Menu from './menu/Menu'

function App() {

  const [page, setPage] = useState("home");

  return (
    <>
      <h1>The New World Order Spa and Relaxtion Center</h1>
      <div id='contentDiv'>
        <Menu page={page} setPage={setPage} />
      </div>
    </>
  )
}

export default App
