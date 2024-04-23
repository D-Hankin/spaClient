import "./contact.css"
import devil from "./images/Devil.jpg";

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <h3>The Lord Master is always watching! If he wishes to speak to you, he will speak to you.</h3>
      <div id="devilDiv">
        <img id="imgDiv" src={ devil }></img>
      </div>
    </div>
  )
}

export default Contact