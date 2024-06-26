import { useState } from 'react'
import StaffStart from './staffStart/StaffStart';
import SingleStaff from './singleStaff/SingleStaff';

function Staff() {

  const [chosenStaff, setChosenStaff] = useState<string>("");

  const updateChosenStaff = (staff: string) => {
    setChosenStaff(staff);

  }

  return (
    <div>
      <h1>Staff</h1>
      { chosenStaff === "" ? <StaffStart updateChosenStaff={updateChosenStaff} /> : null }
      { chosenStaff !== "" ? <SingleStaff chosenStaff={chosenStaff} updateChosenStaff={updateChosenStaff} /> : null } 
    </div>
  )
}

export default Staff