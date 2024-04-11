import { useState } from "react";

interface Props {
    selectedDate: Date,
    selectedTreatment: String,
    selectedTime: String,
    openCloseConfirmationDialog: (value: Boolean) => void,
    updateSuccess: (value: Boolean) => void
}

function ShowConfirmationDialog(props: Props) {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(name, email, phoneNumber);

        fetch("http://localhost:8080/api/create-booking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({
                "bookingNumber": 0,
                "name": name,
                "phoneNumber": phoneNumber,
                "email": email,
                "sessionType": props.selectedTreatment,
                "date": props.selectedDate.toLocaleDateString(),
                "session": props.selectedTime
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            props.updateSuccess(true);
        })
        props.openCloseConfirmationDialog(false);
    } 

  return (
    <>
        <div>ShowConfirmationDialog</div>
        <form onSubmit={handleSubmit}>
            <h2>Enter your details and confirm the booking...</h2>
            <p>{props.selectedTreatment}</p>
            <p>{props.selectedDate.toDateString()}</p>
            <p>{props.selectedTime}</p>
            <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
            <input id="email" placeholder='@email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input id='phonenumber' placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
            <button type="submit">Confirm</button>
        </form>
    </>
  )
}

export default ShowConfirmationDialog