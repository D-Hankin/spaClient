import React from 'react'

interface Props {
    selectedTreatment: String,
    setSelectedTreatment: (selectedTreatment: String) => void
    updatePage: (newPage: string) => void
}  

function GetTreatment(props: Props) {

    function handleClick(arg0: string): void {

        props.setSelectedTreatment(arg0);
        throw new Error('Function not implemented.')
        
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