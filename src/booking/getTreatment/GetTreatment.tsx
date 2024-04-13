interface Props {
    updateSelectedTreatment: (treatment: string) => void;
    updatePage: (newPage: string) => void
}  

function GetTreatment(props: Props) {

    const handleClick = (treatment: string) => {
        props.updateSelectedTreatment(treatment);
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