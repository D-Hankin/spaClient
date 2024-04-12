import { useState } from 'react'
import StaffStart from './staffStart/StaffStart';
import SingleStaff from './singleStaff/SingleStaff';

interface Props {
  updatePage: (newPage: string) => void
}  

function Staff(props: Props) {

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