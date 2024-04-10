import React from 'react'

interface Props {
    selectedDate: Date,
    selectedTreatment: String,
    updatePage: (newPage: string) => void
}

// function findBooking(props: Props) {
//     console.log();
//     fetch("http://localhost:8080/api/find-sessions", {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/text",
//             "date" : date
//         }
//     }).then(res => res.json())
//     .then(data => {
//         console.log(data);
//     });


function GetSessions(props: Props) {
    const date: string = props.selectedDate.toISOString();
    const dateWithoutTime = date.substring(0, 10);
    console.log(date);
    fetch("http://localhost:8080/api/find-sessions", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "date" : dateWithoutTime
        }
    }).then(res => res.json())
    .then(data => {
        console.log(data);
    });

  return (
    <div>
        <table>
            <thead>{props.selectedDate.toDateString()}</thead>
            
        </table>
    </div>
  )
}

export default GetSessions