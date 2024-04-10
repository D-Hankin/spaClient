interface Props {
    updateSelectedTreatment: (treatment: String) => void;
    updatePage: (newPage: string) => void
}  

function GetTreatment(props: Props) {

    function handleClick(treatment: string): void {
        props.updateSelectedTreatment(treatment);
        console.log(treatment);
    }

  return (
    <div id='treatmentDiv'>
        <h3>Choose Treatment</h3>
        <button onClick={() => handleClick("Screaming Scrub")}>Screaming Scrub</button>
        <button onClick={() => handleClick("Hot Coals Cool Down")}>Hot Coals Cool Down</button>
    </div>
  )
}

export default GetTreatment