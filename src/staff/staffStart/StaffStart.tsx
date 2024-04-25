import "./staffStart.css";
import azazel from "../images/Azazel.jpg";
import belial from "../images/Belial.jpg";

interface Props {
    updateChosenStaff: (staff: string) => void;
}

function staffStart(props: Props) {
  return (
    <div id="content">
        <div id="azazel" onClick={ () => props.updateChosenStaff("Azazel") }>
          <h2>Azazel</h2>
          <img id="azazelImg" src={ azazel }></img>
        </div>
        <div id="belial" onClick={ () => props.updateChosenStaff("Belial") }>
          <h2>Belial</h2>
          <img id="belialImg" src={ belial }></img>
        </div>
        <h4>Click to read more about the damned</h4>
    </div>
  )
}

export default staffStart