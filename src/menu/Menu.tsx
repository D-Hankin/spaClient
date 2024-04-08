import React from 'react'
import Home from '../home/Home'
import Staff from '../staff/Staff'
import Booking from '../booking/Booking'
import Contact from '../contact/Contact'

interface Props {
  page: string,
  setPage: (page: string) => void;
}

function Menu(props: Props) {
  return (
    <>
    <div id='menuLeftDiv'>
      <nav>
        <ul>
          <li className="menuLi" onClick={() => props.setPage("home")}>Home</li>
          <li className="menuLi" onClick={() => props.setPage("booking")}>Booking</li>
          <li className="menuLi" onClick={() => props.setPage("staff")}>Staff</li>
          <li className="menuLi" onClick={() => props.setPage("contact")}>Contact</li>
        </ul>
      </nav>   
    </div>
    <div id='contentRightDiv'>
      { props.page === "home" ? <Home /> : null}
      { props.page === "booking" ? <Booking /> : null}
      { props.page === "staff" ? <Staff /> : null}
      { props.page === "contact" ? <Contact /> : null}
    </div>
    </>
  )
}

export default Menu