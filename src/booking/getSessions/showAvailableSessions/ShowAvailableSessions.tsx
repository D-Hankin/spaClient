interface Props {
    bookedSessions: Session[][],
    selectedDate: Date,
    selectedTreatment: string,
    chosenTime: (time: string) => void,
}

interface Session {
    time: string,
    treatment: string
}

function ShowAvailableSessions(props: Props) {

    const sessionIsBooked = (time: string, treatment: string) => {
        for (let i = 0; i < props.bookedSessions.length; i++) {
            const sessionArray = props.bookedSessions[i];
    
            if (String(sessionArray[0]) === time && String(sessionArray[1]) === treatment) {
                return true;
            }
        }
        return false;
    };
    
    const handleClick = (time: string) => {
        props.chosenTime(time);
    };

  return (
    <>
        <tbody>
            <tr>
                { !sessionIsBooked("09:00 - 12:00", props.selectedTreatment) ? <td><button onClick={() => handleClick("09:00 - 12:00")}>09:00 - 12:00</button></td> : <td><button disabled><s>09:00 - 12:00</s></button></td>}
                { !sessionIsBooked("13:00 - 16:00", props.selectedTreatment) ? <td><button onClick={() => handleClick("13:00 - 16:00")}>13:00 - 16:00</button></td> : <td><button disabled><s>13:00 - 16:00</s></button></td> }
                { !sessionIsBooked("17:00 - 20:00", props.selectedTreatment) ? <td><button onClick={() => handleClick("17:00 - 20:00")}>17:00 - 20:00</button></td> : <td><button disabled><s>17:00 - 20:00</s></button></td> }
            </tr>
        </tbody>
    </>
  )
}

export default ShowAvailableSessions