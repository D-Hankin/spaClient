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
            await fetch("https://clownfish-app-2nvjm.ondigitalocean.app/api/find-sessions/" + date)
            .then(res => res.json())
            .then(data => {
                setBookedSessions(data);
            });
        }
        getBookedSessions();
    }, [props.selectedDate]);


  return (
        <ShowAvailableSessions bookedSessions={bookedSessions} selectedTreatment={props.selectedTreatment} chosenTime={chosenTime} selectedDate={props.selectedDate} />
  )
}

export default GetSessions