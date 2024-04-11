import { useEffect, useState } from 'react'
import ShowAvailableSessions from './showAvailableSessions/ShowAvailableSessions';

interface Props {
    selectedDate: Date,
    selectedTreatment: string,
    updateSelectedTime: (time: string) => void;
}

interface Session {
    time: string,
    treatment: string
}

function GetSessions(props: Props) {

    const [bookedSessions, setBookedSessions] = useState<Session[][]>([]);
    
    const date: String = props.selectedDate.toLocaleDateString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' });
    
    const chosenTime = (time: string) => {
    props.updateSelectedTime(time);
    }

    useEffect (() => {
        async function getBookedSessions() {
            await fetch("http://localhost:8080/api/find-sessions/" + date)
            .then(res => res.json())
            .then(data => {
                setBookedSessions(data);
            });
        }
        getBookedSessions();
    }, [props.selectedDate]);


  return (
    <div>
    <table>
        <thead><tr><th></th><th>{props.selectedTreatment + ", " + props.selectedDate.toDateString()}</th><th></th></tr></thead>
        <ShowAvailableSessions bookedSessions={bookedSessions} selectedTreatment={props.selectedTreatment} chosenTime={chosenTime} selectedDate={props.selectedDate} />
    </table>
    </div>
  )
}

export default GetSessions