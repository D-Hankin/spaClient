import "./singleStaff.css";
import azazel from "../images/Azazel.jpg";
import belial from "../images/Belial.jpg";

interface Props {
    chosenStaff: string;
    updateChosenStaff: (staff: string) => void;
}

function singleStaff(props: Props) {

  return (
    <div id="pageDiv">
    <div id="staffDiv">
        <h1>{props.chosenStaff}</h1>
        {props.chosenStaff === "Azazel" ? 
          <div className="staffDiv">
            <img className="staffImg" src={ azazel }/>
            <p>In the midst of hell's chaos, Azazel runs the spa with a molten-iron fist. Demons in search of respite will be greeted by Azazel's thunderous laughter and awkward gyrations. His methods may not be traditional—think more screaming than soothing—but demons leave feeling strangely invigorated, albeit with a few new lacerations.</p>
          </div> : null }
        {props.chosenStaff === "Belial" ? 
          <div className="staffDiv">
            <img className="staffImg" src={ belial }/>
            <p>Deep within the spa's fiery depths, Belial holds court as the master of "relaxation". With massages that feel more like wrestling matches and steam treatments involving literal hot coals, Belial's spa experience is not for the faint of heart. Demons emerge with ideas for their next bout of torture!</p>
          </div> : null }
    </div>
    <button onClick={ () => props.updateChosenStaff("") }>Back</button>
    </div>
  )
}

export default singleStaff