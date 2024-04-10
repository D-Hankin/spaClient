interface Props {
    bookedSessions: Session[][],
    selectedTreatment: String
    chosenTime: (time: string) => void;
}

interface Session {
    time: string,
    treatment: string
}

function ShowAvailableSessions(props: Props) {

    const sessionIsBooked = (time: string) => {
        for (let i = 0; i < props.bookedSessions.length; i++) {
            if (props.bookedSessions[i][0].time === time) {
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
                { !sessionIsBooked("09:00 - 12:00") ? <td><button onClick={() => handleClick("09:00 - 12:00")}>09:00 - 12:00</button></td> : null }
                { !sessionIsBooked("13:00 - 16:00") ? <td><button onClick={() => handleClick("13:00 - 16:00")}>13:00 - 16:00</button></td> : null }
                { !sessionIsBooked("17:00 - 20:00") ? <td><button onClick={() => handleClick("17:00 - 20:00")}>17:00 - 20:00</button></td>: null }
            </tr>
        </tbody>
    </>
  )
}

export default ShowAvailableSessions