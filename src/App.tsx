import { useState } from 'react'
import './App.css'
import Menu from './menu/Menu'
import Staff from './staff/Staff'
import Booking from './booking/Booking'
import Contact from './contact/Contact'

function App() {

  return (
    <>
      <h1>The New World Order Spa and Relaxtion Center</h1>
      <div id='contentDiv'>
        <div id='menuLeftDiv'>
          <Menu />
        </div>
        <div id='contentRightDiv'>
          <Staff />
          <Booking />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
