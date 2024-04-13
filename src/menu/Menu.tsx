import "./menu.css";

interface Props {
  page: string,
  setPage: (page: string) => void;
}

function Menu(props: Props) {
  return (
    <>
    <div id='menuLeftDiv'>
      <nav>
        <ul id="menu">
          <div className="listDivs">
            <li className="menuLi" onClick={() => props.setPage("home")}>Home</li>
            {props.page ==="home" ?<img src="src\menu\images\arrowRight.png"/> : null} 
          </div>
          <div className="listDivs">
            <li className="menuLi" onClick={() => props.setPage("booking")}>Booking</li>
            {props.page ==="booking" ?<img src="src\menu\images\arrowRight.png"/> : null}
          </div>
          <div className="listDivs">
            <li className="menuLi" onClick={() => props.setPage("staff")}>Staff</li>
            {props.page ==="staff" ?<img src="src\menu\images\arrowRight.png"/> : null}
          </div>
          <div className="listDivs">
            <li className="menuLi" onClick={() => props.setPage("contact")}>Contact</li>
            {props.page ==="contact" ?<img src="src\menu\images\arrowRight.png"/> : null}
          </div>
        </ul>
      </nav>   
    </div>
    </>
  )
}

export default Menu