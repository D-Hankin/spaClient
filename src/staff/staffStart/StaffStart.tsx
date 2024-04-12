import React from 'react'

interface Props {
    updateChosenStaff: (staff: string) => void;
}

function staffStart(props: Props) {
  return (
    <div>
        <div onClick={ () => props.updateChosenStaff("Azazel") }>
          <h2>Azazel</h2>
          <img src='src\staff\images\Azazel.jpg'></img>
        </div>
        <div onClick={ () => props.updateChosenStaff("Belial") }>
          <h2>Belial</h2>
          <img src='src\staff\images\Belial.png'></img>
        </div>
    </div>
  )
}

export default staffStart