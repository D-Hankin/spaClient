import "./menu.css";
import arrowright from "./images/arrowRight.png";

interface Props {
  page: string,
  setPage: (page: string) => void;
}

function Menu(props: Props) {
  return (
    <div id='menuLeftDiv'>
      <nav id='menuLeftDiv'>
        <ul id="menu">
          <div className="listDivs">
            <div className="itemDivs">
              <li className="menuLi" onClick={() => props.setPage("home")}>Home</li>
            </div>
            <div className="arrowDiv">
              {props.page ==="home" ?<img src={ arrowright }/> : null} 
            </div>
          </div>
          <div className="listDivs">
            <div className="itemDivs">
              <li className="menuLi" onClick={() => props.setPage("booking")}>Booking</li>
            </div>
            <div className="arrowDiv">  
              {props.page ==="booking" ?<img src={ arrowright }/> : null}
            </div>
          </div>
          <div className="listDivs">
            <div className="itemDivs">
              <li className="menuLi" onClick={() => props.setPage("staff")}>Staff</li>
            </div>
            <div className="arrowDiv">
              {props.page ==="staff" ?<img src={ arrowright }/> : null}
            </div>
          </div>
          <div className="listDivs">
            <div className="itemDivs">
              <li className="menuLi" onClick={() => props.setPage("contact")}>Contact</li>
            </div>
            <div className="arrowDiv">
            {props.page ==="contact" ?<img src={ arrowright }/> : null}
            </div>
          </div>
        </ul>
      </nav>   
    </div>
  )
}

export default Menu