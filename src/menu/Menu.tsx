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
    </>
  )
}

export default Menu